import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Col, Row, Input, Select, Switch, Upload, Modal } from "antd";
import userProvider from "@data-access/user-provider";
import snackbar from "@utils/snackbar-utils";
import { AdminPage, Panel } from "@admin/components/admin";
const { Option } = Select;
const { TextArea } = Input;
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}
function index(props) {
    const id = props.match.params.id;
    const files = useRef([]);
    const [state, _setState] = useState({
        data: [],
        fileList: [],
        listRoles: [],
        listAll: [],
        ma: "",
        ten: "",
        trangThai: 0
    });
    const setState = (data = {}) => {
        _setState((state) => {
            return { ...state, ...data };
        });
    };
    useEffect(() => {
        if (id) {
            getDetail(id);
        }
        getRoles()
    }, []);
    const getRoles = () => {
        userProvider.roles(1, 9999).then(s => {
            setState({
                listRoles: s.data
            })
        }).catch(e => { })
    }
    const { previewVisible, previewImage, fileList } = state;
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };
    const handleChange = ({ fileList }) => { };
    const handleCancel = () => setState({ previewVisible: false });
    const getDetail = (id) => {
        userProvider.getById(id).then(s => {
            if (s && s.code === 0) {
                setState({
                    roleId: s.data.roleId,
                    dmDonViId: s.data.dmDonViId,
                    username: s.data.username ? s.data.username : "",
                    email: s.data.email ? s.data.email : "",
                    diaChi: s.data.diaChi ? s.data.diaChi : "",
                    anhDaiDien: s.data.anhDaiDien ? s.data.anhDaiDien : "",
                    ghiChu: s.data.ghiChu ? s.data.ghiChu : "",
                    fileList: s.data.anhDaiDien ? [
                        {
                            uid: '-1',
                            name: 'image.png',
                            status: 'done',
                            url: s.data.anhDaiDien.absoluteFileUrl(),
                        }
                    ] : []
                });
            }
        }).catch(e => { })
    }
    const onClose = () => () => {
        props.history.push("/admin/quan-ly-tai-khoan");
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                handleCreate();
            }
        });
    };
    const { getFieldDecorator } = props.form;
    const handleCreate = () => {
        let {
            username,
            anhDaiDien,
            dmDonViId,
            roleId,
            email,
            diaChi,
            ghiChu,
            trangThai
        } = state
        let params = {
            username: username.trim(),
            anhDaiDien,
            dmDonViId,
            roleId,
            email,
            diaChi,
            ghiChu,
            trangThai
        }
        userProvider.createOrEdit(id, params).then(s => {
            if (s && s.code === 0) {
                if (id) {
                    snackbar.show("Cập nhật tài khoản thành công", "success");
                } else {
                    snackbar.show("Thêm mới tài khoản thành công", "success");
                }
                props.history.push("/admin/user");
            } else if (s && s.code === 1500) {
                snackbar.show("Tên đăng nhập đã tồn tại trên hệ thống, vui lòng kiểm tra lại", "danger");
            } else {
                if (id) {
                    snackbar.show("Cập nhật tài khoản thất bại", "danger");
                } else {
                    snackbar.show("Thêm mới tài khoản thất bại", "danger");
                }
            }
        }).catch(e => { })
    }

    const checkName = (rule, value, callback) => {
        if (!value || !state.username) {
            callback([new Error("Vui lòng nhập tên đăng nhập")]);
        } else {
            if (value.length > 255) {
                callback([new Error("Vui lòng nhập tên đăng nhập tối đa 255 kí tự!")]);
            } else {
                callback();
            }
        }
    };
    const checkEmail = (rule, value, callback) => {
        if (!value || !state.email) {
            callback([new Error("Vui lòng nhập email")]);
        } else {
            if (!value.isEmail()) {
                callback([new Error("Vui lòng nhập đúng định dạng email")]);
            } else {
                callback();
            }
        }
    };
    return (
        <AdminPage
            icon="subheader-icon fal fa-window"
            header={"TẠO MỚI TÀI KHOẢN"}
            subheader={
                id
                    ? "CẬP NHẬT TIN TỨC"
                    : "THÊM MỚI TIN TỨC"
            }>
            <Panel id="panel-list-site" title="THÊM MỚI TIN TỨC">
                <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-2">
                            <Form.Item label="Menu">
                            </Form.Item>
                            <Form.Item label="Tiêu đề:">
                            </Form.Item>
                            <Form.Item label="Từ khóa:">
                            </Form.Item>
                            <Form.Item label="Mô tả ngắn:">
                            </Form.Item>
                            <Form.Item label="Nội dung:">
                            </Form.Item>
                        </div>
                        <div className="col-10">
                            <Form.Item>
                            <Select
                                value={props.searchHightlights}
                                onChange={e => {
                                    props.changeNoibat(props.searchName, e);
                                }}
                            >
                                <Option value={1}>Tin tức sự kiện</Option>
                                <Option value={2}>Video</Option>
                                <Option value={3}>Y học thường thức</Option>
                                <Option value={4}>ý kiến khách hàng</Option>
                                <Option value={5}>Góc từ thiện</Option>
                            </Select>
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("email", {
                                    rules: [{ validator: checkEmail }],
                                    initialValue: state.email
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            email: e.target.value
                                        })}
                                        placeholder="Nhập tiêu đề"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator("email", {
                                    rules: [{ validator: checkEmail }],
                                    initialValue: state.email
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            email: e.target.value
                                        })}
                                        placeholder="Nhập từ khóa"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    autoComplete="off"
                                    onChange={e => setState({
                                        username: e.target.value
                                    })}
                                    placeholder="Nhập mô tả ngắn"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    autoComplete="off"
                                    onChange={e => setState({
                                        username: e.target.value
                                    })}
                                    placeholder="Nhập Nội dung"
                                />
                            </Form.Item>


                        </div>
                    </div>

                    <div
                        style={{
                            width: "100%",
                            borderTop: "1px solid #e9e9e9",
                            padding: "16px 16px 0px",
                            background: "#fff",
                            textAlign: "right"
                        }}
                    >
                        <Button onClick={onClose(false)} style={{ marginRight: 8 }}>
                            Hủy
                        </Button>
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            {id ? "Lưu thay đổi" : "Tạo mới"}
                        </Button>
                    </div>
                </Form>
            </Panel>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
        </AdminPage>
    );
}

export default (Form.create()(index));