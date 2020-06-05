import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Button, Form, Input, Tooltip, Modal } from "antd";
import statusProvider from "@data-access/status-provider";
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
    let ten = action === "ten" ? item : state.tenSearch;
    let params = {
      page,
      size,
      ten: ten.trim(),
    };
    statusProvider
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
                      col2: item.ten,
                      // col3: item.hienThi,
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
        content: `Bạn có muốn xóa trạng thái thiết lập ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          statusProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa trạng thái thiết lập thành công", "success");
                onSearch(1, 10);
              } else {
                snackbar.show(
                  "Xóa trạng thái thiết lập không thành công",
                  "danger"
                );
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
      ten: "",
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
        create();
      }
    });
  };
  const { getFieldDecorator } = props.form;
  const create = () => {
    let ten = state.ten ? state.ten : dataIndex && dataIndex.ten;
    let object = {
      ten: ten.trim(),
    };
    statusProvider
      .createOrEdit(dataIndex && dataIndex.id, object)
      .then((s) => {
        if (s && s.code === 0) {
          if (dataIndex && dataIndex.id) {
            snackbar.show(
              "Cập nhật trạng thái thiết lập thành công",
              "success"
            );
          } else {
            snackbar.show(
              "Thêm mới trạng thái thiết lập thành công",
              "success"
            );
          }
          onClose(true);
        } else {
          if (dataIndex && dataIndex.id) {
            snackbar.show("Cập nhật trạng thái thiết lập thất bại", "danger");
          } else {
            snackbar.show("Thêm mới trạng thái thiết lập thất bại", "danger");
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
          <div className="title-box">Tên trạng thái thiết lập</div>
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
                placeholder="Tìm theo tên trạng thái thiết lập"
              />
            </div>
          </div>
        </div>
      ),
      width: 400,
      dataIndex: "col2",
      key: "col2",
    },
    {
      title: (
        <div className="custome-header">
          <div className="title-box">Ngày tạo</div>
          <div className="addition-box"></div>
        </div>
      ),
      width: 300,
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
      header="Quản lý trạng thái thiết lập"
      subheader="Danh sách trạng thái thiết lập"
    >
      <div className="ui-sortable sortable-grid">
        <Panel
          id="panel-list-site"
          title="DANH SÁCH TRẠNG THÁI THIẾT LẬP"
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
                : col && col.slice(0, 3)
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
              <Button className="btn-edit" onClick={(e) => handleSubmit(e)}>
                {dataIndex && dataIndex.id ? "Lưu thay đổi" : "Tạo mới"}
              </Button>
            </>,
          ]}
        >
          <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
            <Form.Item label="Trạng thái thiết lập">
              {getFieldDecorator("dataIndex.ten", {
                rules: [
                  {
                    required: true,
                    message: "Nhập trạng thái thiết lập",
                  },
                ],
                initialValue: dataIndex && dataIndex.ten ? dataIndex.ten : "",
              })(
                <Input
                  onChange={(e) =>
                    setState({
                      ten: e.target.value,
                    })
                  }
                  placeholder="Nhập trạng thái thiết lập"
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
