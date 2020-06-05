import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Col, Row, Input, Select, Upload, Modal } from "antd";
import snackbar from "@utils/snackbar-utils";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import dateUtils from "mainam-react-native-date-utils";
import { AdminPage, Panel } from "@admin/components/admin";
import axios from 'axios';
import fileProvider from "@data-access/file-provider";
import cosohoptacProvider from "@data-access/cosohoptac-provider";
import DataContants from "@admin/components/config/data-contants";
import images from "@src/resources/images";
const { TextArea } = Input;
const { Option } = Select;
function index(props) {
    let id = props.match.params.id;
    const [state, _setState] = useState({
        data: [],
        previewTitle: 'Hello',
        id: "",
        name: "",
        rule: "",
        formData: "",
        link: "",
        icons: "",
    });
    const [icons, setIcons] = useState("");
    const btnUpload = (e) => {
        fileProvider
            .uploadImage(e.target.files[0])
            .then((s) => {
                setIcons(s.data.images[0].image)
            })
    }
    const getDetail = (id) => {
        cosohoptacProvider
            .getByAll(id)
            .then((s) => {
                if (s && s.code === 0) {
                    setIcons(s.data.data[0].cooperativeBasis.icons)
                    setState({
                        data: s.data.data[0].cooperativeBasis,
                        name: s.data.data[0].cooperativeBasis.name,
                        rule: s.data.data[0].cooperativeBasis.rule,
                        link: s.data.data[0].cooperativeBasis.link,
                    });
                }
            })
            .catch((e) => { });
    };
    const setState = (data = { props }) => {
        _setState((state) => {
            return { ...state, ...data, };
        });
    };
    const { getFieldDecorator } = props.form;
    const checkName = (rule, value, callback) => {
        if (!value || !state.name) {
            callback([new Error("Vui lòng Nhập Tên Cơ sở hợp tác")]);
        } else {
            if (value.length > 255) {
                callback([new Error("Vui lòng nhập tên cơ sở hợp tác không quá tối đa 255 kí tự!")]);
            } else {
                callback();
            }
        }
    };
    const checkThutu = (rule, value, callback) => {
        if (!value || !state.rule) {
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
    useEffect(() => {
        if (id) {
            getDetail(id);
        }
    }, []);
    const onClose = () => () => {
        props.history.push("/admin/quan-ly-hop-tac-co-so");
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
            rule,
            link,
        } = state;
        let params = {
            cooperativeBasis: {
                name,
                rule,
                link,
                icons,
            }
        };
        cosohoptacProvider
            .createOrEdit(id, params)
            .then((s) => {
                if (s && s.code === 0) {
                    if (id) {
                        snackbar.show("Cập nhật cơ sở hợp tác thành công", "success");
                    } else {
                        snackbar.show("Thêm mới cơ sở hợp tác thành công", "success");
                    }
                    props.history.push("/admin/quan-ly-hop-tac-co-so");
                } else {
                    if (id) {
                        snackbar.show("Cập nhật cơ sở hợp tác thất bại", "danger");
                    } else {
                        snackbar.show("Thêm mới cơ sở hợp tác thất bại", "danger");
                    }
                }
            })
            .catch((e) => { });
    }
    const [loading, setLoading] = useState(false);
    const { previewVisible, previewImage, fileList } = state;
    const handleCancel = () => setState({ previewVisible: false });
    return (
        <AdminPage className="mgr-manufacturer">
            <Panel
                title={id ? "CẬP NHẬT CƠ SỞ HỢP TÁC" : "TẠO MỚI CƠ SỞ HỢP TÁC"}
                id={"mgr-manufacturer"}
                allowClose={false}
                allowCollapse={false}
                icon={images.icon.ic_hospital}
            >
                <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-2">
                            <Form.Item label="Tên cơ sở hợp tác (*)">
                            </Form.Item>
                            <Form.Item label="Thứ tự (*):">
                            </Form.Item>
                            <Form.Item label="Liên kết (*):">
                            </Form.Item>
                            <Form.Item label="Ảnh">
                            </Form.Item>
                        </div>
                        <div className="col-10">
                            <Form.Item>
                                {getFieldDecorator("name", {
                                    rules: [{ validator: checkName }],
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            name: e.target.value
                                        })}
                                        value={state.name}
                                        placeholder="Nhập tên cơ sở hợp tác"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("rule", {
                                    rules: [{ validator: checkThutu }],
                                })(
                                    <Input
                                        autoComplete="off"
                                        onChange={e => setState({
                                            rule: e.target.value
                                        })}
                                        value={state.rule}
                                        placeholder="Nhập Thứ tự"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    autoComplete="off"
                                    onChange={e => setState({
                                        link: e.target.value
                                    })}
                                    value={state.link}
                                    placeholder="Nhập Liên kết"
                                />
                            </Form.Item>
                            <Form.Item>
                                <input
                                    type="file"
                                    onChange={(e) => btnUpload(e)}
                                />
                                <img style={{ width: "50%" }} src={"http://123.24.206.9:9560/" + icons} />
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
