import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, DatePicker, Form, Input, Tooltip, Modal } from "antd";
import snackbar from "@utils/snackbar-utils";
import { connect } from "react-redux";
import DataContants from "@admin/components/config/data-contants";
import actionNews from "@actions/news";
import "./style.scss";
const { confirm } = Modal;
const Option = Select.Option;
function onChange(date, dateString) {
}
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
  const checkNoibat = (data) => {
    let status = DataContants.listNoibat.filter((item) => {
      return parseInt(item.value) === Number(data);
    });
    if (status.length > 0) return status[0];
    return {};
  };
  const addItem = () => {
    props.history.push("/admin/quan-ly-tin-tuc/them-moi")
  };
  const onDeleteItem = item => () => {
    props.onDeleteItem(item);
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
      col2: item.news.title,
      col3: item.news.hightlights,
      col4: item.news.link,
      col5: item.news.createdDate,
      col6: item.news.createdUser,
      col7: item.news.createdDate,
      col8: item,
    };
  });
  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Quản lý tin tức"
      subheader="Danh sách tin tức"
    >
      <Panel
        id="panel-list-site"
        title="DANH SÁCH CÁC TRANG TIN TỨC "
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
                  <div className="title-box">Tiêu đề</div>
                  <div className="addition-box">
                    <div className="search-box">
                      {/* <img src={images.icon.ic_search} /> */}
                      <input
                        value={props.searchName}
                        onChange={(e) => {
                          props.onSearch(e.target.value, props.searchFullName, props.searchEmail)
                        }}
                        placeholder="Tìm theo tiêu đề"
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
                  <div className="title-box">Nổi bật</div>
                  <div className="addition-box">
                  <Select
                      value={props.searchHightlights}
                      onChange={e => {
                        props.changeNoibat(props.searchName, e);
                      }}
                    >
                      <Option value={-1}>Tất cả</Option>
                      <Option value={1}>Yes</Option>
                      <Option value={0}>No</Option>
                    </Select>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col3",
              key: "col3",
              render: item => {
                if (item == 1)
                  return (
                    <label href="#" class="badge badge-success">
                      Có
                    </label>
                  );
                return (
                  <label href="#" class="badge badge-danger">
                    Không
                  </label>
                );
              }
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Tên menu</div>
                  <div className="addition-box">
                  <Select
                      value={props.searchHightlights}
                      onChange={e => {
                        props.changeNoibat(props.searchName, e);
                      }}
                    >
                      <Option value={-1}>Tất cả</Option>
                      <Option value={0}>Tin tức sự kiện</Option>
                      <Option value={1}>Video</Option>
                      <Option value={2}>Y học thường thức</Option>
                      <Option value={3}>Ý kiến khách hàng</Option>
                      <Option value={4}>Góc Từ thiện</Option>
                    </Select>
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col4",
              key: "col4",
              render: item => {
                if (item == 0) {
                  return (
                    <label>Tin tức sự kiện</label>
                  )
                }
                else if (item == 1) {
                  return (
                    <label>Video/></label>
                  )
                }
                else if (item == 2) {
                  return (
                    <label>Y học thường thức</label>
                  )
                }
                else if (item == 3) {
                  return (
                    <label>Ý kiến khách hàng</label>
                  )
                }
                else {
                  return (
                    <label>Góc Từ thiện</label>
                  )
                }
              },
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Ngày tạo</div>
                  <div className="addition-box">
                      <DatePicker onChange={onChange} />
                  </div>
                </div>
              ),
              width: 200,
              dataIndex: "col5",
              key: "col5",
            },
            {
              title: (
                <div className="custome-header">
                  <div className="title-box">Người tạo</div>
                  <div className="addition-box">
                    <div className="search-box">
                        {/* <img src={images.icon.ic_search} /> */}
                        <input
                          value={props.searchName}
                          onChange={(e) => {
                            props.onSearch(e.target.value, props.searchFullName, props.searchEmail)
                        }}
                        placeholder="Tìm theo người tạo"
                      />
                    </div>
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
                  <div className="title-box"></div>
                  <div className="addition-box"></div>
                </div>
              ),
              key: "operation",
              fixed: "right",
              width: 150,
              render: item => {
                return (
                  <div className="col-action">
                    <Tooltip placement="topLeft" title={"Xem chi tiết"}>
                      <div>
                        <a
                          class="btn btn-info btn-icon waves-effect waves-themed"
                        >
                          <i class="fal fa-eye"></i>
                        </a>
                      </div>
                    </Tooltip>
                    <Tooltip placement="topLeft" title={"Sửa"}>
                      <div>
                        <a
                          onClick={editItem(item)}
                          class="btn btn-info btn-icon waves-effect waves-themed"
                        >
                          <i class="fal fa-edit"></i>
                        </a>
                      </div>
                    </Tooltip>
                    <Tooltip placement="topLeft" title={"Xóa"}>
                      <div>
                        <a
                          onClick={onDeleteItem()}
                          class="btn btn-info btn-icon waves-effect waves-themed"
                        >
                          <i class="fal fa-trash-alt"></i>
                        </a>
                      </div>
                    </Tooltip>
                  </div>
                );
              },
              dataIndex: "col8",
              key: "col8"
            }
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
    data: state.news.data || [],
    page: state.news.page || 1,
    size: state.news.size || 10,
    total: state.news.total,

    searchTitle: state.news.searchTitle,
    searchHightlights: state.news.searchHightlights,
    searchLink: state.news.searchLink,
    searchCreatedDate: state.news.searchCreatedDate,
    searchCreatedUser: state.news.searchCreatedUser
    };
  },
  {
    updateData: actionNews.updateData,
    gotoPage: actionNews.gotoPage,
    onSearch: actionNews.onSearch,
    onSizeChange: actionNews.onSizeChange,
    onSort: actionNews.onSort,
    onDeleteItem: actionNews.onDeleteItem,
    syncs: actionNews.syncs,
    changeStatus: actionNews.changeStatus,
  }
  )(index);
