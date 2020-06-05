import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Col, Row, Input, Select, Upload, Modal } from "antd";
import snackbar from "@utils/snackbar-utils";
import dateUtils from "mainam-react-native-date-utils";
import { AdminPage, Panel } from "@admin/components/admin";
import chuyengiaProvider from "@data-access/chuyengia-provider";
import fileProvider from "@data-access/file-provider";
import DataContants from "@admin/components/config/data-contants";
import images from "@src/resources/images";
const { TextArea } = Input;
const { Option } = Select;
function index(props) {
    let id = props.match.params.id;
    const [state, _setState] = useState({
        data: [
        ],
        id: "",
        introduction: "",
        experts: "",
        title: "",
        position: "",

    });
    const [render, setRender] = useState("");
    const [image, setImage] = useState("");
    const setState = (data = { props }) => {
        _setState((state) => {
            return { ...state, ...data };
        });
    };
    const { getFieldDecorator } = props.form;
    useEffect(() => {
        if (id) {
            getDetail(id);
        }
    }, []);

    const getDetail = (id) => {
        chuyengiaProvider
            .getByAll(id)
            .then((s) => {
                if (s && s.code === 0) {
                    setImage(s.data.data[0].teamOfExperts.image)
                    setState({
                        data: s.data.data[0].teamOfExperts,
                        introduction: s.data.data[0].teamOfExperts.introduction,
                        experts: s.data.data[0].teamOfExperts.experts,
                        title: s.data.data[0].teamOfExperts.title,
                        position: s.data.data[0].teamOfExperts.position,
                    });
                }
            })
            .catch((e) => { });
    };
    const onClose = () => () => {
        props.history.push("/admin/quan-ly-chuyen-gia");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                create();
            }
        });
    };
    const btnUpload = (e) => {
        fileProvider
            .uploadImage(e.target.files[0])
            .then((s) => {
                setImage(s.data.images[0].image)
            })
    }
    const create = () => {
        let {
            updatedDate,
            introduction,
            experts,
            title,
            position,
        } = state;
        let params = {
            teamOfExperts: {
                updatedDate,
                introduction,
                image,
                experts,
                title,
                position,
            }
        };
        chuyengiaProvider
            .createOrEdit(id, params)
            .then((s) => {
                if (s && s.code === 0) {
                    if (id) {
                        snackbar.show("Cập nhật chuyên gia thành công", "success");
                    } else {
                        snackbar.show("Thêm mới chuyên gia thành công", "success");
                    }
                    props.history.push("/admin/quan-ly-chuyen-gia");
                } else {
                    if (id) {
                        snackbar.show("Cập nhật chuyên gia thất bại", "danger");
                    } else {
                        snackbar.show("Thêm mới chuyên gia thất bại", "danger");
                    }
                }
            })
            .catch((e) => { });
    }
    const checkExperts = (experts, value, callback) => {
        if (!value || !state.experts) {
            callback([new Error("Vui lòng Nhập Họ và tên chuyên gia")]);
        } else {
            if (value.length > 255) {
                callback([new Error("Vui lòng nhập họ tên chuyên gia không quá tối đa 255 kí tự!")]);
            } else {
                callback();
            }
        }
    };
    const checkTitle = (title, value, callback) => {
        if (value.length > 255) {
            callback([new Error("Vui lòng mô tả không quá tối đa 255 kí tự!")]);
        } else {
            callback();
        }
    };
    const checkIntroduction = (introduction, value, callback) => {
        if (value.length > 5000) {
            callback([new Error("Vui lòng mô tả không quá tối đa 5000 kí tự!")]);
        } else {
            callback();
        }
    };
    const checkPosition = (position, value, callback) => {
        if (!value || !state.position) {
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
    const { previewVisible, previewImage, fileList } = state;
    const handleCancel = () => setState({ previewVisible: false });
    return (
        <AdminPage className="mgr-manufacturer">
            <Panel
                title={id ? "CẬP NHẬT CHUYÊN GIA" : "THÊM MỚI CHUYÊN GIA"}
                id={"mgr-manufacturer"}
                allowClose={false}
                allowCollapse={false}
                icon={images.icon.ic_hospital}
            >
                <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-2">
                            <Form.Item label="Họ và tên chuyên gia">
                            </Form.Item>
                            <Form.Item label="Chức vụ">
                            </Form.Item>
                            <Form.Item label="Thứ tự">
                            </Form.Item>
                            <Form.Item label="Gioi thiệu">
                            </Form.Item>
                            <Form.Item label="Ảnh">
                            </Form.Item>
                        </div>
                        <div className="col-10">
                            <Form.Item>
                                {getFieldDecorator("experts", {
                                    rules: [{ validator: checkExperts }],
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            experts: e.target.value
                                        })}
                                        value={state.experts}
                                        placeholder="Nhập họ và tên chuyên gia"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("title", {
                                    rules: [{ validator: checkTitle }]
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            title: e.target.value
                                        })}
                                        value={state.title}
                                        placeholder="Nhập chức vụ"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator("position", {
                                    rules: [{ validator: checkPosition }]
                                })(
                                <Input
                                    autoComplete="off"
                                    onChange={e => setState({
                                        position: e.target.value
                                    })}
                                    value={state.position}
                                    placeholder="Nhập thứ tự"
                                />
                                )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator("introduction", {
                                    rules: [{ validator: checkIntroduction }]
                                })(
                                <Input
                                    autoComplete="off"
                                    onChange={e => setState({
                                        introduction: e.target.value
                                    })}
                                    value={state.introduction}
                                    placeholder="Nhập giới thiệu"
                                />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <input
                                    type="file"
                                    onChange={(e) => btnUpload(e)}
                                />
                                <img
                                    style={{ width: "50%" }} src={"http://123.24.206.9:9560/" + image} />
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
