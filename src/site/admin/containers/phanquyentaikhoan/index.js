import React, { useState } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Button, Form, Checkbox } from "antd";
import "../phanquyentaikhoan/style.scss";
function onChange(e) {
  // console.log(`checked = ${e.target.checked}`);
}
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [
      {
        loaitaikhoan: "Bộ y tế",
        luachon: "Lựa chọn",
      },
    ],
  });
  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };
  const onSizeChange = (size) => {
    setState({
      size: size,
    });
  };
  const onPageChange = (page) => {
    setState({
      page: page,
    });
  };

  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Phân quyền theo loại tài khoản"
      subheader="Danh sách tài khoản"
    >
      <Panel
        id="panel-list-site"
        title="DANH SÁCH PHÂN QUYỀN THEO MÀN HÌNH CỦA LOẠI TÀI KHOẢN"
        toolbar={
          <div className="toolbar">
            <Button className="button">Chỉnh sửa</Button>
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
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Loại tài khoản</div>
                  <div className="addition-box"></div>
                </div>
              ),
              width: 200,
              dataIndex: "col2",
              key: "col2",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">All</div>
                  <div className="addition-box">
                    <p className="style-title-box">Xem</p>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col3",
              key: "col3",
              render: () => {
                return (
                  <div className="col-action">
                    <p className="style-textfil">
                      <strong>Lựa chọn</strong>
                    </p>
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">DS Tài khoản</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col4",
              key: "col4",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">DS Cơ quan quản lý</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col5",
              key: "col5",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">DS Cơ sở y tế</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col6",
              key: "col6",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">DS TTB</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                    <p className="style-title-box">Xuất excel</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col7",
              key: "col7",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">DS TTB công ty</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col8",
              key: "col8",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Loại thiết bị</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col9",
              key: "col9",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Model</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col10",
              key: "col10",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Hãng sản xuất</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col11",
              key: "col11",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">DS TTB</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col12",
              key: "col12",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Danh mục thiết bị</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col13",
              key: "col13",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Trạng thái thiết bị</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col14",
              key: "col14",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Đơn vị tính</div>
                  <div className="addition-box">
                    <p className="style-title-box">Thêm</p>
                    <p className="style-title-box">Sửa</p>
                    <p className="style-title-box">Xóa</p>
                  </div>
                </div>
              ),
              width: 300,
              dataIndex: "col15",
              key: "col15",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                    <Checkbox className="style-checkbox" onChange={onChange} />
                  </div>
                );
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Biểu đồ</div>
                  <div className="addition-box"></div>
                </div>
              ),
              width: 300,
              dataIndex: "col16",
              key: "col16",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Admin</div>
                  <div className="addition-box"></div>
                </div>
              ),
              width: 300,
              dataIndex: "col17",
              key: "col17",
              render: () => {
                return (
                  <div className="col-action">
                    <Checkbox className="style-checkbox" onChange={onChange} />
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
export default Form.create()(index);
