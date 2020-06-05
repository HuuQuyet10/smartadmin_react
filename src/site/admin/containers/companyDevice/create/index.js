import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import "./style.scss";
import {
  Button,
  DatePicker,
  Tooltip,
  Form,
  Input,
  Select,
  Checkbox,
  Modal,
} from "antd";
import nameDeviceProvider from "@data-access/commercial-name-provider";
import unitProvider from "@data-access/unit-provider";
import manufacturerProvider from "@data-access/manufacturer-provider";
import deviceProvider from "@data-access/device-provider";
import deviceTypeProvider from "@data-access/device-type-provider";
import modelProvider from "@data-access/model-provider";
import moment from "moment";
import snackbar from "@utils/snackbar-utils";
import { connect } from "react-redux";
const { Option } = Select;
const { confirm } = Modal;
function index(props) {
  let deviceId = props.match.params.id;
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    data: [],
    listNames: [],
    listUnits: [],
    listManufacturers1: [],
    listManufacturers2: [],
    listManufacturers3: [],
    listCountry1: [],
    listCountry2: [],
    listCountry3: [],
    listDeviceType: [],
    listModel: [],
    listModel2: [],
    listDeviceType2: [],

    // dmThietBiId: undefined,
    ten: "",
    soLuong: 1,
    // dmDonViTinhId: undefined,
    dmHangSanXuatId: undefined,
    // dmDonViCungCapId: undefined,
    namSuDung: undefined,
    nuocSanXuatId: undefined,
    namSanXuat: undefined,
    // namMua: undefined,
    // dmTrangThaiId: undefined,
    ghiChu: "",
    isTBPhuTro: false,

    dmThietBiPTId: undefined,
    dmThietBiPTName: "",
    dmLoaiThietBiPTId: undefined,
    dmLoaiThietBiPTName: "",
    dmModelPTId: undefined,
    dmModelPTName: "",
    soLuongPT: 1,
    dmDonViTinhPTId: undefined,
    dmDonViTinhPTName: "",
    nuocSanXuatPTId: undefined,
    nuocSanXuatPTName: "",
    listTBPT: [],
    dataPT: [],
    isEditPT: false,
    keyEdit: undefined,
  });

  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };
  const { getFieldDecorator } = props.form;

  useEffect(() => {
    onSearchName();
    onSearchUnit();
    onSearchManufacturer();
    getModel();
    if (deviceId) {
      getDetail(deviceId);
    }
  }, []);
  const getDetail = (id) => {
    deviceProvider
      .getById(id)
      .then((s) => {
        if (s && s.code === 0) {
          let data = s.data;
          let check =
            s.data.thietBiPhuTro && s.data.thietBiPhuTro.length
              ? s.data.thietBiPhuTro.map((item, index) => {
                  return {
                    dmThietBiPTId: item.dmThietBiId,
                    dmThietBiPTName: item.dmThietBi && item.dmThietBi.ten,
                    dmLoaiThietBiPTId: item.dmLoaiThietBiId,
                    dmLoaiThietBiPTName:
                      item.dmLoaiThietBi && item.dmLoaiThietBi.ten,
                    dmDonViTinhPTId: item.dmDonViTinhId,
                    dmDonViTinhPTName: item.dmDonViTinh && item.dmDonViTinh.ten,
                    dmModelPTId: item.dmModelId,
                    dmModelPTName: item.dmModel && item.dmModel.ten,
                    nuocSanXuatPTId: item.dmModel && item.dmModel.nuocSanXuatId,
                    nuocSanXuatPTName:
                      item.dmModel &&
                      item.dmModel.nuocSanXuat &&
                      item.dmModel.nuocSanXuat.ten,
                    soLuongPT: 1,
                    dmHangSanXuatPTId:
                      item.dmModel && item.dmModel.dmHangSanXuatId,
                    dmHangSanXuatPTName:
                      item.dmModel &&
                      item.dmModel.dmHangSanXuat &&
                      item.dmModel.dmHangSanXuat.ten,
                    namSanXuatPT: item.dmModel && item.dmModel.namSanXuat,
                  };
                })
              : [];
          setState({
            ma: data.ma,
            dmThietBiId: data.dmThietBiId,
            dmLoaiThietBiId: data.dmLoaiThietBiId,
            dmModelId: data.dmModelId,
            thoiGianApDung: moment(data.thoiGianApDung),
            ten: data.ten,
            soLuong: data.soLuong,
            dmDonViTinhId: data.dmDonViTinhId,
            namSuDung: data.namSuDung,
            namMua: data.namMua,
            dmTrangThaiId: data.dmTrangThaiId,
            ghiChu: data.ghiChu,
            isTBPhuTro:
              data.thietBiPhuTro && data.thietBiPhuTro.length ? true : false,
            listTBPT: check,
            dataPT: check.map((item, index) => {
              return {
                key: index,
                col1: item.dmThietBiPTName,
                col2: item.dmLoaiThietBiPTName,
                col3: item.dmModelPTName,
                col4: item.dmDonViTinhPTName,
                col5: item.dmHangSanXuatPTName,
                col6: item.nuocSanXuatPTName,
                col7: item.namSanXuatPT,
                col8: index,
              };
            }),
          });
          getDetailModel(data.dmModelId);
        }
      })
      .catch((e) => {});
  };
  const getDeviceType = (dmThietBiId) => {
    let params = {
      page: 1,
      size: 999999,
      dmThietBiId,
    };
    deviceTypeProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            listDeviceType: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const getDeviceType2 = (dmThietBiId) => {
    let params = {
      page: 1,
      size: 999999,
      dmThietBiId,
    };
    deviceTypeProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            listDeviceType2: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const getModel = (dmThietBiId) => {
    let params = {
      page: 1,
      size: 999999,
      dmThietBiId,
    };
    modelProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            listModel: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const getModel2 = (dmThietBiId) => {
    let params = {
      page: 1,
      size: 999999,
      dmThietBiId,
    };
    modelProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            listModel2: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const getDetailModel = (id) => {
    modelProvider
      .getById(id)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            dmHangSanXuatId: s.data.dmHangSanXuatId,
            listManufacturers1: new Array(s.data.dmHangSanXuat),
            hangSoHuuId: s.data.hangSoHuuId,
            listManufacturers2: new Array(s.data.hangSoHuu),
            namSanXuat: s.data.namSanXuat,
            nuocSanXuatId: s.data.nuocSanXuatId,
            listCountry1: new Array(s.data.nuocSanXuat),
            nuocSoHuuId: s.data.nuocSoHuuId,
            listCountry2: new Array(s.data.nuocSoHuu),
            dmDonViCungCapId: s.data.nhaCungCapId,
          });
        }
      })
      .catch((e) => {});
  };
  const getDetailModel2 = (id) => {
    modelProvider
      .getById(id)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            nuocSanXuatPTId: s.data.nuocSanXuatId,
            nuocSanXuatPTName: s.data.nuocSanXuat && s.data.nuocSanXuat.ten,
            listCountry3: new Array(s.data.nuocSanXuat),
            dmHangSanXuatPTId: s.data.dmHangSanXuatId,
            dmHangSanXuatPTName:
              s.data.dmHangSanXuat && s.data.dmHangSanXuat.ten,
            listManufacturers3: new Array(s.data.dmHangSanXuat),
            namSanXuatPT: s.data.namSanXuat,
          });
        }
      })
      .catch((e) => {});
  };
  const onSearchName = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    nameDeviceProvider
      .search(params)
      .then((s) => {
        if (s.code === 0) {
          setState({
            listNames: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const onSearchUnit = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    unitProvider
      .search(params)
      .then((s) => {
        if (s.code === 0) {
          setState({
            listUnits: s.data,
          });
          if (!deviceId) {
            s.data &&
              s.data.length &&
              s.data.map((item) => {
                if (item && item.ten === "Chiếc") {
                  setState({
                    dmDonViTinhId: item.id,
                  });
                }
              });
          }
        }
      })
      .catch((e) => {});
  };
  const onSearchManufacturer = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    manufacturerProvider
      .search(params)
      .then((s) => {
        if (s.code === 0) {
          setState({
            listManufacturers1: s.data,
            listManufacturers2: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let {
      dmThietBiId,
      dmLoaiThietBiId,
      dmModelId,
      thoiGianApDung,
      ten,
      soLuong,
      dmDonViTinhId,
      namSuDung,
      namMua,
      dmTrangThaiId,
      ghiChu,
      listTBPT,
    } = state;
    let TBPhuTro =
      listTBPT && listTBPT.length
        ? listTBPT.map((item) => {
            return {
              dmThietBiId: item.dmThietBiPTId,
              dmLoaiThietBiId: item.dmLoaiThietBiPTId,
              dmModelId: item.dmModelPTId,
              dmDonViTinhId: item.dmDonViTinhPTId,
            };
          })
        : [];

    let param = {
      ma: state.ma,
      dmThietBiId,
      dmLoaiThietBiId,
      dmModelId,
      thoiGianApDung,
      ten,
      soLuong,
      dmDonViTinhId,
      namSuDung,
      namMua,
      dmTrangThaiId,
      ghiChu,
      thietBiPhuTro: TBPhuTro,
    };
    props.form.validateFields((err, values) => {
      if (!err) {
        if (deviceId) {
          deviceProvider
            .createOrEdit(deviceId, param)
            .then((s) => {
              if (s && s.code === 0) {
                snackbar.show("Cập nhật thiêt bị", "success");
                props.history.push("/admin/company-device");
              } else if (s.code === 1000) {
                snackbar.show("Thiếu thông tin", "danger");
              }
            })
            .catch((x) => {});
        } else {
          confirm({
            title: "Xác nhận",
            content: `Bạn có muốn thêm ${soLuong} thiết bị ${ten} vào hệ thống không? `,
            okText: "Đồng ý",
            okType: "primary",
            cancelText: "Hủy",
            onOk() {
              deviceProvider
                .createOrEdit("", param)
                .then((s) => {
                  if (s && s.code === 0) {
                    snackbar.show("Thêm thành công", "success");
                    onConfirmAdd();
                  } else if (s.code === 1000) {
                    snackbar.show("Thiếu thông tin", "danger");
                  }
                })
                .catch((x) => {});
            },
            onCancel() {},
          });
        }
      }
    });
  };
  const onConfirmAdd = () => {
    confirm({
      title: "Xác nhận",
      content: `Bạn có muốn thêm tiếp thiết bị vào hệ thống không? `,
      okText: "Đồng ý",
      okType: "primary",
      cancelText: "Hủy",
      onOk() {
        onReset();
      },
      onCancel() {
        props.history.push("/admin/company-device");
      },
    });
  };
  const onSubmitPT = (e) => {
    e.preventDefault();
    let {
      dmThietBiPTId,
      dmThietBiPTName,
      dmLoaiThietBiPTId,
      dmLoaiThietBiPTName,
      dmModelPTId,
      dmModelPTName,
      soLuongPT,
      dmDonViTinhPTId,
      dmDonViTinhPTName,
      nuocSanXuatPTId,
      nuocSanXuatPTName,
      listTBPT,
      isEditPT,
      keyEdit,
      dmHangSanXuatPTName,
      dmHangSanXuatPTId,
      namSanXuatPT,
    } = state;
    if (!dmThietBiPTId) {
      snackbar.show("Vui lòng nhập tên thiết bị", "danger");
      return;
    } else if (!soLuongPT) {
      snackbar.show("Vui lòng nhập số lượng", "danger");
      return;
    } else if (!dmDonViTinhPTId) {
      snackbar.show("Vui lòng chọn đơn vị tính", "danger");
      return;
    } else if (!dmLoaiThietBiPTId) {
      snackbar.show("Vui lòng chọn loại thiết bị", "danger");
      return;
    } else if (!dmModelPTId) {
      snackbar.show("Vui lòng chọn model", "danger");
      return;
    }
    let param = {
      dmThietBiPTId,
      dmThietBiPTName,
      dmLoaiThietBiPTId,
      dmLoaiThietBiPTName,
      dmModelPTId,
      dmModelPTName,
      soLuongPT,
      dmDonViTinhPTId,
      dmDonViTinhPTName,
      nuocSanXuatPTId,
      nuocSanXuatPTName,
      dmHangSanXuatPTName,
      dmHangSanXuatPTId,
      namSanXuatPT,
    };
    if (isEditPT) {
      let checkValue = listTBPT.filter((item, index) => keyEdit !== index);
      checkValue.push(param);
      setState({
        listTBPT: checkValue,
        dataPT: checkValue.map((item, index) => {
          return {
            key: index,
            col1: item.dmThietBiPTName,
            col2: item.dmLoaiThietBiPTName,
            col3: item.dmModelPTName,
            col4: item.dmDonViTinhPTName,
            col5: item.dmHangSanXuatPTName,
            col6: item.nuocSanXuatPTName,
            col7: item.namSanXuatPT,
            col8: index,
          };
        }),
        dmThietBiPTId: undefined,
        dmThietBiPTName: "",
        dmLoaiThietBiPTId: undefined,
        dmLoaiThietBiPTName: "",
        dmModelPTId: undefined,
        dmModelPTName: "",
        soLuongPT: 1,
        dmDonViTinhPTId: undefined,
        dmDonViTinhPTName: "",
        nuocSanXuatPTId: undefined,
        nuocSanXuatPTName: "",
        isEditPT: false,
        keyEdit: undefined,
        dmHangSanXuatPTId: undefined,
        dmHangSanXuatPTName: "",
        namSanXuatPT: undefined,
      });
    } else {
      setState({
        listTBPT: state.listTBPT.concat(param),
        dataPT: state.listTBPT.concat(param).map((item, index) => {
          return {
            key: index,
            col1: item.dmThietBiPTName,
            col2: item.dmLoaiThietBiPTName,
            col3: item.dmModelPTName,
            col4: item.dmDonViTinhPTName,
            col5: item.dmHangSanXuatPTName,
            col6: item.nuocSanXuatPTName,
            col7: item.namSanXuatPT,
            col8: index,
          };
        }),
        dmThietBiPTId: undefined,
        dmThietBiPTName: "",
        dmLoaiThietBiPTId: undefined,
        dmLoaiThietBiPTName: "",
        dmModelPTId: undefined,
        dmModelPTName: "",
        soLuongPT: 1,
        dmDonViTinhPTId: undefined,
        dmDonViTinhPTName: "",
        nuocSanXuatPTId: undefined,
        nuocSanXuatPTName: "",
        isEditPT: false,
        keyEdit: undefined,
        dmHangSanXuatPTId: undefined,
        dmHangSanXuatPTName: "",
        namSanXuatPT: undefined,
      });
    }
  };
  const onDeleteItem = (key) => {
    confirm({
      title: "Xác nhận",
      content: `Bạn có muốn xóa thiết bị phụ trợ này?`,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk() {
        let checkValue = state.listTBPT.filter((item, index) => key !== index);
        setState({
          listTBPT: checkValue,
          dataPT: checkValue.map((item, index) => {
            return {
              key: index,
              col1: item.dmThietBiPTName,
              col2: item.dmLoaiThietBiPTName,
              col3: item.dmModelPTName,
              col4: item.dmDonViTinhPTName,
              col5: item.dmHangSanXuatPTName,
              col6: item.nuocSanXuatPTName,
              col7: item.namSanXuatPT,
              col8: index,
            };
          }),
        });
      },
      onCancel() {},
    });
  };
  const editItemPT = (key) => {
    state.listTBPT.find((item, index) => {
      if (key === index) {
        setState({
          dmThietBiPTId: item.dmThietBiPTId,
          dmThietBiPTName: item.dmThietBiPTName,
          dmLoaiThietBiPTId: item.dmLoaiThietBiPTId,
          dmLoaiThietBiPTName: item.dmLoaiThietBiPTName,
          dmModelPTId: item.dmModelPTId,
          dmModelPTName: item.dmModelPTName,
          soLuongPT: item.soLuongPT,
          dmDonViTinhPTId: item.dmDonViTinhPTId,
          dmDonViTinhPTName: item.dmDonViTinhPTName,
          nuocSanXuatPTId: item.nuocSanXuatPTId,
          nuocSanXuatPTName: item.nuocSanXuatPTName,
          dmHangSanXuatPTId: item.dmHangSanXuatPTId,
          dmHangSanXuatPTName: item.dmHangSanXuatPTName,
          namSanXuatPT: item.namSanXuatPT,
          isEditPT: true,
          keyEdit: key,
        });
      }
    });
  };
  const onReset = () => {
    window.location.assign("/admin/device/create");
  };
  return (
    <div>
      <AdminPage
        icon="subheader-icon fal fa-window"
        header={deviceId ? "Cập nhật thông tin thiết bị" : "Thêm mới thiết bị"}
        subheader={
          deviceId
            ? "Nhập thông tin thiết bị cần chỉnh sửa"
            : "Nhập thông tin thiết bị cần thêm"
        }
      >
        <Panel id="panel-list-site" title="THÔNG TIN THIẾT BỊ">
          <Form layout="vertical" hideRequiredMark>
            <div className="container div-combo9">
              <div className="row">
                <div className="col-md-4">
                  <Form.Item label="Tên thiết bị *">
                    {getFieldDecorator("dmThietBiId", {
                      rules: [
                        {
                          required: true,
                          message: "Chọn tên thiết bị",
                        },
                      ],
                      initialValue: state.dmThietBiId,
                    })(
                      <Select
                        placeholder="Chọn tên thiết bị"
                        onChange={(e) => {
                          setState({
                            dmThietBiId: e,
                          });
                          getDeviceType(e);
                          getModel(e);
                        }}
                        // value={state.dmThietBiId}
                        showSearch
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {state.listNames && state.listNames.length
                          ? state.listNames.map((item, index) => {
                              return (
                                item && (
                                  <Option key={index} value={item.id}>
                                    {item.ten}
                                  </Option>
                                )
                              );
                            })
                          : ""}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item name="name" label="Loại thiết bị *">
                    {getFieldDecorator("dmLoaiThietBiId", {
                      rules: [
                        {
                          required: true,
                          message: "Chọn loại thiết bị",
                        },
                      ],
                      initialValue: state.dmLoaiThietBiId,
                    })(
                      <Select
                        placeholder="Chọn loại thiết bị"
                        onChange={(e) => {
                          setState({
                            dmLoaiThietBiId: e,
                          });
                          getDeviceType(e);
                        }}
                        showSearch
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {state.listDeviceType && state.listDeviceType.length
                          ? state.listDeviceType.map((item, index) => {
                              return (
                                item && (
                                  <Option key={index} value={item.id}>
                                    {item.ten}
                                  </Option>
                                )
                              );
                            })
                          : ""}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item name="name" label="Chủng loại (Model) *">
                    {getFieldDecorator("dmModelId", {
                      rules: [
                        {
                          required: true,
                          message: "Chọn model",
                        },
                      ],
                      initialValue: state.dmModelId,
                    })(
                      <Select
                        placeholder="Chọn model"
                        onChange={(e) => {
                          setState({
                            dmModelId: e,
                          });
                          getDetailModel(e);
                        }}
                        showSearch
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {state.listModel && state.listModel.length
                          ? state.listModel.map((item, index) => {
                              return (
                                item && (
                                  <Option key={index} value={item.id}>
                                    {item.ten}
                                  </Option>
                                )
                              );
                            })
                          : ""}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item name="name" label="Tên thương mại">
                    <Input
                      placeholder="Tên thương mại"
                      onChange={(e) => {
                        setState({
                          ten: e.target.value,
                        });
                      }}
                      value={state.ten}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-4">
                  <Form.Item name="name" label="Số lượng sẵn sàng thương mại *">
                    {getFieldDecorator("soLuong", {
                      rules: [
                        {
                          required: true,
                          message: "Nhập số lượng",
                        },
                      ],
                      initialValue: state.soLuong,
                    })(
                      <Input
                        placeholder="Nhập số lượng"
                        type="number"
                        onChange={(e) => {
                          setState({
                            soLuong: e.target.value,
                          });
                        }}
                        value={state.soLuong}
                        disabled
                      />
                    )}
                  </Form.Item>
                  <Form.Item label="Thời gian áp dụng *">
                    <DatePicker
                      value={state.thoiGianApDung}
                      onChange={(e) => {
                        setState({
                          thoiGianApDung: e._d,
                        });
                      }}
                      style={{ width: "100%" }}
                      disabled={props.id ? true : false}
                      format={"dd/MM/YYYY"}
                      placeholder="Nhập ngày dự kiến nhận hàng"
                      getPopupContainer={(trigger) => trigger.parentNode}
                    />
                  </Form.Item>
                  <Form.Item label="Đơn vị tính *">
                    {getFieldDecorator("dmDonViTinhId", {
                      rules: [
                        {
                          required: true,
                          message: "Vui lòng nhập đơn vị tính",
                        },
                      ],
                      initialValue: state.dmDonViTinhId,
                    })(
                      <Select
                        placeholder="Chọn đơn vị tính"
                        onChange={(e) => {
                          setState({
                            dmDonViTinhId: e,
                          });
                        }}
                        // value={state.dmDonViTinhId}
                        showSearch
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {state.listUnits && state.listUnits.length
                          ? state.listUnits.map((item, index) => {
                              return (
                                item && (
                                  <Option key={index} value={item.id}>
                                    {item.ten}
                                  </Option>
                                )
                              );
                            })
                          : ""}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item
                    name="description"
                    label="Ghi chú"
                    rules={[
                      {
                        required: true,
                        message: "Nhập ghi chú",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={5.5}
                      placeholder="Nhập ghi chú"
                      onChange={(e) => {
                        setState({
                          ghiChu: e.target.value,
                        });
                      }}
                      value={state.ghiChu}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-4">
                  <Form.Item label="Hãng sản xuất">
                    <Select
                      placeholder="Chọn hãng sản xuất"
                      onChange={(e) => {
                        setState({
                          dmHangSanXuatId: e,
                        });
                      }}
                      value={state.dmHangSanXuatId}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listManufacturers1 &&
                      state.listManufacturers1.length
                        ? state.listManufacturers1.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Nước sản xuất">
                    <Select
                      placeholder="Nước sản xuất"
                      onChange={(e) => {
                        setState({
                          nuocSanXuatId: e,
                        });
                      }}
                      value={state.nuocSanXuatId}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listCountry1 && state.listCountry1.length
                        ? state.listCountry1.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Hãng chủ sở hữu">
                    <Select
                      placeholder="Chọn hãng chủ sở hữu"
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
                    >
                      {state.listManufacturers2 &&
                      state.listManufacturers2.length
                        ? state.listManufacturers2.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Nước chủ sở hữu">
                    <Select
                      placeholder="Nước chủ sở hữu"
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
                    >
                      {state.listCountry2 && state.listCountry2.length
                        ? state.listCountry2.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Năm sản xuất">
                    <Select
                      placeholder="Chọn năm sản xuất"
                      value={state.namSanXuat}
                    >
                      <Option key={index} value={state.namSanXuat}>
                        {state.namSanXuat}
                      </Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12" style={{ marginBottom: 10 }}>
                  <Checkbox
                    checked={state.isTBPhuTro}
                    onChange={() => {
                      setState({ isTBPhuTro: !state.isTBPhuTro });
                    }}
                  >
                    Nhập thiết bị phụ trợ
                  </Checkbox>
                </div>
              </div>
            </div>
            {state.isTBPhuTro ? (
              <div>
                <Table
                  scroll={{ x: 800, y: 500 }}
                  style={{ marginLeft: -10, marginRight: -10 }}
                  className="custom"
                  columns={[
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Tên thiết bị *</div>
                        </div>
                      ),
                      width: 200,
                      dataIndex: "col1",
                      key: "col1",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Loại thiết bị *</div>
                        </div>
                      ),
                      width: 200,
                      dataIndex: "col2",
                      key: "col2",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Model *</div>
                        </div>
                      ),
                      width: 200,
                      dataIndex: "col3",
                      key: "col3",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Đơn vị tính *</div>
                        </div>
                      ),
                      width: 150,
                      dataIndex: "col4",
                      key: "col4",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Hãng sản xuất</div>
                        </div>
                      ),
                      width: 150,
                      dataIndex: "col5",
                      key: "col5",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Nước sản xuất</div>
                        </div>
                      ),
                      width: 150,
                      dataIndex: "col6",
                      key: "col6",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Năm sản xuất</div>
                        </div>
                      ),
                      width: 150,
                      dataIndex: "col7",
                      key: "col7",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Tiện ích</div>
                        </div>
                      ),
                      key: "operation",
                      width: 100,
                      fixed: "right",
                      render: (item) => {
                        return (
                          <div className="col-action">
                            <Tooltip placement="topLeft" title={"Xóa"}>
                              <div>
                                <button
                                  onClick={() => onDeleteItem(item)}
                                  className="btn btn-info btn-icon waves-effect waves-themed"
                                >
                                  <i className="fal fa-trash-alt"></i>
                                </button>
                              </div>
                            </Tooltip>
                            <Tooltip placement="topLeft" title={"Sửa"}>
                              <div>
                                <button
                                  onClick={() => editItemPT(item)}
                                  className="btn btn-info btn-icon waves-effect waves-themed"
                                >
                                  <i className="fal fa-edit"></i>
                                </button>
                              </div>
                            </Tooltip>
                          </div>
                        );
                      },
                      dataIndex: "col8",
                      key: "col8",
                    },
                  ]}
                  dataSource={state.dataPT}
                ></Table>
                <div className="footer style-input10">
                  <Form.Item className="sty-selcect">
                    <Select
                      value={state.dmThietBiPTId}
                      placeholder="Chọn tên thiết bị"
                      onChange={(e, i) => {
                        setState({
                          dmThietBiPTId: e,
                          dmThietBiPTName: i.props.children,
                        });
                        getDeviceType2(e);
                        getModel2(e);
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listNames && state.listNames.length
                        ? state.listNames.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item className="sty-selcect">
                    <Select
                      value={state.dmLoaiThietBiPTId}
                      placeholder="Chọn loại thiết bị"
                      onChange={(e, i) => {
                        setState({
                          dmLoaiThietBiPTId: e,
                          dmLoaiThietBiPTName: i.props.children,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listDeviceType2 && state.listDeviceType2.length
                        ? state.listDeviceType2.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  {state.isEditPT ? (
                    ""
                  ) : (
                    <Form.Item name="name">
                      <Input
                        className="sty-input9"
                        placeholder="Nhập số lượng"
                        onChange={(e) => {
                          setState({
                            soLuongPT: e.target.value,
                          });
                        }}
                        value={state.soLuongPT}
                        disabled
                      />
                    </Form.Item>
                  )}
                  <Form.Item className="sty-selcect">
                    <Select
                      value={state.dmModelPTId}
                      placeholder="Chọn Model"
                      onChange={(e, i) => {
                        setState({
                          dmModelPTId: e,
                          dmModelPTName: i.props.children,
                        });
                        getDetailModel2(e);
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listModel2 && state.listModel2.length
                        ? state.listModel2.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item className="sty-selcect">
                    <Select
                      placeholder="Chọn đơn vị tính"
                      value={state.dmDonViTinhPTId}
                      onChange={(e, i) => {
                        setState({
                          dmDonViTinhPTId: e,
                          dmDonViTinhPTName: i.props.children,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listUnits && state.listUnits.length
                        ? state.listUnits.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item className="sty-selcect">
                    <Select
                      value={state.dmHangSanXuatPTId}
                      placeholder="Chọn hãng sản xuất"
                      onChange={(e, i) => {
                        setState({
                          dmHangSanXuatPTId: e,
                          dmHangSanXuatPTName: i.props.children,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listManufacturers3 &&
                      state.listManufacturers3.length
                        ? state.listManufacturers3.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item className="sty-selcect">
                    <Select
                      value={state.nuocSanXuatPTId}
                      placeholder="Chọn Nước sản xuất"
                      onChange={(e, i) => {
                        setState({
                          nuocSanXuatPTId: e,
                          nuocSanXuatPTName: i.props.children,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listCountry3 && state.listCountry3.length
                        ? state.listCountry3.map((item, index) => {
                            return (
                              item && (
                                <Option key={index} value={item.id}>
                                  {item.ten}
                                </Option>
                              )
                            );
                          })
                        : ""}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Select
                      placeholder="Chọn năm sản xuất"
                      value={state.namSanXuatPT}
                    >
                      <Option key={index} value={state.namSanXuatPT}>
                        {state.namSanXuatPT}
                      </Option>
                    </Select>
                  </Form.Item>
                  <Button type="primary" onClick={(e) => onSubmitPT(e)}>
                    <i
                      className="fal fa-plus-circle"
                      style={{ color: "#fff" }}
                    ></i>
                  </Button>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className="style-button pull-right"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                type="primary"
                style={{ marginRight: 8 }}
                onClick={(e) => onSubmit(e)}
              >
                {deviceId ? "Cập nhật" : " Thêm mới"}
              </Button>
              <Button
                type="danger"
                htmlType="submit"
                onClick={(e) => onReset(e)}
              >
                Reset
              </Button>
            </div>
          </Form>
        </Panel>
      </AdminPage>
    </div>
  );
}
// export default Form.create()(index);

function mapStateToProps(state) {
  return {
    auth: state.auth.auth,
  };
}

export default connect(mapStateToProps)(Form.create()(index));
