import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, DatePicker, Form, Tooltip, Modal } from "antd";
import hospitalProvider from "@data-access/hospital-provider";
import districtProvider from "@data-access/district-provider";
import snackbar from "@utils/snackbar-utils";
import images from "@src/resources/images";
import { connect } from "react-redux";
import actionCity from "@actions/city";
const { confirm } = Modal;
const { Option } = Select;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    loaiDonVi: 30,
    data: [],
    listDistrict: [],
    listOrganization: [],
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
    getOrganization();
    props.getCity();
  }, []);
  const getOrganization = () => {
    let params = {
      page: 1,
      size: 99999,
      loaiDonVi: 30,
    };
    hospitalProvider
      .search(params)
      .then((s) => {
        setState({
          listOrganization: s.data,
        });
      })
      .catch((e) => {});
  };
  const getDistrict = (e) => {
    districtProvider
      .search(0, 9999, e)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listDistrict: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const onSearch = (action, item) => {
    let page = action === "page" ? item : action === "size" ? 1 : state.page;
    let size = action === "size" ? item : state.size;
    let maSoThue = action === "maSoThue" ? item : state.maSoThue;
    let ten = action === "ten" ? item : state.ten;
    let coQuanQuanLyTen =
      action === "coQuanQuanLyTen" ? item : state.coQuanQuanLyTen;
    let dmTinhThanhPhoId =
      action === "dmTinhThanhPhoId" ? item : state.dmTinhThanhPhoId;
    let dmQuanHuyenId = action === "dmQuanHuyenId" ? item : state.dmQuanHuyenId;
    let soDienThoai = action === "soDienThoai" ? item : state.soDienThoai;
    let nguoiLienHe = action === "nguoiLienHe" ? item : state.nguoiLienHe;
    let createdAt =
      action === "createdAt"
        ? item && new Date(item).format("YYYY-MM-dd")
        : state.createdAt
        ? new Date(state.createdAt).format("YYYY-MM-dd")
        : "";
    let params = {
      page,
      size,
      loaiDonVi: state.loaiDonVi,
      maSoThue,
      ten,
      createdAt,
      soDienThoai,
      dmTinhThanhPhoId,
      dmQuanHuyenId,
      nguoiLienHe,
      coQuanQuanLyTen,
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
                      col3: item.ten,
                      col4: item.coQuanQuanLyIds,
                      col5: item.dmTinhThanhPho && item.dmTinhThanhPho.ten,
                      col6: item.dmQuanHuyen && item.dmQuanHuyen.ten,
                      col7: item.soDienThoai,
                      col8: item.nguoiLienHe,
                      col9: new Date(item.createdAt).format("dd/MM/YYYY"),
                      col10: item,
                    };
                  })
                : [],
          });
        }
      })
      .catch((e) => {});
  };
  const checkCoQuanQuanLy = (data) => {
    let status = state.listOrganization
      ? state.listOrganization.length &&
        state.listOrganization.filter((item) => {
          return parseInt(item.id) === Number(data);
        })
      : [];
    if (status.length > 0) return status[0];
    return {};
  };
  const onDeleteItem = (item) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa cơ quan quản lý ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          hospitalProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa cơ quan quản lý thành công", "success");
                onSearch(1, 10);
              } else if (s && s.code === 1900) {
                snackbar.show("Cơ quan quản lý đang được sử dụng!", "danger");
              } else {
                snackbar.show("Xóa cơ quan quản lý không thành công", "danger");
              }
            })
            .catch((e) => {});
        },
        onCancel() {
          reject();
        },
      });
    });
  };
  const editItem = (item) => {
    if (item) {
      props.history.push("/admin/organization/edit/" + item.id);
    } else {
      props.history.push("/admin/organization/create");
    }
  };
  const columns = [
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
      key: "col2",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tên cơ quan quản lý</div>
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
                placeholder="Tìm theo tên cơ quan quản lý"
              />
            </div>
          </div>
        </div>
      ),
      width: 300,
      dataIndex: "col3",
      key: "col3",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Cấp cơ quan quản lý</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.coQuanQuanLyTen}
                onChange={(e) => {
                  onSearch("coQuanQuanLyTen", e.target.value);
                  setState({
                    coQuanQuanLyTen: e.target.value,
                  });
                }}
                placeholder="Tìm theo tên cơ quan quản lý"
              />
            </div>
          </div>
        </div>
      ),
      width: 300,
      dataIndex: "col4",
      key: "col4",
      render: (item) => {
        return (
          <span className="co-quan-quan-ly">
            {item && item.length
              ? item.map((option, index) => {
                  return (
                    <>
                      {option ? (
                        <span className="item">
                          {checkCoQuanQuanLy(option) &&
                            checkCoQuanQuanLy(option).ten}
                        </span>
                      ) : null}
                    </>
                  );
                })
              : null}
          </span>
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
                getDistrict(e);
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
      key: "col5",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Quận/huyện</div>
          <div className="addition-box">
            <Select
              value={state.dmQuanHuyenId}
              onChange={(e) => {
                onSearch("dmQuanHuyenId", e);
                setState({
                  dmQuanHuyenId: e,
                });
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn quận / huyện"
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
      width: 200,
      dataIndex: "col6",
      key: "col6",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Số điện thoại</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.soDienThoai}
                onChange={(e) => {
                  onSearch("soDienThoai", e.target.value);
                  setState({
                    soDienThoai: e.target.value,
                  });
                }}
                placeholder="Tìm theo số điện thoại"
              />
            </div>
          </div>
        </div>
      ),
      width: 200,
      dataIndex: "col7",
      key: "col7",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Người liên hệ</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.nguoiLienHe}
                onChange={(e) => {
                  onSearch("nguoiLienHe", e.target.value);
                  setState({
                    nguoiLienHe: e.target.value,
                  });
                }}
                placeholder="Tìm theo người liên hệ"
              />
            </div>
          </div>
        </div>
      ),
      width: 200,
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
              format={"dd/MM/YYYY"}
              placeholder="Nhập ngày tạo"
              getPopupContainer={(trigger) => trigger.parentNode}
            />
          </div>
        </div>
      ),
      width: 200,
      dataIndex: "col9",
      key: "col9",
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
      dataIndex: "col10",
      key: "col10",
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
  ];
  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Cơ quan quản lý"
      subheader="Danh sách cơ quan quản lý"
    >
      <Panel
        id="panel-list-site"
        title="DANH SÁCH CƠ QUAN QUẢN LÝ "
        icon={images.icon.ic_organization}
        toolbar={
          (props.auth.authorities || []).find((item) => item === "bo_y_te") ? (
            <div className="toolbar">
              <Button className="button" onClick={() => editItem()}>
                Thêm mới
              </Button>
            </div>
          ) : (
            ""
          )
        }
      >
        <Table
          scroll={{ x: 800, y: 500 }}
          style={{ marginLeft: -10, marginRight: -10 }}
          className="custom"
          columns={
            (props.auth.authorities || []).find((item) => item === "bo_y_te")
              ? columns
              : columns && columns.slice(0, 9)
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
)(Form.create()(index));
