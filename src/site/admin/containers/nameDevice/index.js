import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Button, DatePicker, Form, Input, Tooltip, Modal } from "antd";
import nameDeviceProvider from "@data-access/commercial-name-provider";
import snackbar from "@utils/snackbar-utils";
import images from "@src/resources/images";
import { connect } from "react-redux";
const { confirm } = Modal;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    showAdd: false,
    maSearch: "",
    tenSearch: "",
    tenVietTatSearch: "",
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
    let tenVietTat = action === "tenVietTat" ? item : state.tenVietTatSearch;
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
      tenVietTat: tenVietTat.trim(),
      createdAt,
    };
    nameDeviceProvider
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
                      key2: item.ma + index,
                      col3: item.ten,
                      key3: item.ten + index,
                      col4: item.tenVietTat,
                      key4: item.tenVietTat + index,
                      col5: new Date(item.createdAt).format("dd-MM-YYYY"),
                      key5:
                        new Date(item.createdAt).format("dd-MM-YYYY") + index,
                      col6: item,
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
        content: `Bạn có muốn xóa tên thiết  bị ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          nameDeviceProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa tên thiết  bị thành công", "success");
                onSearch();
              } else {
                snackbar.show("Xóa tên thiết  bị không thành công", "danger");
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
  const onClose = (item) => {
    setDataIndex({});
    setState({
      ma: "",
      ten: "",
      showAdd: false,
    });
    if (item) {
      onSearch();
    }
  };
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        handleCreate();
      }
    });
  };
  const handleCreate = () => {
    let ten = state.ten ? state.ten : dataIndex && dataIndex.ten;
    let tenVietTat = state.tenVietTat
      ? state.tenVietTat
      : dataIndex && dataIndex.tenVietTat;
    let object = {
      ten: ten.trim(),
      tenVietTat: tenVietTat.trim(),
    };
    nameDeviceProvider
      .createOrEdit(dataIndex && dataIndex.id, object)
      .then((s) => {
        if (s && s.code === 0) {
          if (dataIndex && dataIndex.id) {
            snackbar.show("Cập nhật tên thiết  bị thành công", "success");
          } else {
            snackbar.show("Thêm mới tên thiết  bị thành công", "success");
          }
          onClose(true);
        } else {
          if (dataIndex && dataIndex.id) {
            snackbar.show("Cập nhật tên thiết  bị thất bại", "danger");
          } else {
            snackbar.show("Thêm mới tên thiết  bị thất bại", "danger");
          }
        }
      })
      .catch((e) => {});
  };
  const checkTen = (rule, value, callback) => {
    if (!value || (!state.ten && !dataIndex.ten)) {
      callback([new Error("Vui lòng nhập tên thiết bị")]);
    } else {
      if (value.length > 255) {
        callback([new Error("Vui lòng nhập tên thiết bị tối đa 255 kí tự!")]);
      } else {
        callback();
      }
    }
  };
  const checkTenVietTat = (rule, value, callback) => {
    if (!value || (!state.tenVietTat && !dataIndex.tenVietTat)) {
      callback([new Error("Vui lòng nhập tên viết tắt/ký hiệu")]);
    } else {
      if (value.length > 255) {
        callback([
          new Error("Vui lòng nhập tên viết tắt/ký hiệu tối đa 255 kí tự!"),
        ]);
      } else {
        callback();
      }
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
      width: 70,
      dataIndex: "col1",
      key: "col1",
      align: "center",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Mã</div>
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
                placeholder="Tìm theo mã"
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
          <div className="title-box">Tên thiết bị</div>
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
                placeholder="Tìm theo tên thiết bị"
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
          <div className="title-box">Tên viết tắt</div>
          <div className="addition-box">
            <div className="search-box">
              <img src={images.icon.ic_search} alt="" />
              <input
                value={state.tenVietTatSearch}
                onChange={(e) => {
                  setState({
                    tenVietTatSearch: e.target.value,
                  });
                  onSearch("tenVietTat", e.target.value);
                }}
                placeholder="Tìm theo tên viết tắt"
              />
            </div>
          </div>
        </div>
      ),
      width: 250,
      dataIndex: "col4",
      key: "key4",
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
      width: 250,
      dataIndex: "col5",
      key: "key5",
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
      dataIndex: "col6",
      key: "col6",
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
      header="Danh mục thiết bị"
      subheader="Danh sách danh mục thiết bị"
    >
      <div className=" ui-sortable sortable-grid">
        <Panel
          id="panel-list-site"
          title="DANH SÁCH DANH MỤC THIẾT BỊ"
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
              (props.auth.authorities || []).find((item) => item === "bo_y_te")
                ? col
                : col && col.slice(0, 5)
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
      {(props.auth.authorities || []).find((item) => item === "bo_y_te") &&
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
                className="btn-delete"
                onClick={() => onClose()}
                style={{ marginRight: 8 }}
              >
                Hủy
              </Button>
              <Button
                // disabled={(state.ten || state.tenVietTat ) ? false : true}
                className="btn-edit"
                onClick={(e) => handleSubmit(e)}
              >
                {dataIndex && dataIndex.id ? "Lưu thay đổi" : "Tạo mới"}
              </Button>
            </>,
          ]}
        >
          <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
            <Form.Item label="Tên thiết bị">
              {getFieldDecorator("dataIndex.ten", {
                rules: [{ validator: checkTen }],
                initialValue: dataIndex && dataIndex.ten ? dataIndex.ten : "",
              })(
                <Input
                  autoComplete="off"
                  onChange={(e) =>
                    setState({
                      ten: e.target.value,
                    })
                  }
                  placeholder="Nhập tên thiết bị"
                />
              )}
            </Form.Item>
            <Form.Item label="Tên viết tắt">
              {getFieldDecorator("dataIndex.tenVietTat", {
                rules: [{ validator: checkTenVietTat }],
                initialValue:
                  dataIndex && dataIndex.tenVietTat ? dataIndex.tenVietTat : "",
              })(
                <Input
                  onChange={(e) =>
                    setState({
                      tenVietTat: e.target.value,
                    })
                  }
                  placeholder="Nhập tên viết tắt"
                />
              )}
            </Form.Item>
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
