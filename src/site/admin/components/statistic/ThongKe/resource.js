import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import statisticalProvider from "@data-access/statistical-provider";
import Chart from "chart.js";
import { Input, Select, Form } from "antd";
import { Panel } from "@admin/components/admin";
import useInterval from "@hooks/useInterval";
import statusProvider from "@data-access/status-provider";
import cityProvider from "@data-access/city-provider";
import communeProvider from "@data-access/commune-provider";
import districtProvider from "@data-access/district-provider";
import hospitalProvider from "@data-access/hospital-provider";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./style.scss";
import snackbar from "@utils/snackbar-utils";
am4core.useTheme(am4themes_animated);
const { Option } = Select;

function index(props) {
  const chartRef = useRef(null);
  const [state, _setState] = useState({
    typeChart: 4,
    tinhThanhPhoId: "",
    quanHuyenId: "",
    xaPhuongId: "",
    coSoYTeId: "",
    data: {},
    bieuDo: 1,
  });
  const setState = (_state) => {
    _setState((state) => ({
      ...state,
      ...(_state || {}),
    }));
  };
  const loadData = (action, item) => {
    let tinhThanhPhoId =
      action === "tinhThanhPhoId" ? item : state.tinhThanhPhoId;
    let quanHuyenId = action === "quanHuyenId" ? item : state.quanHuyenId;
    let xaPhuongId = action === "xaPhuongId" ? item : state.xaPhuongId;
    let coSoYTeId = action === "coSoYTeId" ? item : state.coSoYTeId;
    statisticalProvider
      .resource(tinhThanhPhoId, quanHuyenId, xaPhuongId, coSoYTeId)
      .then((s) => {
        if (s && s.code === 0 && s.data && s.data.length) {
          let obj = {};
          let arr = [];
          s.data.forEach((item) => {
            if (!obj[item.maNguonVon]) {
              obj[item.maNguonVon] = {
                code: item.maNguonVon,
                nameNV: item.nguonVon,
                thietbi: {},
              };
            }
            if (item.maThietBi) {
              if (!obj[item.maNguonVon].thietbi[item.maThietBi]) {
                obj[item.maNguonVon].thietbi[item.maThietBi] = {
                  id: item.maThietBi,
                  name: item.tenThietBi,
                  number: 0,
                };
              }
              obj[item.maNguonVon].thietbi[item.maThietBi].number +=
                item.soLuong;
            }
          });
          for (let key in obj) {
            arr.push(obj[key]);
          }
          showChart(arr);
        } else if (s && s.code === 0 && s.data && s.data.length === 0) {
          showChart([]);
        }
      });
  };
  useEffect(() => {
    loadData();
    getCity();
    getHospital();
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  const setColor = (chart) => {
    chart.colors.list = [
      "#FF6384",
      "#36A2EB",
      "#FFCE56",
      "#883997",
      "#8bf6ff",
      "#4ebaaa",
      "#6effe8",
      "#63a4ff",
      "#ff5983",
      "#fa5788",
      "#39796b",
      "#ffad42",
      "#7b5e57",
      "#ffff56",
      "#484848",
      "#6ab7ff",
      "#845EC2",
      "#D65DB1",
      "#FF6F91",
      "#FF9671",
      "#FFC75F",
      "#F9F871",
    ].map((item) => am4core.color(item));
  };

  const showChart = (data) => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    let _series = {};
    chart.data =
      data && data.length
        ? data.map((item) => {
            let item2 = {};
            item2.nameNV = item.nameNV;
            for (let key in item.thietbi) {
              item2[item.thietbi[key].name] = item.thietbi[key].number;
              _series[item.thietbi[key].name] = "";
            }
            return item2;
          })
        : [];
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "nameNV";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    function createSeries(field, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "nameNV";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;

      let valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueX}";
      valueLabel.label.horizontalCenter = "left";
      valueLabel.label.dx = 10;
      valueLabel.label.hideOversized = false;
      valueLabel.label.truncate = false;

      let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      // categoryLabel.label.text = "{name}";
      categoryLabel.label.horizontalCenter = "right";
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color("#fff");
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    }
    for (let key in _series) {
      createSeries(key, key);
    }

    // createSeries("income", "Income");
    // createSeries("expenses", "Expenses");
  };

  const getHospital = () => {
    hospitalProvider
      .search(0, 9999)
      .then((s) => {
        if (s.code == 0) {
          setState({
            listHospital: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const getCity = () => {
    cityProvider
      .search(0, 9999)
      .then((s) => {
        setState({
          listCity: s.data,
        });
      })
      .catch((e) => {});
  };
  const getDistrict = (e) => {
    districtProvider
      .search(0, 9999, e)
      .then((s) => {
        setState({
          listDistrict: s.data,
        });
      })
      .catch((e) => {});
  };
  const getCommune = (e) => {
    communeProvider
      .search(0, 9999, e)
      .then((s) => {
        setState({
          listCommune: s.data,
        });
      })
      .catch((e) => {});
  };
  return (
    <Panel
      id={"effortmonth"}
      sortable={true}
      allowClose={false}
      title="Biểu đồ thống kê"
    >
      <div className="chart-status row">
        <div className="detail-left col-md-4">
          <div className="row">
            <div className="col-md-6">
              <Form.Item className="chart-selcect" label="Nội dung biểu đồ">
                <Select
                  placeholder="Nội dung biểu đồ"
                  onChange={(e, i) => {
                    props.onChange(e);
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  value={state.typeChart}
                >
                  <Option value={1}>Thống kê theo trạng thái thiết bị</Option>
                  <Option value={2}>
                    Thống kê tỷ lệ BV đã nhập, chưa nhập dữ liệu
                  </Option>
                  <Option value={3}>
                    Thống kê tên thiết bị theo trạng thái và khả năng điều
                    chuyển
                  </Option>
                  <Option value={4}>
                    Thống kê tên thiết bị theo nguồn vốn
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item className="chart-selcect" label="Cơ sở y tế">
                <Select
                  value={state.coSoYTeId}
                  placeholder="Chọn cơ sở y tế"
                  onChange={(e, i) => {
                    setState({
                      coSoYTeId: e,
                    });
                    loadData("coSoYTeId", e);
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="">Tất cả</Option>
                  {state.listHospital && state.listHospital.length
                    ? state.listHospital.map((item, index) => {
                        return (
                          item && (
                            <Option key={index} value={item.id}>
                              {item.ten}
                            </Option>
                          )
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
              <Form.Item className="chart-selcect" label="Loại biểu đồ">
                <Select
                  value={state.bieuDo}
                  placeholder="Chọn loại biểu đồ"
                  onChange={(e, i) => {
                    setState({
                      bieuDo: e,
                    });
                    loadData("bieuDo", e);
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value={1}>Hình Cột</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-md-6">
              <Form.Item className="chart-selcect" label="Tỉnh/Thành phố">
                <Select
                  value={state.tinhThanhPhoId}
                  placeholder="Chọn tỉnh/Thành phố"
                  onChange={(e, i) => {
                    setState({
                      tinhThanhPhoId: e,
                    });
                    getDistrict(e);
                    loadData("tinhThanhPhoId", e);
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="">Chọn tỉnh/ thành phố</Option>
                  {state.listCity &&
                    state.listCity.length &&
                    state.listCity.map((option, index) => {
                      return (
                        <Option key={index} value={option.id}>
                          {option.ten}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <Form.Item className="chart-selcect" label="Quận/huyện">
                <Select
                  value={state.quanHuyenId}
                  placeholder="Chọn quận/huyện"
                  onChange={(e, i) => {
                    setState({
                      quanHuyenId: e,
                    });
                    loadData("quanHuyenId", e);
                    getCommune(e);
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="">Chọn quận/huyện</Option>
                  {state.listDistrict && state.listDistrict.length
                    ? state.listDistrict.map((item, index) => {
                        return (
                          item && (
                            <Option key={index} value={item.id}>
                              {item.ten}
                            </Option>
                          )
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
              <Form.Item className="chart-selcect" label="Xã/phường">
                <Select
                  value={state.xaPhuongId}
                  placeholder="Chọn xã/phường"
                  onChange={(e, i) => {
                    setState({
                      xaPhuongId: e,
                    });
                    loadData("xaPhuongId", e);
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="">Chọn xã/phường</Option>
                  {state.listCommune && state.listCommune.length
                    ? state.listCommune.map((item, index) => {
                        return (
                          item && (
                            <Option key={index} value={item.id}>
                              {item.ten}
                            </Option>
                          )
                        );
                      })
                    : null}
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="col-md-8 detail-right">
          <h3 className="title">
            <small></small>
          </h3>
          <div
            id="chartdiv"
            style={{ width: "100%", height: "calc(100vh - 300px)" }}
          ></div>
          {/* 
          <canvas ref={chartRef} /> */}
        </div>
      </div>
    </Panel>
  );
}

export default index;
