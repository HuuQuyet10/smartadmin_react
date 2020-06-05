import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, DatePicker, Form, Input, Tooltip, Modal } from "antd";
import userProvider from "@data-access/user-provider";
import snackbar from "@utils/snackbar-utils";
import { connect } from "react-redux";
import DataContants from "@admin/components/config/data-contants";
import actionUsers from "@actions/user";
import "./style.scss";
const { confirm } = Modal;
const Option = Select.Option;

function index(props) {

  const onSizeChange = (size) => {
    props.onSizeChange();
  };
  const onPageChange = (page) => {
    props.gotoPage();
  };
  useEffect(() => {
    props.onSearch('', '', '');
  }, []);
  const addItem = () => {
    props.history.push("/admin/quan-ly-tai-khoan/them-moi")
  };
  const editItem = () => {
  }
  const changeStatus = item => () => {
    props.changeStatus(item);
  }
  let data = (props.data || []).map((item, index) => {
    return {
      key: index,
      col1: (props.page - 1) * props.size + index + 1,
      col2: item.user.name,
      col3: item.user.username,
      col4: item.user.email,
      col5: item.user.title,
      col6: item,
      col7: item.user.createdDate,
      col8: item,
    };
  });


  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Quản lý cơ sở y tế"
      subheader="Danh sách cơ sở y tế"
    >
      <Panel
        id="panel-list-site"
        title="DANH SÁCH CƠ SỞ Y TẾ "
        toolbar={
          <div className="toolbar">
            <Button className="button" onClick={() => addItem()}>
              Thêm mới
            </Button>
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
                  <div className="title-box">Họ và tên</div>
                  <div className="addition-box">
                    <div className="search-box">
                      {/* <img src={images.icon.ic_search} /> */}
                      <input
                        value={props.searchName}
                        onChange={(e) => {
                          props.onSearch(e.target.value, props.searchFullName, props.searchEmail)
                        }}
                        placeholder="Tìm theo họ tên"
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
                  <div className="title-box">Tên tài khoản</div>
                  <div className="addition-box">
                    <div className="search-box">
                      {/* <img src={images.icon.ic_search} /> */}
                      <input
                        value={props.searchFullName}
                        onChange={(e) => {
                          props.onSearch(props.searchName, e.target.value, props.searchEmail)
                        }}
                        placeholder="Tìm theo tên tài khoản"
                      />
                    </div>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col3",
              key: "col3",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Email</div>
                  <div className="addition-box">
                    <div className="search-box">
                      {/* <img src={images.icon.ic_search} /> */}
                      <input
                        value={props.searchEmail}
                        onChange={(e) => {
                          props.onSearch(props.searchName, props.searchFullName, e.target.value)
                        }}
                        placeholder="Tìm theo email"
                      />
                    </div>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col4",
              key: "col4",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Chức vụ</div>
                  <div className="addition-box">
                    
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
                  <div className="title-box">Trạng thái</div>
                  <div className="addition-box">
                    <Select
                      onChange={(e) => {
                        
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      placeholder="Chọn trạng thái"
                    >
                      {DataContants.listUserStatus &&
                        DataContants.listUserStatus.length &&
                        DataContants.listUserStatus.map((option, index) => {
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
              width: 300,
              dataIndex: "col6",
              key: "col6",
              render: item => {
                if (item.user.blocked === 0)
                  return (
                    <label href="#" className="badge badge-success">
                      Đang hoạt động
                    </label>
                  );
                return (
                  <label href="#" className="badge badge-danger">
                    Đã khóa
                  </label>
                );
              }
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Ngày tạo</div>
                  <div className="addition-box">
                    
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col7",
              key: "col7",
            },
            
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Tiện ích</div>
                  <div className="addition-box"></div>
                </div>
              ),
              width: 90,
              dataIndex: "col8",
              key: "col8",
              fixed: "right",
              render: (item) => {
                return (
                  <div className="col-action">
                    <Tooltip placement="topLeft" title={"Sửa"}>
                      <div>
                        <button
                          onClick={() => editItem(item)}
                          className="btn btn-info btn-icon waves-effect waves-themed"
                        >
                          <i className="fal fa-edit"></i>
                        </button>
                      </div>
                    </Tooltip>
                    <Tooltip placement="topLeft" title={"Reset mật khẩu"}>
                      <div>
                        <button
                          // onClick={() => editItem(item)}
                          className="btn btn-info btn-icon waves-effect waves-themed"
                        >
                          <i className="fal fa-sync"></i>
                        </button>
                      </div>
                    </Tooltip>
                    {item.user.blocked === 0 ? (
                      <Tooltip placement="topLeft" title={"Khóa tài khoản"}>
                        <div>
                          <button
                            onClick={changeStatus(item)}
                            className="btn btn-info btn-icon waves-effect waves-themed"
                          >
                            <i className="fal fa-lock"></i>
                          </button>
                        </div>
                      </Tooltip>
                    ) : (
                      <Tooltip placement="topLeft" title={"Mở khóa tài khoản"}>
                        <div>
                          <button
                            onClick={changeStatus(item)}
                            className="btn btn-info btn-icon waves-effect waves-themed"
                          >
                            <i className="fal fa-unlock"></i>
                          </button>
                        </div>
                      </Tooltip>
                    )}
                  </div>
                );
              },
            },
          ]}
          dataSource={data}
        ></Table>
        <div className="footer">
          <SelectSize value={props.size} selectItem={onSizeChange} />
          <Pagination
            onPageChange={onPageChange}
            page={props.page}
            size={props.size}
            total={props.total}
            style={{ flex: 1, justifyContent: "flex-end" }}
          />
        </div>
      </Panel>
    </AdminPage>
  );
}

export default connect(
  state => {
    return {
    auth: state.auth.auth || {},
    data: state.users.data || [],
    page: state.users.page || 1,
    size: state.users.size || 10,
    total: state.users.total,

    searchName: state.users.searchName,
    searchFullName: state.users.searchFullName,
    searchEmail: state.users.searchEmail,
    searchTitle: state.users.searchTitle,
    };
  },
  {
    updateData: actionUsers.updateData,
    gotoPage: actionUsers.gotoPage,
    onSearch: actionUsers.onSearch,
    onSizeChange: actionUsers.onSizeChange,
    onSort: actionUsers.onSort,
    onDeleteItem: actionUsers.onDeleteItem,
    syncs: actionUsers.syncs,
    changeStatus: actionUsers.changeStatus,
  }
  )(index);
