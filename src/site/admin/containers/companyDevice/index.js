import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import { connect } from "react-redux";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, DatePicker, Tooltip, Modal, Input } from "antd";
import deviceProvider from "@data-access/device-provider";
import statusProvider from "@data-access/status-provider";
import hospitalProvider from "@data-access/hospital-provider";
import images from "@src/resources/images";
import "./style.scss";
const { Option } = Select;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    listStatus: [],
    listAll: [],
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
  const columns = [
    {
      title: (
        <div className="custome-header">
          <div className="title-box">STT</div>
          <div className="addition-box"></div>
        </div>
      ),
      width: 111,
      dataIndex: "col1",
      key: "col1",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Model</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.ma}
                onChange={(e) => onSearch("ma", e.target.value)}
                placeholder="Tìm theo mã thiết bị"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col2",
      key: "col2",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Loại thiết bị</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.ten}
                onChange={(e) => onSearch("ten", e.target.value)}
                placeholder="Tìm theo tên thiết bị"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col3",
      key: "col3",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Số lượng</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.serial}
                onChange={(e) => onSearch("serial", e.target.value)}
                placeholder="Tìm theo số lượng"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col4",
      key: "col4",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Đơn vị tính</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.model}
                onChange={(e) => onSearch("model", e.target.value)}
                placeholder="Tìm theo đơn vị tính"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col5",
      key: "col5",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Thời gian áp dụng</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.dmHangSanXuat}
                onChange={(e) => onSearch("dmHangSanXuat", e.target.value)}
                placeholder="Tìm theo hãng sản xuất"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col6",
      key: "col6",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Hãng sản xuất</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.namSanXuat}
                onChange={(e) => onSearch("namSanXuat", e.target.value)}
                placeholder="Tìm theo năm sản xuất"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col7",
      key: "col7",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Công ty TTB</div>
          <div className="addition-box">
            <Select
              value={state.trangThai}
              onChange={(e) => {
                onSearch("trangThai", e);
                setState({
                  trangThai: e,
                });
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn trạng thái"
            >
              {state.listStatus &&
                state.listStatus.length &&
                state.listStatus.map((option, index) => {
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
      width: 150,
      dataIndex: "col8",
      key: "col8",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tỉnh/Thành phố</div>
          <div className="addition-box">
            <Select
              value={state.trangThai}
              onChange={(e) => {
                onSearch("trangThai", e);
                setState({
                  trangThai: e,
                });
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn trạng thái"
            >
              {state.listStatus &&
                state.listStatus.length &&
                state.listStatus.map((option, index) => {
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
      width: 150,
      dataIndex: "col9",
      key: "col9",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Thời gian cập nhật</div>
          <div className="addition-box">
            <Select
              value={state.trangThai}
              onChange={(e) => {
                onSearch("trangThai", e);
                setState({
                  trangThai: e,
                });
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn trạng thái"
            >
              {state.listStatus &&
                state.listStatus.length &&
                state.listStatus.map((option, index) => {
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
      width: 150,
      dataIndex: "col10",
      key: "col10",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tiện ích</div>
          <div className="addition-box"></div>
        </div>
      ),
      width: 100,
      dataIndex: "col11",
      key: "col11",
      fixed: "right",
      render: (item) => {
        return (
          <div className="col-action">
            <Tooltip placement="topLeft" title={"Xem chi tiết"}>
              <div>
                <button
                  onClick={() => changeItem("detail", item)}
                  className="btn btn-info btn-icon waves-effect waves-themed"
                >
                  <i className="fal fa-eye"></i>
                </button>
              </div>
            </Tooltip>
            <Tooltip placement="topLeft" title={"Sửa"}>
              <div>
                <button
                  onClick={() => changeItem("edit", item)}
                  className="btn btn-info btn-icon waves-effect waves-themed"
                >
                  <i className="fal fa-edit"></i>
                </button>
              </div>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    onSearch(1, 10);
    onSearchStatus();
    onSearchHospital();
    if ((props.auth.authorities || []).find((item) => item !== "bo_y_te")) {
      columns.splice(7, 2);
      setState({
        listAll: columns,
      });
    }
  }, []);
  const onSearchStatus = () => {
    let params = {
      page: 1,
      size: 9999,
    };
    statusProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            litsHospital: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const onSearchHospital = () => {
    let params = {
      page: 1,
      size: 999999,
      loaiDonVi: 20,
    };
    hospitalProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listStatus: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const onSearch = (action, item) => {
    let page = action === "page" ? item : action === "size" ? 1 : state.page;
    let size = action === "size" ? item : state.size;
    let ma = action === "ma" ? item : state.ma;
    let ten = action === "ten" ? item : state.ten;
    let serial = action === "serial" ? item : state.serial;
    let model = action === "model" ? item : state.model;
    let dmHangSanXuat = action === "dmHangSanXuat" ? item : state.dmHangSanXuat;
    let namSanXuat = action === "namSanXuat" ? item : state.namSanXuat;
    let dmTrangThaiId = action === "dmTrangThaiId" ? item : state.dmTrangThaiId;
    let params = {
      page,
      size,
      ma,
      ten,
      serial,
      model,
      dmHangSanXuat,
      namSanXuat,
      dmTrangThaiId,
    };
    deviceProvider
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
                      col2: item.dmModel && item.dmModel.ten,
                      col3: item.dmLoaiThietBiId,
                      col4: item.soLuong,
                      col5: item.dmDonViTinh && item.dmDonViTinh.ten,
                      col6: item.thoiGianApDung,
                      col7:
                        item.dmModel &&
                        item.dmModel.dmHangSanXuat &&
                        item.dmModel.dmHangSanXuat.ten,
                      col8:
                        item.dmModel &&
                        item.dmModel.nhaCungCap &&
                        item.dmModel.nhaCungCap.ten,
                      // col9: item.updatedAt,
                      col10: new Date(item.updatedAt).format("dd-MM-YYYY"),
                      col11: item,
                    };
                  })
                : [],
          });
        }
      })
      .catch((e) => {});
  };

  const changeItem = (type, item) => {
    if (type === "create") {
      props.history.push("/admin/company-device/create");
    } else if (type === "edit" && item) {
      props.history.push(`/admin/company-device/edit/` + item.id);
    } else if (type === "detail" && item) {
      props.history.push(`/admin/company-device/` + item.id);
    }
  };
  const addReport = () => {
    let { quanHuyenId, tinhThanhPhoId, dmTrangThaiId, xaPhuongId } = state;
    deviceProvider
      .report(quanHuyenId, tinhThanhPhoId, dmTrangThaiId, xaPhuongId)
      .then((s) => {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = s;
        a.download = `Danh mục TTB ${(
          props.auth.coSoYTeTen || ""
        ).unsignText()} ${new Date().format("ddMMyyyyHHmmss")}.xls`;
        a.click();
        window.URL.revokeObjectURL(s);
      })
      .catch((e) => {});
  };
  const changeStatus = (item) => {
    setState({
      showChangeStatus: true,
      statusItem: item,
    });
  };
  const closeModal = () => {
    setState({
      showChangeStatus: false,
    });
  };

  return (
    <>
      <AdminPage
        icon="subheader-icon fal fa-window"
        header="Quản lý thiết bị - Công ty Trang thiết bị"
        subheader="Danh sách thiết bị - Công ty Trang thiết bị"
      >
        <Panel
          id="panel-list-site"
          title="DANH SÁCH THIẾT BỊ - CÔNG TY TTB"
          toolbar={
            <div className="toolbar">
              <Button className="button" onClick={addReport}>
                Xuất Excel
              </Button>
              <Button className="button" onClick={() => changeItem("create")}>
                Thêm mới
              </Button>
            </div>
          }
        >
          <Table
            scroll={{ x: 800, y: 500 }}
            style={{ marginLeft: -10, marginRight: -10 }}
            className="custom"
            columns={
              (props.auth.authorities || []).find((item) => item === "bo_y_te")
                ? columns
                : state.listAll
            }
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
        {state.showChangeStatus ? (
          <Modal
            className="change-status"
            width={770}
            title={"Chuyển trạng thái trang thiết bị"}
            visible={state.showChangeStatus}
            cancelText={"Đóng"}
            onCancel={closeModal}
            footer={[
              <>
                <Button type="danger" key="back">
                  Hủy
                </Button>
                <Button key="submit" type="primary" onClick={closeModal}>
                  Lưu{" "}
                </Button>
              </>,
            ]}
          >
            <div className="row">
              <div className="col-md-6">
                <div className="row detail">
                  <div className="col-md-5 title">Mã thiết bị:</div>
                  <div className="col-md-7"></div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">Tên thiết bị:</div>
                  <div className="col-md-7"></div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">Số lượng:</div>
                  <div className="col-md-7"></div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">Đơn vị tính:</div>
                  <div className="col-md-7"></div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">Hãng sản xuất:</div>
                  <div className="col-md-7"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row detail">
                  <div className="col-md-5 title">Trạng thái:</div>
                  <div className="col-md-7"></div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">Thời gian thực hiện:</div>
                  <div className="col-md-7">
                    <DatePicker
                      value={state.createdAt}
                      onChange={(e) => {
                        setState({
                          createdAt: e._d,
                        });
                      }}
                      style={{ width: "100%" }}
                      disabled={props.id ? true : false}
                      format={"dd/MM/YYYY"}
                      placeholder="Nhập thời gian dự kiến"
                      getPopupContainer={(trigger) => trigger.parentNode}
                    />
                  </div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">Số lượng xuất:</div>
                  <div className="col-md-7">
                    <Input
                      placeholder="Nhập địa chỉ cơ sở y tế"
                      onChange={(e) => {
                        setState({
                          giaNhap: e.target.value,
                        });
                      }}
                      value={state.giaNhap}
                    />
                  </div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">CSYT sử dụng:</div>
                  <div className="col-md-7">
                    <Select
                      placeholder="Chọn CSYT sử dụng"
                      onChange={(e) => {
                        setState({
                          dmCoSoYTeId: e,
                        });
                      }}
                      // value={state.dmThietBiId}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="">Chọn CSYT sử dụng</Option>
                      {state.litsHospital && state.litsHospital.length
                        ? state.litsHospital.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </div>
                </div>
                <div className="row detail">
                  <div className="col-md-5 title">Địa chi CSYT:</div>
                  <div className="col-md-7"></div>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </AdminPage>
    </>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth.auth,
  };
}

export default connect(mapStateToProps)(index);
