import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import SelectSize from "@admin/components/common/SelectSize";
import Pagination from "@admin/components/common/Pagination";
import { Select, Button, DatePicker, Form, Input, Tooltip, Modal } from "antd";
import snackbar from "@utils/snackbar-utils";
import chuyengiaProvider from "@data-access/chuyengia-provider";
import DataContants from "@admin/components/config/data-contants";
import images from "@src/resources/images";

import "./style.scss";
const { confirm } = Modal;
const Option = Select.Option;
function index(props) {
    const [state, _setState] = useState({
        size: 10,
        page: 1,
        data: [],
        id: "",
    });
    const [experts, setExperts] = useState("");
    const [title, setTitle] = useState("");
    const [position, setPosition] = useState("");
    const [createdUser, setCreatedUser] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const setState = (data = { props }) => {
        _setState((state) => {
            return { ...state, ...data, };
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
        onSearch();
    }, []);
    const onSearch = (action, item) => {
        let page = action === "page" ? item : action === "size" ? 1 : state.page;
        let size = action === "size" ? item : state.size;
        let id = action === "id" ? item : state.id;
        let experts = action === "experts" ? item : state.experts;
        let title = action === "title" ? item : state.title;
        let position = action === "position" ? item : state.position;
        let createdDate = action === "createdDate" ? new Date(item).format("YYYY-MM-dd") : state.createdDate ? new Date(state.createdDate).format("YYYY-MM-dd") : state.createdDate;
        let createdUser = action === "createdUser" ? item : state.createdUser;
        chuyengiaProvider
            .search(
                page,
                size,
                id,
                experts,
                title,
                position,
                createdDate,
                createdUser,
            )
            .then((s) => {
                if (s.code == 0) {
                    setState({
                        total: s.totalElements,
                        data:
                            s.data.data && s.data.data.length
                                ? s.data.data.map((item, index) => {
                                    return {
                                        key: index,
                                        col1: (page - 1) * size + index + 1,
                                        col2: item.teamOfExperts.experts,
                                        col3: item.teamOfExperts.title,
                                        col4: item.teamOfExperts.position,
                                        col5: new Date(item.teamOfExperts.createdDate).format("dd-MM-YYYY"),
                                        col6: item.teamOfExperts.createdUser,
                                        col7: item,
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
                content: `Bạn có muốn xóa ${item.teamOfExperts.title}?`,
                okText: "Xóa",
                okType: "danger",
                cancelText: "Hủy",
                onOk() {
                    chuyengiaProvider
                        .delete(item.teamOfExperts.id)
                        .then((s) => {
                            if (s && s.code === 0) {
                                snackbar.show("Xóa đào tạo thành công", "success");
                                onSearch();
                            } else if (s && s.code === 1900) {
                                snackbar.show("Đào tạo đang được sử dụng!", "danger");
                            } else {
                                snackbar.show("Xóa đào tạo không thành công", "danger");
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
    // const addItem = () => {
    // }
    const editItem = (item) => {
        if (item) {
            props.history.push("/admin/quan-ly-chuyen-gia/chinh-sua/" + item.teamOfExperts.id);
        } else {
            props.history.push("/admin/quan-ly-chuyen-gia/them-moi");
        }
    };
    return (
        <AdminPage
            icon="subheader-icon fal fa-window"
            header="Quản lý chuyên gia"
            subheader="Danh sách Quản lý chuyên gia"
        >
            <Panel
                id="panel-list-site"
                title="DANH SÁCH CHUYÊN GIA"
                icon={images.icon.ic_hospital}
                toolbar={
                    <div className="toolbar">
                        <Button className="button" onClick={() => editItem()}>
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
                            align: "center",
                        },
                        {
                            title: (
                                <div className="custome-header">
                                    <div className="title-box">Chuyên gia</div>
                                    <div className="addition-box">
                                        <div className="search-box">
                                            <img src={images.icon.ic_search} />
                                            <input
                                                value={state.ma}
                                                onChange={(e) => {
                                                    //   onSearch("ma", e.target.value);
                                                    setExperts(e.target.value);
                                                }}
                                                placeholder="Tìm chuyên gia"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ),
                            width: 250,
                            dataIndex: "col2",
                            key: "col2",
                            align: "center",
                        },
                        {
                            title: (
                                <div className="custome-header">
                                    <div className="title-box">Chức vụ</div>
                                    <div className="addition-box">
                                        <div className="search-box">
                                            <img src={images.icon.ic_search} />
                                            <input
                                                value={state.content}
                                                onChange={(e) => {
                                                    //   onSearch("maSoThue", e.target.value);

                                                }}
                                                placeholder="Tìm chức vụ"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ),
                            width: 200,
                            dataIndex: "col3",
                            key: "col3",
                            align: "center",
                        },
                        {
                            title: (
                                <div className="custome-header">
                                    <div className="title-box">Thứ tự</div>
                                    <div className="addition-box">
                                        <div className="search-box">
                                            <img src={images.icon.ic_search} />
                                            <input
                                                value={state.ten}
                                                onChange={(e) => {
                                                }}
                                                placeholder="Tìm thứ tự"
                                            />
                                        </div>
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
                                    <div className="title-box">Ngày tạo</div>
                                    <div className="addition-box">
                                        <DatePicker
                                            value={state.createdAt}
                                            onChange={(e) => {

                                            }}
                                            style={{ width: "100%" }}
                                            disabled={props.id ? true : false}
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
                                    <div className="title-box">Người tạo</div>
                                    <div className="addition-box">
                                        <div className="search-box">
                                            <img src={images.icon.ic_search} />
                                            <input
                                                value={state.ten}
                                                onChange={(e) => {
                                                    //   onSearch("ten", e.target.value);
                                                }}
                                                placeholder="Tìm người tạo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ),
                            width: 150,
                            dataIndex: "col6",
                            key: "col6",
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
                            dataIndex: "col7",
                            key: "col7",
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
