import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, Form, Tooltip, Modal } from "antd";
import hospitalProvider from "@data-access/hospital-provider";
import snackbar from "@utils/snackbar-utils";
import DataContants from "@admin/components/config/data-contants";
import images from "@src/resources/images";
import { connect } from "react-redux";
import actionCity from "@actions/city";
const { confirm } = Modal;
const Option = Select.Option;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    loaiDonVi: 20,
  });
  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };
  const onSizeChange = (size) => {
    onSearch("size", size);
    setState({
      size: size,
    });
  };
  const onPageChange = (page) => {
    onSearch("page", page);
    setState({
      page: page,
    });
  };
  useEffect(() => {
    onSearch(1, 10);
    props.getCity();
  }, []);
  const onSearch = (action, item) => {
    let page = action === "page" ? item : action === "size" ? 1 : state.page;
    let size = action === "size" ? item : state.size;
    let maSoThue = action === "maSoThue" ? item : state.maSoThue;
    let ten = action === "ten" ? item : state.ten;
    let loaiCongTy = action === "loaiCongTy" ? item : state.loaiCongTy;
    let dmTinhThanhPhoId =
      action === "dmTinhThanhPhoId" ? item : state.dmTinhThanhPhoId;
    let params = {
      page,
      size,
      loaiDonVi: state.loaiDonVi,
      maSoThue,
      ten,
      dmTinhThanhPhoId,
      loaiCongTy,
    };
    hospitalProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            total: s.totalElements,
            data:
              s.data && s.data.length
                ? s.data.map((item, index) => {
                    return {
                      key: index,
                      col1: (page - 1) * size + index + 1,
                      col2: item.maSoThue,
                      key2: item.maSoThue + index,
                      col3: item.ten,
                      key3: item.ten + index,
                      col4: item.loaiCongTy,
                      key4: item.loaiCongTy + index,
                      col5: item.dmTinhThanhPho && item.dmTinhThanhPho.ten,
                      key5:
                        item.dmTinhThanhPho && item.dmTinhThanhPho.id + index,
                      col6: new Date(item.createdAt).format("dd-MM-YYYY"),
                      col7: item,
                    };
                  })
                : [],
          });
        }
      })
      .catch((e) => {});
  };
  const addReport = () => {
    let { loaiDonVi, maSoThue, ten, loaiCongTy, dmTinhThanhPhoId } = state;
    let params = {
      loaiDonVi,
      maSoThue,
      ten,
      loaiCongTy,
      dmTinhThanhPhoId,
    };
    hospitalProvider
      .report(params)
      .then((s) => {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = s;
        a.download = `Danh mục Công ty TTB  ${new Date().format(
          "ddMMyyyyHHmmss"
        )}.xls`;
        a.click();
        window.URL.revokeObjectURL(s);
      })
      .catch((e) => {});
  };
  const onDeleteItem = (item) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa Công ty Trang thiết bị ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          hospitalProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show(
                  "Xóa Công ty Trang thiết bị thành công",
                  "success"
                );
                onSearch(1, 10);
              } else {
                snackbar.show(
                  "Xóa Công ty Trang thiết bị không thành công",
                  "danger"
                );
              }
            })
            .catch((e) => {});
        },
      });
    });
  };
  const editItem = (item) => {
    if (item) {
      props.history.push("/admin/supplier/edit/" + item.id);
    } else {
      props.history.push("/admin/supplier/create");
    }
  };
  const checkHospital = (data) => {
    let status = DataContants.listTypeCompany.filter((item) => {
      return parseInt(item.value) === Number(data);
    });
    if (status.length > 0) return status[0];
    return {};
  };
  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Quản lý Công ty TTB"
      subheader="Danh sách công ty TTB"
    >
      <Panel
        id="panel-list-site"
        title="DANH SÁCH CÔNG TY TTB "
        icon={images.icon.ic_company}
        toolbar={
          <div className="toolbar">
            <Button className="button" onClick={() => addReport()}>
              Xuất Excel
            </Button>
            <Button className="button" onClick={() => editItem()}>
              Thêm mới
            </Button>
          </div>
        }
      >
        <Table
          scroll={{ x: 800, y: 500 }}
          style={{ marginLeft: -10, marginRight: -10 }}
          className="custom"
          columns={[
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">STT</div>
                  <div className="addition-box"></div>
                </div>
              ),
              width: 100,
              dataIndex: "col1",
              key: "col1",
              align: "center",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Mã số thuế</div>
                  <div className="addition-box">
                    <div className="search-box">
                      <img src={images.icon.ic_search} alt="" />
                      <input
                        value={state.maSoThue}
                        onChange={(e) => {
                          onSearch("maSoThue", e.target.value);
                          setState({
                            maSoThue: e.target.value,
                          });
                        }}
                        placeholder="Tìm theo mã số thuế"
                      />
                    </div>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col2",
              key: "key2",
              align: "center",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Tên công ty TTB</div>
                  <div className="addition-box">
                    <div className="search-box">
                      <img src={images.icon.ic_search} alt="" />
                      <input
                        value={state.ten}
                        onChange={(e) => {
                          onSearch("ten", e.target.value);
                          setState({
                            ten: e.target.value,
                          });
                        }}
                        placeholder="Tìm theo tên công ty TTB"
                      />
                    </div>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col3",
              key: "key3",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Loại công ty</div>
                  <div className="addition-box">
                    <Select
                      value={state.loaiCongTy}
                      onChange={(e) => {
                        onSearch("loaiCongTy", e);
                        setState({
                          loaiCongTy: e,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      placeholder="Chọn loại công ty"
                    >
                      <Option value={""}>Tất cả </Option>
                      {DataContants.listTypeCompany &&
                        DataContants.listTypeCompany.length &&
                        DataContants.listTypeCompany.map((option, index) => {
                          return (
                            <Option key={index} value={option.id}>
                              {option.name}
                            </Option>
                          );
                        })}
                    </Select>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col4",
              key: "key4",
              align: "center",
              render: (item) => {
                return (
                  <span>{checkHospital(item) && checkHospital(item).name}</span>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Tỉnh/Thành phố</div>
                  <div className="addition-box">
                    <Select
                      value={state.dmTinhThanhPhoId}
                      onChange={(e) => {
                        onSearch("dmTinhThanhPhoId", e);
                        setState({
                          dmTinhThanhPhoId: e,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      placeholder="Chọn tỉnh/ thành phố"
                    >
                      {props.listCitys &&
                        props.listCitys.length &&
                        props.listCitys.map((option, index) => {
                          return (
                            <Option key={index} value={option.id}>
                              {option.ten}
                            </Option>
                          );
                        })}
                    </Select>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col5",
              key: "key5",
              align: "center",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Ngày tạo</div>
                  <div className="addition-box"></div>
                </div>
              ),
              width: 200,
              dataIndex: "col6",
              key: "col6",
              align: "center",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Tiện ích</div>
                  <div className="addition-box"></div>
                </div>
              ),
              width: 100,
              dataIndex: "col7",
              key: "col7",
              align: "center",
              fixed: "right",
              render: (item) => {
                return (
                  <div className="col-action">
                    <Tooltip placement="topLeft" title={"Sửa"}>
                      <div>
                        <button
                          onClick={() => editItem(item)}
                          className="btn btn-info btn-icon waves-effect waves-themed btn-edit"
                        >
                          <i className="fal fa-edit"></i>
                        </button>
                      </div>
                    </Tooltip>
                    <Tooltip placement="topLeft" title={"Xóa"}>
                      <div>
                        <button
                          onClick={() => onDeleteItem(item)}
                          className="btn btn-info btn-icon waves-effect waves-themed btn-delete"
                        >
                          <i className="fal fa-trash-alt"></i>
                        </button>
                      </div>
                    </Tooltip>
                  </div>
                );
              },
            },
          ]}
          dataSource={state.data}
        ></Table>
        <div className="footer">
          <SelectSize value={state.size} selectItem={onSizeChange} />
          <Pagination
            onPageChange={onPageChange}
            page={state.page}
            size={state.size}
            total={state.total}
            style={{ flex: 1, justifyContent: "flex-end" }}
          />
        </div>
      </Panel>
    </AdminPage>
  );
}
export default connect(
  (state) => {
    return {
      auth: state.auth.auth || {},
      listCitys: state.city.listCitys,
    };
  },
  {
    getCity: actionCity.getCity,
  }
)(Form.create()(index));
