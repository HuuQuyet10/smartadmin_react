import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Col, Row, Input, Select, Upload, Modal } from "antd";
import snackbar from "@utils/snackbar-utils";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import dateUtils from "mainam-react-native-date-utils";
import { AdminPage, Panel } from "@admin/components/admin";
import fileProvider from "@data-access/file-provider";
import landingpageProvider from "@data-access/landingpage-provider";
import DataContants from "@admin/components/config/data-contants";
import images from "@src/resources/images";
const { TextArea } = Input;
const { Option } = Select;
function index(props) {
    let id = props.match.params.id;
    const [state, _setState] = useState({
        data: [],
        id: "",
        name: "",
        order: "",
        link: "",
        content: "",
        image: "",
        icons: "",
    });
    const setState = (data = { props }) => {
        _setState((state) => {
            return { ...state, ...data, };
        });
    };
    const [icons, setIcons] = useState("");
    const [image, setImage] = useState("");
    const btnUpload = (e) => {
        fileProvider
            .uploadImage(e.target.files[0])
            .then((s) => {
                setIcons(s.data.images[0].image)
            })
    }
    // Khi có 2 trường hợp icon và ảnh nằm cùng trên một nền upload thì nên tách làm 2 sự kiện
    // và gọi như bình thường, tránh tình trạng bị onehit(up ảnh mà lại up cả icon)
    // Tạo thói quen review code trước khi push
    const btnUploadImage = (d) => {
        fileProvider
            .uploadImage(d.target.files[0])
            .then((d) => {
                setImage(d.data.images[0].image)
            })
    }
    const getDetail = (id) => {
        landingpageProvider
            .getByAll(id)
            .then((s) => {
                if (s && s.code === 0) {
                    setIcons(s.data.data[0].landing_page.icons)
                    setImage(s.data.data[0].landing_page.image)
                    setState({
                        data: s.data.data[0].landing_page,
                        name: s.data.data[0].landing_page.name,
                        order: s.data.data[0].landing_page.order,
                        link: s.data.data[0].landing_page.link,
                        content: s.data.data[0].landing_page.content,
                    });
                }
            })
            .catch((e) => { });
    };
    useEffect(() => {
        if (id) {
            getDetail(id);
        }
    }, []);
    const onClose = () => () => {
        props.history.push("/admin/quan-ly-langding-page");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                create();
            }
        });
    };
    const create = () => {
        let {
            name,
            order,
            link,
            content,
        } = state;
        let params = {
            landing_page: {
                name,
                order,
                link,
                content,
                image,
                icons,
            }
        };
        landingpageProvider
            .createOrEdit(id, params)
            .then((s) => {
                if (s && s.code === 0) {
                    if (id) {
                        snackbar.show("Cập nhật Page thành công", "success");
                    } else {
                        snackbar.show("Thêm mới Page thành công", "success");
                    }
                    props.history.push("/admin/quan-ly-langding-page");
                } else {
                    if (id) {
                        snackbar.show("Cập nhật Page thất bại", "danger");
                    } else {
                        snackbar.show("Thêm mới Page thất bại", "danger");
                    }
                }
            })
            .catch((e) => { });
    }
    const { getFieldDecorator } = props.form;
    const checkName = (rule, value, callback) => {
        if (!value || !state.name) {
            callback([new Error("Vui lòng Nhập Tên Landing Page")]);
        } else {
            if (value.length > 255) {
                callback([new Error("Vui lòng nhập tên Landing Page không quá tối đa 255 kí tự!")]);
            } else {
                callback();
            }
        }
    };
    const checkOrder = (order, value, callback) => {
        if (!value || !state.order) {
            callback();
        } else {
            if (!value.uintTextBox()) {
                callback([new Error("Vui lòng nhập đúng định dạng số thứ tự")]);
            } else if (value.length > 2) {
                callback([new Error("Vui lòng nhập số thứ tự tối đa 2 kí tự!")]);
            } else {
                callback();
            }
        }
    };
    const checkLink = (link, value, callback) => {
        if (!value || !state.link) {
            callback([new Error("Vui lòng Nhập Link Page")]);
        } else {
            if (value.length > 255) {
                callback([new Error("Vui lòng link Page không quá tối đa 255 kí tự!")]);
            } else {
                callback();
            }
        }
    };
    const checkContent = (content, value, callback) => {
        if (value.length > 255) {
            callback([new Error("Vui lòng mô tả không quá tối đa 255 kí tự!")]);
        } else {
            callback();
        }
    };
    const { previewVisible, previewImage, fileList } = state;
    const handleCancel = () => setState({ previewVisible: false });
    return (
        <AdminPage className="mgr-manufacturer">
            <Panel
                title={id ? "CẬP NHẬT LANDING PAGE" : "TẠO MỚI LANDING PAGE"}
                id={"mgr-manufacturer"}
                allowClose={false}
                allowCollapse={false}
                icon={images.icon.ic_hospital}
            >
                <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-2">
                            <Form.Item label="Tên Landing Page (*):">
                            </Form.Item>
                            <Form.Item label="Thứ tự (*):">
                            </Form.Item>
                            <Form.Item label="Liên kết (*):">
                            </Form.Item>
                            <Form.Item label="Mô tả:">
                            </Form.Item>
                            <Form.Item label="Icons (*):">
                            </Form.Item>
                            <Form.Item label="Ảnh:">
                            </Form.Item>
                        </div>
                        <div className="col-10">
                            <Form.Item>
                                {getFieldDecorator("name", {
                                    rules: [{ validator: checkName }]
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            name: e.target.value
                                        })}
                                        value={state.name}
                                        placeholder="Nhập tên Landing Page"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("order", {
                                    rules: [{ validator: checkOrder }]
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            order: e.target.value
                                        })}
                                        value={state.order}
                                        placeholder="Nhập Thứ tự"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("link", {
                                    rules: [{ validator: checkLink }]
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            link: e.target.value
                                        })}
                                        value={state.link}
                                        placeholder="Nhập Liên kết"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("content", {
                                    rules: [{ validator: checkContent }]
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            content: e.target.value
                                        })}
                                        value={state.content}
                                        placeholder="Nhập mô tả"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <input
                                    type="file"
                                    onChange={(e) => btnUpload(e)}
                                />
                                <img style={{ width: "50%" }} src={"http://123.24.206.9:9560/" + icons} />
                            </Form.Item>
                            <Form.Item>
                                <input
                                    type="file"
                                    onChange={(d) => btnUploadImage(d)}
                                />
                                <img style={{ width: "50%" }} src={"http://123.24.206.9:9560/" + image} />
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
