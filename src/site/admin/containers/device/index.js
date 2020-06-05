import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, DatePicker, Tooltip, Modal } from "antd";
import deviceProvider from "@data-access/device-provider";
import hospitalProvider from "@data-access/hospital-provider";
import statusProvider from "@data-access/status-provider";
import districtProvider from "@data-access/district-provider";
import communeProvider from "@data-access/commune-provider";
import snackbar from "@utils/snackbar-utils";
import images from "@src/resources/images";
import { connect } from "react-redux";
import actionCity from "@actions/city";
import "./style.scss";
const { confirm } = Modal;
const { Option } = Select;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    listHospital: [],
    listStatus: [],
    listDistrict: [],
    listAll: [],
    ma: "",
    ten: "",
    serial: "",
    model: "",
    dmHangSanXuat: "",
    namSanXuat: "",
    donViSuDung: "",
    namSuDung: "",
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
    onSearch();
    onSearchCSYT();
    onSearchStatus();
    props.getCity();
  }, []);
  const getDistrict = (e) => {
    districtProvider
      .search(0, 9999, e)
      .then((s) => {
        let data = [
          {
            id: "",
            ten: "Tất cả",
          },
        ];
        setState({
          listDistrict: data.concat(s.data),
        });
      })
      .catch((e) => {});
  };
  const getCommune = (e) => {
    communeProvider
      .search(0, 9999, e)
      .then((s) => {
        let data = [
          {
            id: "",
            ten: "Tất cả",
          },
        ];
        setState({
          listCommune: data.concat(s.data),
        });
      })
      .catch((e) => {});
  };
  const onSearchCSYT = () => {
    let params = {
      page: 1,
      size: 99999,
      loaiDonVi: 10,
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
            listHospital: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const onSearchStatus = () => {
    let params = {
      page: 1,
      size: 9999,
    };
    statusProvider
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
    let donViSuDung = action === "donViSuDung" ? item : state.donViSuDung;
    let namSuDung = action === "namSuDung" ? item : state.namSuDung;
    let dmTrangThaiId = action === "dmTrangThaiId" ? item : state.dmTrangThaiId;
    let coSoYTeId = action === "coSoYTeId" ? item : state.coSoYTeId;
    let dmTinhThanhPhoId =
      action === "dmTinhThanhPhoId" ? item : state.dmTinhThanhPhoId;
    let dmQuanHuyenId = action === "dmQuanHuyenId" ? item : state.dmQuanHuyenId;
    let dmXaPhuongId = action === "dmXaPhuongId" ? item : state.dmXaPhuongId;
    let createdAt =
      action === "createdAt"
        ? item && new Date(item).format("YYYY-MM-dd")
        : state.createdAt
        ? new Date(state.createdAt).format("YYYY-MM-dd")
        : "";
    let params = {
      page,
      size,
      ma: ma.trim(),
      ten: ten.trim(),
      serial: serial.trim(),
      model: model.trim(),
      dmHangSanXuat: dmHangSanXuat.trim(),
      namSanXuat: namSanXuat.trim(),
      donViSuDung: donViSuDung.trim(),
      namSuDung: namSuDung.trim(),
      dmTrangThaiId,
      coSoYTeId,
      dmTinhThanhPhoId,
      dmQuanHuyenId,
      dmXaPhuongId,
      createdAt,
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
                      // col2: item,
                      col2: item.ma,
                      col3: item.dmThietBi && item.dmThietBi.ten,
                      col4: item.serial,
                      col5: item.dmModel && item.dmModel.ten,
                      col6:
                        item.dmModel &&
                        item.dmModel.dmHangSanXuat &&
                        item.dmModel.dmHangSanXuat.ten,
                      col7: item.dmModel && item.dmModel.namSanXuat,
                      col8: item.namSuDung,
                      col9: item.donViSuDung,
                      col10: item.dmDonVi && item.dmDonVi.ten,
                      col11:
                        item.dmDonVi &&
                        item.dmDonVi.dmTinhThanhPho &&
                        item.dmDonVi.dmTinhThanhPho.ten,
                      col12:
                        item.dmDonVi &&
                        item.dmDonVi.dmQuanHuyen &&
                        item.dmDonVi.dmQuanHuyen.ten,
                      col13:
                        item.dmDonVi &&
                        item.dmDonVi.dmXaPhuong &&
                        item.dmDonVi.dmXaPhuong.ten,
                      col14: item.dmTrangThai && item.dmTrangThai.ten,
                      col15: item,
                      col16: item.dmLoaiThietBi && item.dmLoaiThietBi.ten,
                      col17: item.sanSangDieuChuyen,
                      col18: new Date(item.createdAt).format("dd-MM-YYYY"),
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
      props.history.push("/admin/device/create");
    } else if (type === "edit" && item) {
      props.history.push(`/admin/device/edit/` + item.id);
    } else if (type === "detail" && item) {
      props.history.push(`/admin/device/` + item.id);
    }
  };
  const onDeleteItem = (item) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa thiết bị ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          deviceProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa thành công", "success");
                onSearch();
              } else {
                snackbar.show("Xóa không thành công", "danger");
              }
            })
            .catch((e) => {});
        },
      });
    });
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
        a.download = `Danh mục TTB ${new Date().format("ddMMyyyyHHmmss")}.xls`;
        a.click();
        window.URL.revokeObjectURL(s);
      })
      .catch((e) => {});
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
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Mã thiết bị</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.ma}
                onChange={(e) => {
                  setState({
                    ma: e.target.value,
                  });
                  onSearch("ma", e.target.value);
                }}
                placeholder="Tìm theo mã thiết bị"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col2",
      key: "col2",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tên thiết bị</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.ten}
                onChange={(e) => {
                  setState({
                    ten: e.target.value,
                  });
                  onSearch("ten", e.target.value);
                }}
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
          <div className="title-box">Loại thiết bị</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.ten}
                onChange={(e) => {
                  // setState({
                  //   ten: e.target.value,
                  // });
                  // onSearch("ten", e.target.value);
                }}
                placeholder="Tìm theo loại thiết bị"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col16",
      key: "col16",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Số máy (serial)</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.serial}
                onChange={(e) => {
                  setState({
                    serial: e.target.value,
                  });
                  onSearch("serial", e.target.value);
                }}
                placeholder="Tìm theo số máy"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col4",
      key: "col4",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Chủng loại</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.model}
                onChange={(e) => {
                  setState({
                    model: e.target.value,
                  });
                  onSearch("model", e.target.value);
                }}
                placeholder="Tìm theo chủng loại"
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
          <div className="title-box">Hãng sản xuất</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.dmHangSanXuat}
                onChange={(e) => {
                  setState({
                    dmHangSanXuat: e.target.value,
                  });
                  onSearch("dmHangSanXuat", e.target.value);
                }}
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
          <div className="title-box">Năm sản xuất</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.namSanXuat}
                onChange={(e) => {
                  setState({
                    namSanXuat: e.target.value,
                  });
                  onSearch("namSanXuat", e.target.value);
                }}
                placeholder="Tìm theo năm sản xuất"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col7",
      key: "col7",
      align: "center",
    },

    {
      title: (
        <div className="custome-header">
          <div className="title-box">Năm sử dụng</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.namSuDung}
                onChange={(e) => {
                  setState({
                    namSuDung: e.target.value,
                  });
                  onSearch("namSuDung", e.target.value);
                }}
                placeholder="Tìm theo năm sử dụng"
              />
            </div>
          </div>
        </div>
      ),
      width: 122,
      dataIndex: "col8",
      key: "col8",
      align: "center",
    },

    {
      title: (
        <div className="custome-header">
          <div className="title-box">Ngày tạo</div>
          <div className="addition-box">
            <DatePicker
              value={state.createdAt}
              onChange={(e) => {
                if (!e) {
                  onSearch("createdAt", "");
                  setState({
                    createdAt: "",
                  });
                } else {
                  onSearch("createdAt", e._d);
                  setState({
                    createdAt: e._d,
                  });
                }
              }}
              style={{ width: "100%" }}
              disabled={props.id ? true : false}
              format={"dd/MM/YYYY"}
              placeholder="Nhập ngày tạo"
              getPopupContainer={(trigger) => trigger.parentNode}
            />
          </div>
        </div>
      ),
      width: 200,
      dataIndex: "col18",
      key: "col18",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Đơn vị sử dụng</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.donViSuDung}
                onChange={(e) => {
                  setState({
                    donViSuDung: e.target.value,
                  });
                  onSearch("donViSuDung", e.target.value);
                }}
                placeholder="Tìm theo đơn vị sử dụng"
              />
            </div>
          </div>
        </div>
      ),
      width: 172,
      dataIndex: "col9",
      key: "col9",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tên cơ sở y tế</div>
          <div className="addition-box">
            <Select
              value={state.coSoYTeId}
              onChange={(e) => {
                onSearch("coSoYTeId", e);
                setState({
                  coSoYTeId: e,
                });
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn cơ sở y tế"
            >
              {state.listHospital &&
                state.listHospital.length &&
                state.listHospital.map((option, index) => {
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
      width: 122,
      dataIndex: "col10",
      key: "col10",
    },

    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tỉnh/TP</div>
          <div className="addition-box">
            <Select
              onChange={(e) => {
                onSearch("dmTinhThanhPhoId", e);
                setState({
                  dmTinhThanhPhoId: e,
                });
                getDistrict(e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn tỉnh/Thành phố"
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
      width: 172,
      dataIndex: "col11",
      key: "col11",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Quận/huyện</div>
          <div className="addition-box">
            <Select
              onChange={(e) => {
                onSearch("dmQuanHuyenId", e);
                setState({
                  dmQuanHuyenId: e,
                });
                getCommune(e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn quận/huyện"
            >
              {state.listDistrict &&
                state.listDistrict.length &&
                state.listDistrict.map((option, index) => {
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
      width: 172,
      dataIndex: "col12",
      key: "col12",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Phường/xã</div>
          <div className="addition-box">
            <Select
              onChange={(e) => {
                onSearch("dmXaPhuongId", e);
                setState({
                  dmXaPhuongId: e,
                });
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn xã/phường"
            >
              {state.listCommune &&
                state.listCommune.length &&
                state.listCommune.map((option, index) => {
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
      width: 172,
      dataIndex: "col13",
      key: "col13",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Trạng thái</div>
          <div className="addition-box">
            <Select
              value={state.dmTrangThaiId}
              onChange={(e) => {
                onSearch("dmTrangThaiId", e);
                setState({
                  dmTrangThaiId: e,
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
      dataIndex: "col14",
      key: "col14",
      align: "center",
    },
    // {
    //   title: (
    //     <div className="custome-header">
    //       <div className="title-box">Sẵn sàng điều chuyển</div>
    //       <div className="addition-box">
    //       </div>
    //     </div>
    //   ),
    //   width: 200,
    //   dataIndex: "col17",
    //   key: "col17",
    //   render: (item) => {
    //     return (
    //       <div className="col-action" style={{ textAlign: "center" }}>
    //         {
    //           item && <i className="fal fa-check"></i>
    //         }
    //       </div>
    //     );
    //   },
    // },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tiện ích</div>
          <div className="addition-box"></div>
        </div>
      ),
      width: 150,
      dataIndex: "col15",
      key: "col15",
      align: "center",
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
  ];
  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Quản lý trang thiết bị"
      subheader="Danh sách trang thiết bị"
    >
      <Panel
        id="panel-list-site"
        title="DANH SÁCH TRANG THIẾT BỊ"
        icon={images.icon.ic_device}
        toolbar={
          <div className="toolbar">
            <Button className="button" onClick={() => addReport()}>
              Xuất Excel
            </Button>
            {(props.auth.authorities || []).find(
              (item) => item === "so_y_te"
            ) ||
            (props.auth.authorities || []).find((item) => item === "vu_ttb") ? (
              ""
            ) : (
              <Button className="button" onClick={() => changeItem("create")}>
                Thêm mới
              </Button>
            )}
          </div>
        }
      >
        <Table
          scroll={{ x: 800, y: 500 }}
          style={{ marginLeft: -10, marginRight: -10 }}
          className="custom"
          columns={
            (props.auth.authorities || []).find((item) => item === "so_y_te") ||
            (props.auth.authorities || []).find((item) => item === "vu_ttb")
              ? columns.slice(0, 16)
              : (props.auth.authorities || []).find(
                  (item) => item === "co_so_y_te"
                )
              ? columns.slice(0, 10).concat(columns.slice(15, 17))
              : columns
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
)(index);
