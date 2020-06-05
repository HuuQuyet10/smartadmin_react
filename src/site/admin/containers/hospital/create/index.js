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
import actionCity from "@actions/city";
import { connect } from "react-redux";
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
    listOrganization: [],
    loaiDonVi: 10,
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
    getOrganization();
    props.getCity();
  }, []);
  const getOrganization = () => {
    let params = {
      page: 1,
      size: 99999,
      loaiDonVi: 30,
    };
    hospitalProvider
      .search(params)
      .then((s) => {
        setState({
          listOrganization: s.data,
        });
      })
      .catch((e) => {});
  };
  const getDetail = (id) => {
    hospitalProvider
      .getById(id)
      .then((s) => {
        if (s && s.code === 0) {
          let logo = {};
          logo.url = s.data.logo;
          setState({
            data: s.data,
            ma: s.data.ma,
            maSoThue: s.data.maSoThue,
            ten: s.data.ten,
            logo: s.data.logo,
            loaiCsyt: s.data.loaiCsyt,
            nguoiLienHe: s.data.nguoiLienHe,
            dmTinhThanhPhoId: s.data.dmTinhThanhPhoId,
            soDienThoai: s.data.soDienThoai,
            dmQuanHuyenId: s.data.dmQuanHuyenId,
            dmXaPhuongId: s.data.dmXaPhuongId,
            ghiChu: s.data.ghiChu,
            diaChi: s.data.diaChi,
            coQuanQuanLyIds: s.data.coQuanQuanLyIds,
            email: s.data.email,
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
    props.history.push("/admin/hospital");
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
      ma,
      maSoThue,
      ten,
      logo,
      loaiCsyt,
      nguoiLienHe,
      dmTinhThanhPhoId,
      soDienThoai,
      dmQuanHuyenId,
      dmXaPhuongId,
      ghiChu,
      diaChi,
      coQuanQuanLyIds,
      email,
      loaiDonVi,
    } = state;
    let object = {
      ma,
      maSoThue,
      ten: ten.trim(),
      logo,
      loaiCsyt,
      nguoiLienHe,
      dmTinhThanhPhoId,
      soDienThoai,
      dmQuanHuyenId,
      dmXaPhuongId,
      ghiChu,
      diaChi,
      coQuanQuanLyIds,
      email,
      loaiDonVi,
    };
    hospitalProvider
      .createOrEdit(id, object)
      .then((s) => {
        if (s && s.code === 0) {
          if (id) {
            snackbar.show("Cập nhật cơ sở y tế thành công", "success");
          } else {
            snackbar.show("Thêm mới cơ sở y tế thành công", "success");
          }
          props.history.push("/admin/hospital");
        } else if (s && s.code === 1802) {
          snackbar.show("Tên cơ sơ y tế đã tồn tại", "danger");
        } else {
          if (id) {
            snackbar.show("Cập nhật cơ sở y tế thất bại", "danger");
          } else {
            snackbar.show("Thêm mới cơ sở y tế thất bại", "danger");
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
      callback();
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
  const checkMa = (rule, value, callback) => {
    if (!value || !state.ma) {
      callback([new Error("Vui lòng nhập mã bệnh viện")]);
    } else {
      if (value.length > 255) {
        callback([new Error("Vui lòng nhập mã bệnh viện tối đa 255 kí tự!")]);
      } else {
        callback();
      }
    }
  };
  const checkName = (rule, value, callback) => {
    if (!value || !state.ten) {
      callback([new Error("Vui lòng nhập tên cơ sở y tế")]);
    } else {
      if (value.length > 255) {
        callback([new Error("Vui lòng nhập tên cơ sở y tế tối đa 255 kí tự!")]);
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
  const checkEmail = (rule, value, callback) => {
    if (!value || !state.email) {
      callback();
    } else {
      if (!value.isEmail()) {
        callback([new Error("Vui lòng nhập đúng định dạng email")]);
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
  return (
    <AdminPage className="mgr-manufacturer">
      <Panel
        title={id ? "Chỉnh sửa cơ sở y tế" : "Thêm mới cơ sở y tế"}
        id={"mgr-manufacturer"}
        allowClose={false}
        allowCollapse={false}
        icon={images.icon.ic_hospital}
      >
        <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Tên cơ sở y tế (*)">
                {getFieldDecorator("ten", {
                  rules: [{ validator: checkName }],
                  initialValue: state.ten,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) => {
                      setState({
                        ten: e.target.value,
                      });
                    }}
                    placeholder="Nhập tên cơ sở y tế"
                  />
                )}
              </Form.Item>
              <Form.Item label="Mã bệnh viện (*)">
                {getFieldDecorator("ma", {
                  rules: [{ validator: checkMa }],
                  initialValue: state.ma,
                })(
                  <Input
                    autoComplete="off"
                    onChange={(e) =>
                      setState({
                        ma: e.target.value,
                      })
                    }
                    placeholder="Nhập mã bệnh viện"
                  />
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Logo cơ sở y tế">
                <Upload
                  listType="picture-card"
                  fileList={
                    fileList &&
                    fileList.length &&
                    fileList.map((item) => {
                      let item2 = JSON.parse(JSON.stringify(item));
                      if (item2.url) item2.url = item2.url.absoluteFileUrl();
                      return item2;
                    })
                  }
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
              <Form.Item label="Mã số thuế">
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
            </div>
            <div className="col-6">
              <Form.Item label="Email">
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
                    placeholder="Nhập địa chỉ email"
                  />
                )}
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Loại cơ sở y tế (*)">
                {getFieldDecorator("loaiCsyt", {
                  rules: [
                    {
                      required: true,
                      message: "Chọn loại cơ sở y tế",
                    },
                  ],
                  initialValue: state.loaiCsyt,
                })(
                  <Select
                    onChange={(e) => {
                      setState({
                        loaiCsyt: e,
                      });
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Vui lòng chọn loại cơ sở y tế"
                  >
                    {DataContants.listTypeHospital &&
                      DataContants.listTypeHospital.length &&
                      DataContants.listTypeHospital.map((option, index) => {
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
            <div className="col-6">
              <Form.Item label="Cơ quan quản lý (*)">
                {getFieldDecorator("coQuanQuanLyIds ", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng chọn cơ quan quản lý",
                    },
                  ],
                  initialValue: state.coQuanQuanLyIds,
                })(
                  <Select
                    mode="multiple"
                    onChange={(e) => {
                      setState({
                        coQuanQuanLyIds: e,
                      });
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Chọn cơ quan quản lý"
                  >
                    {state.listOrganization &&
                      state.listOrganization.length &&
                      state.listOrganization.map((option, index) => {
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
              <Form.Item label="Người liên hệ (phòng vật tư)">
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
                    placeholder="Nhập người liên hệ (phòng vật tư)"
                  />
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
                  <span style={{ color: "red" }}>Vui lòng chọn quận huyện</span>
                ) : (
                  ""
                )}
              </Form.Item>
              <Form.Item label="Xã/phường">
                <Select
                  onChange={(e) => {
                    setState({
                      dmXaPhuongId: e,
                    });
                  }}
                  value={state.dmXaPhuongId}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  placeholder="Chọn xã/phường"
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
