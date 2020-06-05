import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Col, Row, Input, Select, Upload, Modal } from "antd";
import snackbar from "@utils/snackbar-utils";
import dateUtils from "mainam-react-native-date-utils";
import { AdminPage, Panel } from "@admin/components/admin";
import daotaoProvider from "@data-access/daotao-provider";
import fileProvider from "@data-access/file-provider";
import DataContants from "@admin/components/config/data-contants";
import images from "@src/resources/images";
const { TextArea } = Input;
const { Option } = Select;
function index(props) {
    let id = props.match.params.id;
    const [state, _setState] = useState({
        data: [],
        ma: "",
        id: "",
        title: "",
        createdUser: "",
        hightlights: "",
        ten: "",
        image: "",
    });
    const [image, setImage] = useState("");
    const setState = (data = {props}) => {
        _setState((state) => {
            return { ...state, ...data, };
        });
    };
    useEffect(() => {
        if (id) {
            getDetail(id);
        }
    }, []);
    const onClose = () => () => {
        props.history.push("/admin/quan-ly-dao-tao");
    };
    const btnUpload = (s) => {
        fileProvider
            .uploadImage(s.target.files[0])
            .then((s) => {
                setImage(s.data.images[0].image)
            })
    }
    const getDetail = (id) => {
        daotaoProvider
            .getByAll(id)
            .then((s) => {
                if (s && s.code === 0) {
                    setImage(s.data.data[0].training.image)
                    setState({
                        data: s.data.data[0].training,
                        title: s.data.data[0].training.title,
                        hightlights: s.data.data[0].training.hightlights,
                    });
                }
            })
            .catch((e) => { });
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
            title,
            hightlights,
            createdUser
          } = state;
          let params = {
            training : {
            title,
            image,
            hightlights,
            createdUser
            }
          };
          daotaoProvider
            .createOrEdit(id, params)
            .then((s) => {
            if (s && s.code === 0) {
                if (id) {
                    snackbar.show("Cập nhật nghiên cứu thành công", "success");
                  } else {
                    snackbar.show("Thêm mới nghiên cứu thành công", "success");
                  }
                  props.history.push("/admin/quan-ly-dao-tao");
                } else {
                  if (id) {
                    snackbar.show("Cập nhật nghiên cứu thất bại", "danger");
                  } else {
                    snackbar.show("Thêm mới nghiên cứu thất bại", "danger");
                  }
              }
            })
            .catch((e) => {});
    }
    const { previewVisible, previewImage, fileList } = state;
    const handleChange = ({ fileList }) => { };
    const handleCancel = () => setState({ previewVisible: false });
    return (
        <AdminPage className="mgr-manufacturer">
            <Panel
                title={id ? "CẬP NHẬT ĐÀO TẠO - NGHIÊN CỨU KHOA HỌC" : "THÊM MỚI ĐÀO TẠO - NGHIÊN CỨU KHOA HỌC"}
                id={"mgr-manufacturer"}
                allowClose={false}
                allowCollapse={false}
                icon={images.icon.ic_hospital}
            >
                <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-2">
                            <Form.Item label="Tiêu đề (*)">
                            </Form.Item>
                            <Form.Item label="Nổi bật">
                            </Form.Item>
                        </div>
                        <div className="col-10">
                            <Form.Item>
                                <Input
                                    autoComplete="off"
                                    onChange={e => setState({
                                        title: e.target.value
                                    })}
                                    value={state.title}
                                    placeholder="Nhập Tiêu đề"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    autoComplete="off"
                                    onChange={e => setState({
                                        hightlights: e.target.value
                                    })}
                                    value={state.hightlights}
                                    placeholder="Nhập Nổi bật"
                                />
                            </Form.Item>
                            <Form.Item>
                                <input
                                    type="file"
                                    onChange={(s) => btnUpload(s)}
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
