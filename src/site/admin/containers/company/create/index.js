import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Input, Select, Upload, Modal } from "antd";
import hospitalProvider from "@data-access/hospital-provider";
import snackbar from "@utils/snackbar-utils";
import { AdminPage, Panel } from "@admin/components/admin";
import DataContants from "@admin/components/config/data-contants";
import fileProvider from "@data-access/file-provider";
import communeProvider from "@data-access/commune-provider";
import districtProvider from "@data-access/district-provider";
import images from "@src/resources/images";
import { connect } from "react-redux";
import actionCity from "@actions/city";
const { TextArea } = Input;
const { Option } = Select;
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
    ma: "",
    ten: "",
    previewVisible: false,
    previewImage: "",
    fileList: [],
    listCommune: [],
    listDistrict: [],
    loaiDonVi: 20,
    isCheckValidate: false,
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
    props.getCity();
  }, []);
  const getDetail = (id) => {
    hospitalProvider
      .getById(id)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            data: s.data,
            maSoThue: s.data.maSoThue,
            ten: s.data.ten,
            logo: s.data.logo ? s.data.logo : "",
            loaiCongTy: s.data.loaiCongTy,
            nguoiLienHe: s.data.nguoiLienHe ? s.data.nguoiLienHe : "",
            dmTinhThanhPhoId: s.data.dmTinhThanhPhoId,
            soDienThoai: s.data.soDienThoai,
            dmQuanHuyenId: s.data.dmQuanHuyenId,
            dmXaPhuongId: s.data.dmXaPhuongId ? s.data.dmXaPhuongId : "",
            ghiChu: s.data.ghiChu ? s.data.ghiChu : "",
            email: s.data.email,
            diaChi: s.data.diaChi ? s.data.diaChi : "",
            fileList: s.data.logo
              ? [
                  {
                    uid: "-1",
                    name: "image.png",
                    status: "done",
                    url: s.data.logo.absoluteFileUrl(),
                  },
                ]
              : [],
          });
          getDistrict(s.data.dmTinhThanhPhoId);
          getCommune(s.data.dmQuanHuyenId);
        }
      })
      .catch((e) => {});
  };
  const getDistrict = (e) => {
    districtProvider
      .search(0, 9999, e)
      .then((s) => {
        setState({
          listDistrict: s.data,
        });
      })
      .catch((e) => {});
  };
  const getCommune = (e) => {
    communeProvider
      .search(0, 9999, e)
      .then((s) => {
        setState({
          listCommune: s.data,
        });
      })
      .catch((e) => {});
  };
  const onClose = () => () => {
    props.history.push("/admin/supplier");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.dmQuanHuyenId) {
      setState({
        isCheckValidate: true,
      });
      return;
    } else {
      setState({
        isCheckValidate: false,
      });
    }
    props.form.validateFields((err, values) => {
      if (!err) {
        handleCreate();
      }
    });
  };
  const { getFieldDecorator } = props.form;
  const handleCreate = () => {
    let {
      maSoThue,
      ten,
      logo,
      nguoiLienHe,
      dmTinhThanhPhoId,
      soDienThoai,
      dmQuanHuyenId,
      dmXaPhuongId,
      ghiChu,
      diaChi,
      email,
      loaiDonVi,
      loaiCongTy,
    } = state;
    let object = {
      maSoThue,
      ten: ten.trim(),
      logo,
      nguoiLienHe,
      dmTinhThanhPhoId,
      soDienThoai,
      dmQuanHuyenId,
      dmXaPhuongId,
      ghiChu,
      diaChi,
      email,
      loaiDonVi,
      loaiCongTy,
    };
    hospitalProvider
      .createOrEdit(id, object)
      .then((s) => {
        if (s && s.code === 0) {
          if (id) {
            snackbar.show("Cập nhật công ty TTB thành công", "success");
          } else {
            snackbar.show("Thêm mới công ty TTB thành công", "success");
          }
          props.history.push("/admin/supplier");
        } else {
          if (id) {
            snackbar.show("Cập nhật công ty TTB thất bại", "danger");
          } else {
            snackbar.show("Thêm mới công ty TTB thất bại", "danger");
          }
        }
      })
      .catch((e) => {});
  };
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
  const handleChange = ({ fileList }) => {};
  const handleCancel = () => setState({ previewVisible: false });
  const checkMaSoThue = (rule, value, callback) => {
    if (!value || !state.maSoThue) {
      callback([new Error("Vui lòng nhập mã số thuế")]);
    } else {
      if (!value.uintTextBox()) {
        callback([new Error("Vui lòng nhập đúng định dạng mã số thuế")]);
      } else if (value.length > 35) {
        callback([new Error("Vui lòng nhập mã số thuế tối đa 35 kí tự!")]);
      } else {
        callback();
      }
    }
  };
  const checkName = (rule, value, callback) => {
    if (!value || !state.ten) {
      callback([new Error("Vui lòng nhập tên công ty TTB")]);
    } else {
      if (value.length > 255) {
        callback([
          new Error("Vui lòng nhập tên công ty TTB tối đa 255 kí tự!"),
        ]);
      } else {
        callback();
      }
    }
  };
  const checkSoNha = (rule, value, callback) => {
    if (!value || !state.diaChi) {
      callback();
    } else {
      if (value.length > 255) {
        callback([
          new Error("Vui lòng nhập số nhà/đường/phố tối đa 255 kí tự!"),
        ]);
      } else {
        callback();
      }
    }
  };
  const checkNguoiLienHe = (rule, value, callback) => {
    if (!value || !state.nguoiLienHe) {
      callback();
    } else {
      if (value.length > 255) {
        callback([
          new Error(
            "Vui lòng nhập người liên hệ (phòng vật tư) tối đa 255 kí tự!"
          ),
        ]);
      } else {
        callback();
      }
    }
  };
  const checkPhone = (rule, value, callback) => {
    if (!value || !state.soDienThoai) {
      callback([new Error("Vui lòng nhập số điện thoại")]);
    } else {
      if (value.length < 10 || value.length > 13) {
        callback([
          new Error(
            "Vui lòng nhập số điện thoại trong khoảng từ 10 đến 13 kí tự!"
          ),
        ]);
      } else if (!value.isPhoneNumber()) {
        callback([new Error("Vui lòng nhập đúng định dạng số điện thoại")]);
      } else {
        callback();
      }
    }
  };
  const checkGhiChu = (rule, value, callback) => {
    if (!value || !state.ghiChu) {
      callback();
    } else {
      if (value.length > 255) {
        callback([new Error("Vui lòng nhập ghi chú tối đa 255 kí tự!")]);
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
      } else if (value.length > 255) {
        callback([new Error("Vui lòng nhập email tối đa 255 kí tự!")]);
      } else {
        callback();
      }
    }
  };
  return (
    <AdminPage className="mgr-manufacturer">
      <Panel
        title={id ? "Chỉnh sửa công ty TTB" : "Thêm mới công ty TTB"}
        id={"mgr-manufacturer"}
        allowClose={false}
        allowCollapse={false}
        icon={images.icon.ic_company}
      >
        <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Mã số thuế *">
                {getFieldDecorator("maSoThue", {
                  rules: [{ validator: checkMaSoThue }],
                  initialValue: state.maSoThue,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) =>
                      setState({
                        maSoThue: e.target.value,
                      })
                    }
                    placeholder="Nhập mã số thuế"
                  />
                )}
              </Form.Item>
              <Form.Item label="Tên công ty TTB (*)">
                {getFieldDecorator("ten", {
                  rules: [{ validator: checkName }],
                  initialValue: state.ten,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) =>
                      setState({
                        ten: e.target.value,
                      })
                    }
                    placeholder="Nhập tên công ty TTB"
                  />
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Logo công ty TTB">
                <Upload
                  listType="picture-card"
                  fileList={fileList.map((item) => {
                    let item2 = JSON.parse(JSON.stringify(item));
                    if (item2.url) item2.url = item2.url.absoluteFileUrl();
                    return item2;
                  })}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  onRemove={(file) => {
                    files.current = files.current.filter(
                      (item) => item.uid !== file.uid
                    );
                    setState({
                      fileList: files.current,
                      hasChange: true,
                    });
                  }}
                  customRequest={({ onSuccess, onError, file }) => {
                    file.status = "uploading";
                    files.current.push(file);
                    setState({
                      fileList: files.current,
                    });
                    fileProvider
                      .uploadImage(file)
                      .then((s) => {
                        var x = files.current.find(
                          (item) => item.uid === file.uid
                        );
                        if (x) {
                          if (s && s.code === 0 && s.data.length) {
                            setState({
                              logo: s.data[0],
                            });
                            let url = s.data[0];
                            x.status = "done";
                            x.url = url;
                          } else {
                            x.status = "error";
                          }
                          setState({
                            fileList: files.current,
                            hasChange: true,
                          });
                        }
                      })
                      .catch((e) => {
                        var x = files.current.find(
                          (item) => item.uid === file.uid
                        );
                        if (x) {
                          x.status = "error";
                          setState({
                            fileList: files.current,
                          });
                        }
                      });
                  }}
                  accept=".png,.gif,.jpg"
                >
                  {fileList.length >= 1 ? null : (
                    <div className="ant-upload-text">Upload</div>
                  )}
                </Upload>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Tỉnh/Thành phố (*)">
                {getFieldDecorator("dmTinhThanhPhoId", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng chọn tỉnh/thành phố",
                    },
                  ],
                  initialValue: state.dmTinhThanhPhoId,
                })(
                  <Select
                    onChange={(e) => {
                      setState({
                        dmTinhThanhPhoId: e,
                        dmQuanHuyenId: undefined,
                        dmXaPhuongId: undefined,
                      });
                      getDistrict(e);
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Chọn tỉnh/Thành phố"
                  >
                    {props.listCitys &&
                      props.listCitys.length &&
                      props.listCitys.map((option, index) => {
                        return (
                          <Option key={index} value={option.id}>
                            {option.ten}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Loại công ty TTB (*)">
                {getFieldDecorator("loaiCongTy", {
                  rules: [
                    {
                      required: true,
                      message: "Chọn loại công ty TTB",
                    },
                  ],
                  initialValue: state.loaiCongTy,
                })(
                  <Select
                    onChange={(e) => {
                      setState({
                        loaiCongTy: e,
                      });
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Vui lòng chọn loại công ty TTB"
                  >
                    {DataContants.listTypeCompany &&
                      DataContants.listTypeCompany.length &&
                      DataContants.listTypeCompany.map((option, index) => {
                        return (
                          <Option key={index} value={option.value}>
                            {option.name}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Quận/huyện (*)">
                <Select
                  onChange={(e) => {
                    setState({
                      dmQuanHuyenId: e,
                      dmXaPhuongId: undefined,
                    });
                    getCommune(e);
                  }}
                  value={state.dmQuanHuyenId}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  placeholder="Chọn quận/huyện"
                >
                  {state.listDistrict &&
                    state.listDistrict.length &&
                    state.listDistrict.map((option, index) => {
                      return (
                        <Option key={index} value={option.id}>
                          {option.ten}
                        </Option>
                      );
                    })}
                </Select>
                {state.isCheckValidate && !state.dmQuanHuyenId ? (
                  <span style={{ color: "red" }}>Vui lòng chọn quận/huyện</span>
                ) : (
                  ""
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Người liên hệ">
                {getFieldDecorator("nguoiLienHe", {
                  rules: [{ validator: checkNguoiLienHe }],
                  initialValue: state.nguoiLienHe,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) =>
                      setState({
                        nguoiLienHe: e.target.value,
                      })
                    }
                    placeholder="Nhập người liên hệ "
                  />
                )}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Xã/phường">
                <Select
                  onChange={(e) => {
                    setState({
                      dmXaPhuongId: e,
                    });
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  placeholder="Chọn xã/phường"
                  value={state.dmXaPhuongId}
                >
                  {state.listCommune &&
                    state.listCommune.length &&
                    state.listCommune.map((option, index) => {
                      return (
                        <Option key={index} value={option.id}>
                          {option.ten}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Số điện thoại (*)">
                {getFieldDecorator("soDienThoai", {
                  rules: [{ validator: checkPhone }],
                  initialValue: state.soDienThoai,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) =>
                      setState({
                        soDienThoai: e.target.value,
                      })
                    }
                    placeholder="Nhập số điện thoại"
                  />
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Số nhà/đường/phố">
                {getFieldDecorator("diaChi", {
                  rules: [{ validator: checkSoNha }],
                  initialValue: state.diaChi,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) =>
                      setState({
                        diaChi: e.target.value,
                      })
                    }
                    placeholder="Nhập số nhà/đường/phố"
                  />
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Email *">
                {getFieldDecorator("email", {
                  rules: [{ validator: checkEmail }],
                  initialValue: state.email,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) =>
                      setState({
                        email: e.target.value,
                      })
                    }
                    placeholder="Nhập email"
                  />
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Ghi chú">
                {getFieldDecorator("ghiChu", {
                  rules: [{ validator: checkGhiChu }],
                  initialValue: state.ghiChu,
                })(
                  <TextArea
                    rows={5}
                    onChange={(e) =>
                      setState({
                        ghiChu: e.target.value,
                      })
                    }
                    placeholder="Nhập ghi chú"
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
            <Button
              className="btn-delete"
              onClick={onClose(false)}
              style={{ marginRight: 8 }}
            >
              Hủy
            </Button>
            <Button className="btn-edit" onClick={handleSubmit}>
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

export default connect(
  (state) => {
    return {
      listCitys: state.city.listCitys,
    };
  },
  {
    getCity: actionCity.getCity,
  }
)(Form.create()(index));
