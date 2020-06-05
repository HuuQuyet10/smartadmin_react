import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, DatePicker, Form, Input, Tooltip, Modal } from "antd";
import supplierProvider from "@data-access/supplier-provider";
import snackbar from "@utils/snackbar-utils";
const { confirm } = Modal;
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
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
      size: size
    })
  };
  const onPageChange = (page) => {
    onSearch("page", page);
    setState({
      page: page
    })
  };
  useEffect(() => {
    onSearch(1, 10);
  }, []);
  const onSearch = (action, item) => {
    let page = action === "page" ? item : action === "size" ? 1 : state.page;
    let size = action === "size" ? item : state.size;
    let ma = action === "ma" ? item : state.maSearch;
    let ten = action === "ten" ? item : state.tenSearch;
    supplierProvider
      .search(page, size, ma, ten)
      .then((s) => {
        if (s.code == 0) {
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
      .catch((e) => { });
  };
  const onDeleteItem = (item) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn xóa đơn vị cung cấp ${item.ten}?`,
        okText: "Xóa",
        okType: "danger",
        cancelText: "Hủy",
        onOk() {
          supplierProvider
            .delete(item.id)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Xóa đơn vị cung cấp thành công", "success");
                onSearch(1, 10);
              } else {
                snackbar.show("Xóa đơn vị cung cấp không thành công", "danger");
              }
            })
            .catch((e) => { });
        },
        onCancel() {
          reject();
        },
      });
    });
  };
  const editItem = (item) => {
    if (item) {
      setDataIndex(item)
    } else {
      setDataIndex(item)
    }
  };
  const onClose = () => {
    setDataIndex({});
    setState({
      ma: "",
      ten: ""
    })
    props.history.push("/admin/supplier")
  }
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
    let ten = state.ten ? state.ten : dataIndex.ten
    supplierProvider.createOrEdit(dataIndex.id, ten.trim()).then((s) => {
      if (s && s.code === 0) {
        if (dataIndex.id) {
          snackbar.show("Cập nhật đơn vị cung cấp thành công", "success");
        } else {
          snackbar.show("Thêm mới đơn vị cung cấp thành công", "success");
        }
        onSearch(1, 10, "", "");
        onClose()
      } else {
        if (dataIndex.id) {
          snackbar.show("Cập nhật đơn vị cung cấp thất bại", "danger");
        } else {
          snackbar.show("Thêm mới đơn vị cung cấp thất bại", "danger");
        }
      }
    }).catch((e) => { });
  };
  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Quản lý đơn vị cung cấp"
      subheader="Danh sách đơn vị cung cấp"
    >
      <div className="row">
        <div className="col-lg-8 ui-sortable sortable-grid">
          <Panel
            id="panel-list-site"
            title="DANH SÁCH ĐƠN VỊ CUNG CẤP"
          // toolbar={
          //   <div className="toolbar">
          //     <Button className="button" onClick={() => editItem()}>
          //       Thêm mới
          // </Button>
          //   </div>
          // }
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
                },
                {
                  title: (
                    <div className="custome-header">
                      <div className="title-box">Mã đơn vị cung cấp</div>
                      <div className="addition-box">
                        <div className="search-box">
                          <img src={require("@images/icon/ic-search.png")} />
                          <input
                            value={state.maSearch}
                            onChange={(e) => onSearch("ma", e.target.value)}
                            placeholder="Tìm theo mã đơn vị cung cấp"
                          />
                        </div>
                      </div>
                    </div>
                  ),
                  width: 200,
                  dataIndex: "col2",
                  key: "col2",
                },
                {
                  title: (
                    <div className="custome-header">
                      <div className="title-box">Tên đơn vị cung cấp</div>
                      <div className="addition-box">
                        <div className="search-box">
                          <img src={require("@images/icon/ic-search.png")} />
                          <input
                            value={state.tenSearch}
                            onChange={(e) => onSearch("ten", e.target.value)}
                            placeholder="Tìm theo tên đơn vị cung cấp"
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
                      <div className="title-box">Ngày tạo</div>
                      <div className="addition-box"></div>
                    </div>
                  ),
                  width: 200,
                  dataIndex: "col4",
                  key: "col4",
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
                  fixed: "right",
                  render: (item) => {
                    return (
                      <div className="col-action">
                        <Tooltip placement="topLeft" title={"Sửa"}>
                          <div>
                            <a
                              onClick={() => editItem(item)}
                              className="btn btn-info btn-icon waves-effect waves-themed"
                            >
                              <i className="fal fa-edit"></i>
                            </a>
                          </div>
                        </Tooltip>
                        <Tooltip placement="topLeft" title={"Xóa"}>
                          <div>
                            <a
                              onClick={() => onDeleteItem(item)}
                              className="btn btn-info btn-icon waves-effect waves-themed"
                            >
                              <i className="fal fa-trash-alt"></i>
                            </a>
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
        </div>
        <div className="col-lg-4  ui-sortable sortable-grid">
          <Panel
            title={dataIndex.id ? "Chỉnh sửa" : "Thêm mới"}
            id={"mgr-form-type"}
          // allowClose={false}
          // allowCollapse={false}
          >
            <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <Form.Item label="Đơn vị cung cấp">
                    {getFieldDecorator("dataIndex.ten", {
                      rules: [
                        {
                          required: true,
                          message: "Nhập đơn vị cung cấp",
                        },
                      ],
                      initialValue: dataIndex.ten ? dataIndex.ten : "",
                    })(
                      <Input
                        onChange={(e) =>
                          setState({
                            ten: e.target.value,
                          })
                        }
                        placeholder="Nhập đơn vị cung cấp"
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
              >
                <Button onClick={() => onClose()} style={{ marginRight: 8 }}>
                  Hủy
                </Button>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                  {dataIndex.id ? "Lưu thay đổi" : "Tạo mới"}
                </Button>
              </div>
            </Form>
          </Panel>
        </div>
      </div>
    </AdminPage>
  );
}
export default Form.create()(index);