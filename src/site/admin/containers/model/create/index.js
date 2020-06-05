import React, { useState, useEffect } from "react";
import { Form, Button, Input, Select, Modal } from "antd";
import hospitalProvider from "@data-access/hospital-provider";
import snackbar from "@utils/snackbar-utils";
import { AdminPage, Panel } from "@admin/components/admin";
import nameDeviceProvider from "@data-access/commercial-name-provider";
import deviceTypeProvider from "@data-access/device-type-provider";
import manufacturerProvider from "@data-access/manufacturer-provider";
import countryProvider from "@data-access/country-provider";
import modelProvider from "@data-access/model-provider";
import images from "@src/resources/images";
const { TextArea } = Input;
const { Option } = Select;
function index(props) {
  const id = props.match.params.id;
  const [state, _setState] = useState({
    data: [],
    ma: "",
    ten: "",
    previewVisible: false,
    previewImage: "",
    listName: [],
    listDeviceType: [],
    listCompany: [],
    listManufacturer: [],
    listCountry: [],
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
    getName();
    getDeviceType();
    getCompany();
    getManufacturer();
    getCountry();
  }, []);
  const getDetail = (id) => {
    modelProvider
      .getById(id)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            ma: s.data.ma,
            ten: s.data.ten,
            dmThietBiId: s.data.dmThietBiId,
            dmLoaiThietBiId: s.data.dmLoaiThietBiId,
            dmHangSanXuatId: s.data.dmHangSanXuatId,
            hangSoHuuId: s.data.hangSoHuuId,
            nuocSanXuatId: s.data.nuocSanXuatId,
            nuocSoHuuId: s.data.nuocSoHuuId,
            nhaCungCapId: s.data.nhaCungCapId,
            ghiChu: s.data.ghiChu,
            namSanXuat: s.data.namSanXuat,
          });
        }
      })
      .catch((e) => {});
  };
  const getName = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    nameDeviceProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listName: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getDeviceType = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    deviceTypeProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listDeviceType: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getCompany = () => {
    let params = {
      page: 1,
      size: 99999,
      loaiDonVi: 20,
    };
    hospitalProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listCompany: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getCountry = () => {
    countryProvider
      .search(0, 9999)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listCountry: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const getManufacturer = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    manufacturerProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          let data = [
            {
              id: "",
              ten: "Tất cả",
            },
          ];
          setState({
            listManufacturer: data.concat(s.data),
          });
        }
      })
      .catch((e) => {});
  };
  const onClose = () => () => {
    props.history.push("/admin/model");
  };

  const handleSubmit = (e) => {
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
      ma,
      ten,
      dmThietBiId,
      dmLoaiThietBiId,
      dmHangSanXuatId,
      hangSoHuuId,
      nuocSanXuatId,
      nuocSoHuuId,
      nhaCungCapId,
      ghiChu,
      namSanXuat,
    } = state;
    let params = {
      ma,
      ten: ten.trim(),
      dmThietBiId,
      dmLoaiThietBiId,
      dmHangSanXuatId,
      hangSoHuuId,
      nuocSanXuatId,
      nuocSoHuuId,
      nhaCungCapId,
      ghiChu: ghiChu,
      namSanXuat,
    };
    modelProvider
      .createOrEdit(id, params)
      .then((s) => {
        if (s && s.code === 0) {
          if (id) {
            snackbar.show("Cập nhật model thành công", "success");
          } else {
            snackbar.show("Thêm mới model thành công", "success");
          }
          props.history.push("/admin/model");
        } else {
          if (id) {
            snackbar.show("Cập nhật model thất bại", "danger");
          } else {
            snackbar.show("Thêm mới model thất bại", "danger");
          }
        }
      })
      .catch((e) => {});
  };
  const { previewVisible, previewImage } = state;
  const handleCancel = () => setState({ previewVisible: false });
  const checkName = (rule, value, callback) => {
    if (!value || !state.ten) {
      callback([new Error("Vui lòng nhập Model")]);
    } else {
      if (value.length > 255) {
        callback([new Error("Vui lòng nhập model tối đa 255 kí tự!")]);
      } else {
        callback();
      }
    }
  };
  const checkGhiChu = (rule, value, callback) => {
    if (!value || !state.nguoiLienHe) {
      callback();
    } else {
      if (value.length > 255) {
        callback([new Error("Vui lòng nhập ghi chú tối đa 255 kí tự!")]);
      } else {
        callback();
      }
    }
  };
  const onCheckUsedDate = () => {
    let x = 1990;
    let check = [];
    do {
      check.push(x);
      x = x + 1;
    } while (x <= new Date().getFullYear() + 10);
    let c = check.map((item, index) => {
      return (
        <Option key={index} value={item}>
          {item.toString()}
        </Option>
      );
    });
    return c;
  };
  return (
    <AdminPage className="mgr-manufacturer">
      <Panel
        title={id ? "Chỉnh sửa Model" : "Thêm mới Model"}
        id={"mgr-manufacturer"}
        allowClose={false}
        allowCollapse={false}
        icon={images.icon.ic_list}
      >
        <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <Form.Item label="Model *">
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
                    placeholder="Nhập model"
                  />
                )}
              </Form.Item>
              <Form.Item label="Tên thiết bị (*)">
                {getFieldDecorator("dmThietBiId", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng chọn tên thiết bị",
                    },
                  ],
                  initialValue: state.dmThietBiId,
                })(
                  <Select
                    onChange={(e) => {
                      setState({
                        dmThietBiId: e,
                      });
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Chọn thiết bị"
                  >
                    {state.listName &&
                      state.listName.length &&
                      state.listName.map((option, index) => {
                        return (
                          <Option key={index} value={option.id}>
                            {option.ten}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Loại thiết bị (*)">
                {getFieldDecorator("dmLoaiThietBiId", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng chọn loại thiết bị",
                    },
                  ],
                  initialValue: state.dmLoaiThietBiId,
                })(
                  <Select
                    onChange={(e) => {
                      setState({
                        dmLoaiThietBiId: e,
                      });
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Chọn loại thiết bị"
                  >
                    {state.listDeviceType &&
                      state.listDeviceType.length &&
                      state.listDeviceType.map((option, index) => {
                        return (
                          <Option key={index} value={option.id}>
                            {option.ten}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Năm sản xuất">
                <Select
                  placeholder="Năm sản xuất"
                  onChange={(e) => {
                    setState({
                      namSanXuat: e,
                    });
                  }}
                  value={state.namSanXuat}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {onCheckUsedDate()}
                </Select>
              </Form.Item>
              <Form.Item label="Nhà thầu/ Nhà cung cấp">
                <Select
                  onChange={(e) => {
                    setState({
                      nhaCungCapId: e,
                    });
                  }}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  placeholder="Chọn hãng phân phối - công ty  "
                >
                  {state.listCompany &&
                    state.listCompany.length &&
                    state.listCompany.map((option, index) => {
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
              <Form.Item label="Hãng sản xuất (*)">
                {getFieldDecorator("dmHangSanXuatId", {
                  rules: [
                    {
                      required: true,
                      message: "Vui lòng chọn tỉnh/thành phố",
                    },
                  ],
                  initialValue: state.dmHangSanXuatId,
                })(
                  <Select
                    onChange={(e) => {
                      setState({
                        dmHangSanXuatId: e,
                      });
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Chọn hãng sản xuất"
                  >
                    {state.listManufacturer &&
                      state.listManufacturer.length &&
                      state.listManufacturer.map((option, index) => {
                        return (
                          <Option key={index} value={option.id}>
                            {option.ten}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Hãng chủ sở hữu">
                <Select
                  onChange={(e) => {
                    setState({
                      hangSoHuuId: e,
                    });
                  }}
                  value={state.hangSoHuuId}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  placeholder="Chọn hãng chủ sở hữu"
                >
                  {state.listManufacturer &&
                    state.listManufacturer.length &&
                    state.listManufacturer.map((option, index) => {
                      return (
                        <Option key={index} value={option.id}>
                          {option.ten}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
              <Form.Item label="Nước sản xuất (*)">
                {getFieldDecorator("nuocSanXuatId", {
                  rules: [
                    {
                      required: true,
                      message: "Chọn nước sản xuất",
                    },
                  ],
                  initialValue: state.nuocSanXuatId,
                })(
                  <Select
                    onChange={(e) => {
                      setState({
                        nuocSanXuatId: e,
                      });
                    }}
                    showSearch
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Chọn tỉnh/Thành phố"
                  >
                    {state.listCountry &&
                      state.listCountry.length &&
                      state.listCountry.map((option, index) => {
                        return (
                          <Option key={index} value={option.id}>
                            {option.ten}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Nước chủ sở hữu">
                <Select
                  onChange={(e) => {
                    setState({
                      nuocSoHuuId: e,
                    });
                  }}
                  value={state.nuocSoHuuId}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  placeholder="Chọn nước chủ sở hữu"
                >
                  {state.listCountry &&
                    state.listCountry.length &&
                    state.listCountry.map((option, index) => {
                      return (
                        <Option key={index} value={option.id}>
                          {option.ten}
                        </Option>
                      );
                    })}
                </Select>
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
              // background: "#fff",
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

export default Form.create()(index);
