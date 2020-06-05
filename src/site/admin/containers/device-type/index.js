import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import {
  Select,
  Button,
  DatePicker,
  Form,
  Input,
  Tooltip,
  Modal,
  Checkbox,
} from "antd";
import deviceTypeProvider from "@data-access/device-type-provider";
import nameDeviceProvider from "@data-access/commercial-name-provider";
import snackbar from "@utils/snackbar-utils";
import { connect } from "react-redux";
import images from "@src/resources/images";
const { confirm } = Modal;
const { Option } = Select;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    listNames: [],
    thietBiPhuTro: false,
    maSearch: "",
    tenSearch: "",
  });
  const listStatus = [
    {
      id: null,
      name: "Tất cả",
    },
    {
      id: "true",
      name: "Yes",
    },
    {
      id: "false",
      name: "No",
    },
  ];
  const [dataIndex, setDataIndex] = useState({});
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
    getNameDevice();
  }, []);
  const getNameDevice = () => {
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
            listNames: data.concat(s.data),
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
    let dmThietBiId =
      action === "dmThietBiIdSearch" ? item : state.dmThietBiIdSearch;
    let thietBiPhuTro =
      action === "thietBiPhuTroSearch" ? item : state.thietBiPhuTroSearch;
    let createdAt =
      action === "createdAt"
        ? new Date(item).format("YYYY-MM-dd")
        : state.createdAt
        ? new Date(state.createdAt).format("YYYY-MM-dd")
        : "";
    let params = {
      page,
      size,
      dmThietBiId,
      ma: ma.trim(),
      ten: ten.trim(),
      createdAt,
      thietBiPhuTro,
    };
    deviceTypeProvider
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
                      key3: item.ten + index,
                      col4: item.thietBiPhuTro,
                      key4: item.thietBiPhuTro + index,
                      col5: new Date(item.createdAt).format("dd-MM-YYYY"),
                      col6: item,
                      col7: item.dmThietBi && item.dmThietBi.ten,
                      key7: item.dmThietBi && item.dmThietBi.id + index,
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
        content: `Bạn có muốn xóa loại thiết bị ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          deviceTypeProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa loại thiết bị thành công", "success");
                onSearch(1, 10);
              } else {
                snackbar.show("Xóa loại thiết bị không thành công", "danger");
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
      setDataIndex(item);
      setState({
        thietBiPhuTro: item.thietBiPhuTro,
        showAdd: true,
      });
    } else {
      setDataIndex(item);
      setState({
        showAdd: true,
      });
    }
  };
  const onClose = (item) => {
    setDataIndex({});
    setState({
      ma: "",
      ten: "",
      thietBiPhuTro: false,
      showAdd: false,
    });
    if (item) {
      onSearch();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        handleCreate();
      }
    });
  };
  const { getFieldDecorator } = props.form;
  const handleCreate = () => {
    let ten = state.ten ? state.ten : dataIndex.ten;
    let dmThietBiId = state.dmThietBiId
      ? state.dmThietBiId
      : dataIndex.dmThietBiId;
    let thietBiPhuTro = state.thietBiPhuTro ? 1 : 0;
    let object = {
      ten: ten.trim(),
      dmThietBiId,
      thietBiPhuTro,
    };
    deviceTypeProvider
      .createOrEdit(dataIndex && dataIndex.id, object)
      .then((s) => {
        if (s && s.code === 0) {
          if (dataIndex && dataIndex.id) {
            snackbar.show("Cập nhật loại thiết bị thành công", "success");
          } else {
            snackbar.show("Thêm mới loại thiết bị thành công", "success");
          }
          onClose(true);
        } else {
          if (dataIndex.id) {
            snackbar.show("Cập nhật loại thiết bị thất bại", "danger");
          } else {
            snackbar.show("Thêm mới loại thiết bị thất bại", "danger");
          }
        }
      })
      .catch((e) => {});
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
          <div className="title-box">Mã loại thiết bị</div>
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
                placeholder="Tìm theo mã loại thiết bị"
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
          <div className="title-box">Loại thiết bị</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt=""/>
              <input
                value={state.tenSearch}
                onChange={(e) => {
                  setState({
                    tenSearch: e.target.value,
                  });
                  onSearch("ten", e.target.value);
                }}
                placeholder="Tìm theo loại thiết bị"
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
          <div className="title-box">Tên thiết bị</div>
          <div className="addition-box">
            <Select
              onChange={(e) => {
                setState({
                  dmThietBiIdSearch: e,
                });
                onSearch("dmThietBiIdSearch", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn thiết bị"
            >
              {state.listNames &&
                state.listNames.length &&
                state.listNames.map((option, index) => {
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
          <div className="title-box">Thiết bị phụ trợ</div>
          <div className="addition-box">
            <Select
              onChange={(e) => {
                setState({
                  thietBiPhuTroSearch: e,
                });
                onSearch("thietBiPhuTroSearch", e);
              }}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Chọn thiết bị phụ trợ"
            >
              {listStatus &&
                listStatus.length &&
                listStatus.map((option, index) => {
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
        return <>{item && <i className="fal fa-check"></i>}</>;
      },
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
      dataIndex: "col5",
      key: "col5",
      align: "center",
    },

    {
      title: (
        <div className="custome-header">
          <div className="title-box">Tiện ích</div>
          <div className="addition-box"></div>
        </div>
      ),
      width: 90,
      dataIndex: "col6",
      key: "col6",
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
    <div>
      <AdminPage
        icon="subheader-icon fal fa-window"
        header="Quản lý loại thiết bị"
        subheader="Danh sách loại thiết bị"
      >
        <div className="row">
          <div className="col-lg-12 ui-sortable sortable-grid">
            <Panel
              id="panel-list-site"
              title="DANH SÁCH loại thiết bị"
              icon={images.icon.ic_list}
              toolbar={
                (props.auth.authorities || []).find(
                  (item) => item === "bo_y_te"
                ) ? (
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
                  (props.auth.authorities || []).find(
                    (item) => item === "bo_y_te"
                  )
                    ? col
                    : col && col.slice(0, 6)
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
      {((props.auth.authorities || []).find((item) => item === "bo_y_te") ||
        (props.auth.authorities || []).find((item) => item === "so_y_te")) &&
      state.showAdd ? (
        <Modal
          className="change-status"
          width={500}
          title={dataIndex && dataIndex.id ? "Cập nhật" : "Thêm mới"}
          visible={state.showAdd}
          cancelText={"Đóng"}
          onCancel={onClose}
          footer={[
            <>
              <Button
                type="danger"
                onClick={() => onClose()}
                style={{ marginRight: 8 }}
              >
                Hủy
              </Button>
              <Button
                type="primary"
                disabled={
                  !state.dmThietBiId &&
                  !state.ten &&
                  !state.thietBiPhuTro &&
                  !dataIndex
                }
                htmlType="submit"
                onClick={(e) => handleSubmit(e)}
              >
                {dataIndex && dataIndex.id ? "Lưu thay đổi" : "Tạo mới"}
              </Button>
            </>,
          ]}
        >
          <Form layout="vertical" hideRequiredMark>
            <div className="row">
              <div className="col">
                <Form.Item label="Tên thiết bị (*)">
                  {getFieldDecorator("dataIndex.dmThietBiId", {
                    rules: [
                      {
                        required: true,
                        message: "Vui lòng chọn tên thiết bị",
                      },
                    ],
                    initialValue:
                      dataIndex && dataIndex.dmThietBiId
                        ? dataIndex.dmThietBiId
                        : "",
                  })(
                    <Select
                      onChange={(e) => {
                        setState({
                          dmThietBiId: e,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      placeholder="Chọn thiết bị"
                    >
                      {state.listNames &&
                        state.listNames.length &&
                        state.listNames.map((option, index) => {
                          return (
                            <Option key={index} value={option.id}>
                              {option.ten}
                            </Option>
                          );
                        })}
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label="Loại thiết bị (*)">
                  {getFieldDecorator("dataIndex.ten", {
                    rules: [
                      {
                        validator: (rule, value, callback) => {
                          if (!value || (!state.ten && !dataIndex.ten)) {
                            callback([
                              new Error("Vui lòng nhập loại thiết bị"),
                            ]);
                          } else {
                            if (value.length > 255) {
                              callback([
                                new Error(
                                  "Vui lòng nhập loại thiết bị tối đa 255 kí tự!"
                                ),
                              ]);
                            } else {
                              callback();
                            }
                          }
                        },
                      },
                    ],
                    initialValue:
                      dataIndex && dataIndex.ten ? dataIndex.ten : "",
                  })(
                    <Input
                      onChange={(e) =>
                        setState({
                          ten: e.target.value,
                        })
                      }
                      placeholder="Nhập loại thiết bị"
                      autoComplete="off"
                    />
                  )}
                </Form.Item>
                <Checkbox
                  checked={state.thietBiPhuTro}
                  onChange={() => {
                    setState({ thietBiPhuTro: !state.thietBiPhuTro });
                  }}
                  style={{ marginBottom: 20 }}
                >
                  Thiết bị phụ trợ
                </Checkbox>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                borderTop: "1px solid #e9e9e9",
                padding: "16px 16px 0px",
                background: "#fff",
                textAlign: "right",
              }}
            ></div>
          </Form>
        </Modal>
      ) : null}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth.auth || {},
  };
}

export default connect(mapStateToProps)(Form.create()(index));
