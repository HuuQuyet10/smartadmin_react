import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Button, DatePicker, Form, Input, Tooltip, Modal } from "antd";
import userProvider from "@data-access/user-provider";
import snackbar from "@utils/snackbar-utils";
import { connect } from "react-redux";
import images from "@src/resources/images";
const { confirm } = Modal;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    maSearch: "",
    tenSearch: "",
  });

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
  }, []);
  const onSearch = (action, item) => {
    let page = action === "page" ? item : action === "size" ? 1 : state.page;
    let size = action === "size" ? item : state.size;
    let ma = action === "ma" ? item : state.maSearch;
    let ten = action === "ten" ? item : state.tenSearch;
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
      createdAt,
    };
    userProvider
      .roles(params)
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
                      col4: new Date(item.createdAt).format("dd-MM-YYYY"),
                      col5: item,
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
        content: `Bạn có muốn xóa loại tài khoản ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          userProvider
            .rolesDelete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa loại tài khoản thành công", "success");
                onSearch(1, 10);
              } else {
                snackbar.show("Xóa loại tài khoản không thành công", "danger");
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
        showAdd: true,
      });
    } else {
      setDataIndex(item);
      setState({
        showAdd: true,
      });
    }
  };
  const onClose = () => {
    setDataIndex({});
    setState({
      ma: "",
      ten: "",
      showAdd: false,
    });
    props.history.push("/admin/user-type");
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
    let ma = state.ma ? state.ma : dataIndex && dataIndex.ma;
    let ten = state.ten ? state.ten : dataIndex && dataIndex.ten;
    let check = state.ma
      ? state.ma.isNickname()
      : dataIndex && dataIndex.ma.isNickname();
    if (!check) {
      snackbar.show(
        "Vui lòng nhập mã loại tài khoản chỉ chứa các ký tự chữ, số và dấu _",
        "danger"
      );
      return;
    }
    let object = {
      ten: ten.trim(),
      ma: ma,
    };
    userProvider
      .rolesCreateOrEdit(dataIndex && dataIndex.id, object)
      .then((s) => {
        if (s && s.code === 0) {
          if (dataIndex && dataIndex.id) {
            snackbar.show("Cập nhật loại tài khoản thành công", "success");
          } else {
            snackbar.show("Thêm mới loại tài khoản thành công", "success");
          }
          onSearch(1, 10, "", "");
          onClose();
        } else {
          if (dataIndex.id) {
            snackbar.show("Cập nhật loại tài khoản thất bại", "danger");
          } else {
            snackbar.show("Thêm mới loại tài khoản thất bại", "danger");
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
      width: 70,
      dataIndex: "col1",
      key: "col1",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Mã loại tài khoản</div>
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
                placeholder="Tìm theo mã loại tài khoản"
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
          <div className="title-box">Loại tài khoản</div>
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
                placeholder="Tìm theo loại tài khoản"
              />
            </div>
          </div>
        </div>
      ),
      width: 300,
      dataIndex: "col3",
      key: "col3",
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
      dataIndex: "col4",
      key: "col4",
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
      dataIndex: "col5",
      key: "col5",
      align: "center",
      // fixed: "right",
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
      header="Quản lý loại tài khoản"
      subheader="Danh sách loại tài khoản"
    >
      <div className="row">
        <div className="col-lg-12 ui-sortable sortable-grid">
          <Panel
            id="panel-list-site"
            title="DANH SÁCH LOẠI TÀI KHOẢN"
            icon={images.icon.ic_account}
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
                  : col && col.slice(0, 4)
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
      {(props.auth.authorities || []).find((item) => item === "bo_y_te") &&
      state.showAdd ? (
        <Modal
          className="change-status"
          width={770}
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
                disabled={!state.ma && !state.ten && !dataIndex}
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
                <Form.Item label="Mã loại tài khoản (*)">
                  {getFieldDecorator("dataIndex.ma", {
                    rules: [
                      {
                        validator: (rule, value, callback) => {
                          if (!value.trim() || (!state.ma && !dataIndex.ma)) {
                            callback([
                              new Error("Vui lòng nhập mã loại tài khoản"),
                            ]);
                          } else {
                            if (value.length > 255) {
                              callback([
                                new Error(
                                  "Vui lòng nhập mã loại tài khoản tối đa 255 kí tự!"
                                ),
                              ]);
                            } else {
                              callback();
                            }
                          }
                        },
                      },
                    ],
                    initialValue: dataIndex && dataIndex.ma ? dataIndex.ma : "",
                  })(
                    <Input
                      onChange={(e) =>
                        setState({
                          ma: e.target.value,
                        })
                      }
                      placeholder="Nhập mã loại tài khoản"
                      autoComplete="off"
                    />
                  )}
                </Form.Item>
                <Form.Item label="Loại tài khoản (*)">
                  {getFieldDecorator("dataIndex.ten", {
                    rules: [
                      {
                        validator: (rule, value, callback) => {
                          if (!value || (!state.ten && !dataIndex.ten)) {
                            callback([
                              new Error("Vui lòng nhập loại tài khoản"),
                            ]);
                          } else {
                            if (value.length > 255) {
                              callback([
                                new Error(
                                  "Vui lòng nhập loại tài khoản tối đa 255 kí tự!"
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
                      placeholder="Nhập loại tài khoản"
                      autoComplete="off"
                    />
                  )}
                </Form.Item>
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
    </AdminPage>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth.auth || {},
  };
}

export default connect(mapStateToProps)(Form.create()(index));
