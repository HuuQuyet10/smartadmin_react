import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, Form, Tooltip, Modal } from "antd";
import modelProvider from "@data-access/model-provider";
import nameDeviceProvider from "@data-access/commercial-name-provider";
import deviceTypeProvider from "@data-access/device-type-provider";
import manufacturerProvider from "@data-access/manufacturer-provider";
import countryProvider from "@data-access/country-provider";
import hospitalProvider from "@data-access/hospital-provider";
import snackbar from "@utils/snackbar-utils";
import images from "@src/resources/images";
import { connect } from "react-redux";
const { confirm } = Modal;
const { Option } = Select;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    listName: [],
    listDeviceType: [],
    listManufacturer: [],
    listCountry: [],
    listCompany: [],

    maSearch: "",
    tenSearch: "",
    namSanXuat: "",
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
    getName();
    getDeviceType();
    getManufacturer();
    getCountry();
    getCompany();
  }, []);
  const getCompany = () => {
    let params = {
      page: 1,
      size: 99999,
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
            listCompany: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getCountry = () => {
    countryProvider
      .search(0, 9999)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listCountry: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getManufacturer = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    manufacturerProvider
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
            listManufacturer: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getName = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    nameDeviceProvider
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
            listName: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getDeviceType = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    deviceTypeProvider
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
            listDeviceType: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const onSearch = (action, item) => {
    let page = action === "page" ? item : action === "size" ? 1 : state.page;
    let size = action === "size" ? item : state.size;
    let ma = action === "ma" ? item : state.maSearch;
    let ten = action === "ten" ? item : state.tenSearch;
    let dmThietBiId = action === "dmThietBiId" ? item : state.dmThietBiId;
    let dmLoaiThietBiId =
      action === "dmLoaiThietBiId" ? item : state.dmLoaiThietBiId;
    let dmHangSanXuatId =
      action === "dmHangSanXuatId" ? item : state.dmHangSanXuatId;
    let hangSoHuuId = action === "hangSoHuuId" ? item : state.hangSoHuuId;
    let nuocSanXuatId = action === "nuocSanXuatId" ? item : state.nuocSanXuatId;
    let nuocSoHuuId = action === "nuocSoHuuId" ? item : state.nuocSoHuuId;
    let namSanXuat = action === "namSanXuat" ? item : state.namSanXuat;
    let nhaCungCapId = action === "nhaCungCapId" ? item : state.nhaCungCapId;
    let params = {
      page,
      size,
      dmThietBiId,
      ma: ma.trim(),
      ten: ten.trim(),
      dmLoaiThietBiId,
      dmHangSanXuatId,
      hangSoHuuId,
      nuocSanXuatId,
      nuocSoHuuId,
      namSanXuat: namSanXuat.trim(),
      nhaCungCapId,
    };
    modelProvider
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
                      col2: item.ma,
                      col3: item.ten,
                      col4: item.dmThietBi && item.dmThietBi.ten,
                      col5: item.dmLoaiThietBi && item.dmLoaiThietBi.ten,
                      col6: item.dmHangSanXuat && item.dmHangSanXuat.ten,
                      col7: item.hangSoHuu && item.hangSoHuu.ten,
                      col8: item.nuocSanXuat && item.nuocSanXuat.ten,
                      col9: item.nuocSoHuu && item.nuocSoHuu.ten,
                      col10: item.namSanXuat,
                      col11: item.nhaCungCap && item.nhaCungCap.ten,
                      col12: item,
                    };
                  })
                : [],
          });
        }
      })
      .catch((e) => {});
  };
  const onDeleteItem = (item) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa model ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          modelProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa model thành công", "success");
                onSearch(1, 10);
              } else {
                snackbar.show("Xóa model không thành công", "danger");
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
      props.history.push("/admin/model/edit/" + item.id);
    } else {
      props.history.push("/admin/model/create");
    }
  };
  const col = [
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
          <div className="title-box">Mã model</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.maSearch}
                onChange={(e) => {
                  setState({
                    maSearch: e.target.value,
                  });
                  onSearch("ma", e.target.value);
                }}
                placeholder="Tìm theo mã model"
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
          <div className="title-box">Model</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.tenSearch}
                onChange={(e) => {
                  setState({
                    tenSearch: e.target.value,
                  });
                  onSearch("ten", e.target.value);
                }}
                placeholder="Tìm theo model"
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
          <div className="title-box">Tên thiết bị</div>
          <div className="addition-box">
            <Select
              value={state.dmThietBiId}
              onChange={(e) => {
                setState({
                  dmThietBiId: e,
                });
                onSearch("dmThietBiId", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn thiết bị"
            >
              {state.listName &&
                state.listName.length &&
                state.listName.map((option, index) => {
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
      width: 300,
      dataIndex: "col4",
      key: "col4",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Loại thiết bị</div>
          <div className="addition-box">
            <Select
              value={state.dmLoaiThietBiId}
              onChange={(e) => {
                setState({
                  dmLoaiThietBiId: e,
                });
                onSearch("dmLoaiThietBiId", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn loại thiết bị"
            >
              {state.listDeviceType &&
                state.listDeviceType.length &&
                state.listDeviceType.map((option, index) => {
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
      width: 300,
      dataIndex: "col5",
      key: "col5",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Hãng sản xuất</div>
          <div className="addition-box">
            <Select
              value={state.dmHangSanXuatId}
              onChange={(e) => {
                setState({
                  dmHangSanXuatId: e,
                });
                onSearch("dmHangSanXuatId", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn hãng sản xuất"
            >
              {state.listManufacturer &&
                state.listManufacturer.length &&
                state.listManufacturer.map((option, index) => {
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
      width: 300,
      dataIndex: "col6",
      key: "col6",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Hãng chủ sở hữu</div>
          <div className="addition-box">
            <Select
              value={state.hangSoHuuId}
              onChange={(e) => {
                setState({
                  hangSoHuuId: e,
                });
                onSearch("hangSoHuuId", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn hãng chủ sở hữu"
            >
              {state.listManufacturer &&
                state.listManufacturer.length &&
                state.listManufacturer.map((option, index) => {
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
      width: 300,
      dataIndex: "col7",
      key: "col7",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Nước sản xuất</div>
          <div className="addition-box">
            <Select
              value={state.nuocSanXuatId}
              onChange={(e) => {
                setState({
                  nuocSanXuatId: e,
                });
                onSearch("nuocSanXuatId", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn nước sản xuất"
            >
              {state.listCountry &&
                state.listCountry.length &&
                state.listCountry.map((option, index) => {
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
      width: 300,
      dataIndex: "col8",
      key: "col8",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Nước chủ sở hữu</div>
          <div className="addition-box">
            <Select
              value={state.nuocSoHuuId}
              onChange={(e) => {
                setState({
                  nuocSoHuuId: e,
                });
                onSearch("nuocSoHuuId", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn nước sản xuất"
            >
              {state.listCountry &&
                state.listCountry.length &&
                state.listCountry.map((option, index) => {
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
      width: 300,
      dataIndex: "col9",
      key: "col9",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Năm sản xuất</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                type="number"
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
      width: 300,
      dataIndex: "col10",
      key: "col10",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Nhà thầu / nhà cung cấp</div>
          <div className="addition-box">
            <Select
              value={state.nhaCungCapId}
              onChange={(e) => {
                setState({
                  nhaCungCapId: e,
                });
                onSearch("nhaCungCapId", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn nhà thầu / nhà cung cấp"
            >
              {state.listCompany &&
                state.listCompany.length &&
                state.listCompany.map((option, index) => {
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
      width: 300,
      dataIndex: "col11",
      key: "col11",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tiện ích</div>
          <div className="addition-box"></div>
        </div>
      ),
      width: 90,
      dataIndex: "col12",
      key: "col12",
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
      header="Quản lý model"
      subheader="Danh sách model"
    >
      <div className="row">
        <div className="col-lg-12 ui-sortable sortable-grid">
          <Panel
            id="panel-list-site"
            title="DANH SÁCH MODEL"
            icon={images.icon.ic_list}
            toolbar={
              <div className="toolbar">
                {(props.auth.authorities || []).find(
                  (item) => item === "bo_y_te"
                ) ? (
                  <Button className="button" onClick={() => editItem()}>
                    Thêm mới
                  </Button>
                ) : null}
              </div>
            }
          >
            <Table
              scroll={{ x: 800, y: 500 }}
              style={{ marginLeft: -10, marginRight: -10 }}
              className="custom"
              columns={
                (props.auth.authorities || []).find(
                  (item) => item === "bo_y_te"
                )
                  ? col
                  : col && col.slice(0, 11)
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
        </div>
      </div>
    </AdminPage>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth.auth || {},
  };
}

export default connect(mapStateToProps)(Form.create()(index));
