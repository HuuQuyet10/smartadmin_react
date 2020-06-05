import React, { useState, useEffect, useRef } from "react";
import statisticalProvider from "@data-access/statistical-provider";
import { Input, Select, Form } from "antd";
import { Panel } from "@admin/components/admin";
import cityProvider from "@data-access/city-provider";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import snackbar from "@utils/snackbar-utils";
import "./style.scss";
am4core.useTheme(am4themes_animated);
const { Option } = Select;

function index(props) {
  const chartRef = useRef(null);
  const [state, _setState] = useState({
    typeChart: 2,
    tinhThanhPhoId: "",
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
    statisticalProvider.importHospital(tinhThanhPhoId).then((s) => {
      if (s && s.code === 0) {
        if (action === "tinhThanhPhoId" && item) {
          showChart(s.data, true);
        } else {
          showChart(s.data);
        }
      }
    });
  };
  useEffect(() => {
    loadData();
    getCity();
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

  const showChart = (data, type) => {
    if (type) {
      let chart = am4core.create("chartdiv", am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0;
      chart.legend = new am4charts.Legend();
      let arr1 = new Array({name: "Chưa nhập", value: data[0].chuaNhap}, {name: "Đã nhập", value: data[0].daNhap});
      chart.data = arr1
      let series = chart.series.push(new am4charts.PieSeries3D());
      series.dataFields.value = "value";
      series.dataFields.category = "name";
    } else {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      chart.data = data;
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "tenTinh";
      categoryAxis.renderer.labels.template.rotation = 300;
      categoryAxis.renderer.labels.template.hideOversized = false;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text =
        "Thống kê tỷ lệ bệnh viện đã nhập, chưa nhập dữ liệu";
      valueAxis.renderer.minLabelPosition = 0.1;

      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "chuaNhap";
      series1.dataFields.categoryX = "tenTinh";
      series1.name = "Chưa nhập";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "Tỉnh {categoryX} chưa nhập: {valueY} ";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "daNhap";
      series2.dataFields.categoryX = "tenTinh";
      series2.name = "Đã nhập";
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "Tỉnh {categoryX} đã nhập: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
    }
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
  return (
    <Panel
      id={"effortmonth"}
      sortable={true}
      allowClose={false}
      title="Biểu đồ thống kê"
    >
      <div className="chart-status row">
        <div className="detail-left col-md-2">
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
                Thống kê tên thiết bị theo trạng thái và khả năng điều chuyển
              </Option>
              <Option value={4}>Thống kê tên thiết bị theo nguồn vốn</Option>
            </Select>
          </Form.Item>
          <Form.Item className="chart-selcect" label="Tỉnh/Thành phố">
            <Select
              value={state.tinhThanhPhoId}
              placeholder="Chọn tỉnh/Thành phố"
              onChange={(e, i) => {
                setState({
                  tinhThanhPhoId: e,
                  bieuDo: e ? 2 : 1,
                });
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
          <Form.Item className="chart-selcect" label="Loại biểu đồ">
            <Select
              value={state.bieuDo}
              placeholder="Chọn loại biểu đồ"
              onChange={(e, i) => {
                setState({
                  bieuDo: e,
                });
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {!state.tinhThanhPhoId ? (
                <Option value={1}>Đường gấp khúc</Option>
              ) : (
                <Option value={2}>Hình Tròn</Option>
              )}
            </Select>
          </Form.Item>
        </div>
        <div className="col-md-10 detail-right">
          <h3 className="title">
            <small></small>
          </h3>
          <div
            id="chartdiv"
            style={{ width: "100%", height: "calc(100vh - 300px)" }}
          ></div>
        </div>
      </div>
    </Panel>
  );
}

export default index;
