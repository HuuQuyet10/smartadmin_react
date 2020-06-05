import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import "./style.scss";
import { Button, Tooltip, Form, Input, Select, Checkbox, Modal } from "antd";
import nameDeviceProvider from "@data-access/commercial-name-provider";
import unitProvider from "@data-access/unit-provider";
import manufacturerProvider from "@data-access/manufacturer-provider";
import deviceProvider from "@data-access/device-provider";
import statusProvider from "@data-access/status-provider";
import modelProvider from "@data-access/model-provider";
import resourceProvider from "@data-access/resource-provider";
import snackbar from "@utils/snackbar-utils";
import images from "@src/resources/images";
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
    listSupplier1: [],
    listSupplier2: [],
    listCountry1: [],
    listCountry2: [],
    listCountry3: [],
    listStatus: [],
    listDeviceType: [],
    listModel: [],
    listModel2: [],
    listDeviceType2: [],
    listResource: [],

    // dmThietBiId: undefined,
    dmCoSoYTeId: undefined,
    ten: "",
    soLuong: 1,
    serial: "",
    // dmDonViTinhId: undefined,
    dmHangSanXuatId: undefined,
    // dmDonViCungCapId: undefined,
    namSuDung: undefined,
    nuocSanXuatId: undefined,
    namSanXuat: undefined,
    // namMua: undefined,
    giaNhap: "",
    // dmTrangThaiId: undefined,
    donViSuDung: "",
    ghiChu: "",
    isTBPhuTro: false,
    sanSangDieuChuyen: false,

    dmThietBiPTId: undefined,
    dmThietBiPTName: "",
    dmLoaiThietBiPTId: undefined,
    dmLoaiThietBiPTName: "",
    dmModelPTId: undefined,
    dmModelPTName: "",
    soLuongPT: 1,
    serialPT: "",
    dmDonViTinhPTId: undefined,
    dmDonViTinhPTName: "",
    nhaCungCapPTId: undefined,
    nhaCungCapPTName: "",
    nuocSanXuatPTId: undefined,
    nuocSanXuatPTName: "",
    namMuaPT: undefined,
    trangThaiPT: undefined,
    trangThaiPTName: "",
    listTBPT: [],
    dataPT: [],
    isEditPT: false,
    keyEdit: undefined,
    isCheckValidate: false,
  });

  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };
  const { getFieldDecorator } = props.form;

  useEffect(() => {
    onSearchStatus();
    onSearchName();
    onSearchUnit();
    onSearchManufacturer();
    onSearchResource();
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
                    serialPT: item.serial,
                    nhaCungCapPTId: item.dmModel && item.dmModel.nhaCungCapId,
                    nhaCungCapPTName:
                      item.dmModel &&
                      item.dmModel.nhaCungCap &&
                      item.dmModel.nhaCungCap.ten,
                    nuocSanXuatPTId: item.dmModel && item.dmModel.nuocSanXuatId,
                    nuocSanXuatPTName:
                      item.dmModel &&
                      item.dmModel.nuocSanXuat &&
                      item.dmModel.nuocSanXuat.ten,
                    namMuaPT: item.namMua,
                    trangThaiPT: item.dmTrangThaiId,
                    trangThaiPTName: item.dmTrangThai && item.dmTrangThai.ten,
                    soLuongPT: 1,
                  };
                })
              : [];
          setState({
            ma: data.ma,
            dmThietBiId: data.dmThietBiId,
            dmLoaiThietBiId: data.dmLoaiThietBiId,
            dmModelId: data.dmModelId,
            dmNguonVonId: data.dmNguonVonId,
            ten: data.ten,
            soLuong: data.soLuong,
            serial: data.serial,
            dmDonViTinhId: data.dmDonViTinhId,
            donViSuDung: data.donViSuDung,
            namSuDung: data.namSuDung,
            namMua: data.namMua,
            giaNhap: data.giaNhap,
            dmTrangThaiId: data.dmTrangThaiId,
            sanSangDieuChuyen: data.sanSangDieuChuyen,
            ghiChu: data.ghiChu,
            isTBPhuTro:
              data.thietBiPhuTro && data.thietBiPhuTro.length ? true : false,
            listTBPT: check,
            dataPT: check.map((item, index) => {
              return {
                key: index,
                col1: index,
                col2: item.dmThietBiPTName,
                col3: item.serialPT,
                col4: item.dmLoaiThietBiPTName,
                col5: item.nuocSanXuatPTName,
                col6: item.namMuaPT,
                col7: item.trangThaiPTName,
                col8: index,
                col9: item.dmDonViTinhPTName,
                col10: item.nhaCungCapPTName,
                col11: item.dmModelPTName,
              };
            }),
          });
          getDetailModel(data.dmModelId);
          getModel(data.dmThietBiId);
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
        } else {
          setState({
            listModel: [],
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
        } else {
          setState({
            listModel2: [],
          });
        }
      })
      .catch((e) => {});
  };
  const onResetModel = (item) => {
    setState({
      dmHangSanXuatId: undefined,
      listManufacturers1: [],
      hangSoHuuId: undefined,
      listManufacturers2: [],
      namSanXuat: undefined,
      nuocSanXuatId: undefined,
      listCountry1: [],
      nuocSoHuuId: undefined,
      listCountry2: [],
      dmDonViCungCapId: undefined,
      listSupplier1: [],
      dmLoaiThietBiId: undefined,
      listDeviceType: [],
    });
    if (item) {
      getDetailModel(item);
    }
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
            listSupplier1: new Array(s.data.nhaCungCap),
            dmLoaiThietBiId: s.data.dmLoaiThietBiId,
            listDeviceType: new Array(s.data.dmLoaiThietBi),
          });
        }
      })
      .catch((e) => {});
  };
  const onResetModelPT = (item) => {
    setState({
      nuocSanXuatPTId: undefined,
      nuocSanXuatPTName: undefined,
      listCountry3: [],
      nhaCungCapPTId: undefined,
      nhaCungCapPTName: undefined,
      listSupplier2: [],
      dmLoaiThietBiPTId: undefined,
      dmLoaiThietBiPTName: undefined,
      listDeviceType2: [],
    });
    if (item) {
      getDetailModel2(item);
    }
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
            nhaCungCapPTId: s.data.nhaCungCapId,
            nhaCungCapPTName: s.data.nhaCungCap && s.data.nhaCungCap.ten,
            listSupplier2: new Array(s.data.nhaCungCap),
          });
          getDeviceType(s.data.dmLoaiThietBi);
        }
      })
      .catch((e) => {});
  };
  const getDeviceType = (data) => {
    if (data && data.thietBiPhuTro) {
      setState({
        dmLoaiThietBiPTId: data.id,
        dmLoaiThietBiPTName: data.ten,
        listDeviceType2: new Array(data),
      });
    }
  };
  const onSearchStatus = () => {
    let params = {
      page: 1,
      size: 9999,
    };
    statusProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            listStatus: s.data,
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
        if (s && s.code === 0) {
          setState({
            listNames: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const onSearchResource = () => {
    let params = {
      page: 1,
      size: 999999,
    };
    resourceProvider
      .search(params)
      .then((s) => {
        if (s && s.code === 0) {
          setState({
            listResource: s.data,
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
        if (s && s.code === 0) {
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
        if (s && s.code === 0) {
          setState({
            listManufacturers1: s.data,
            listManufacturers2: s.data,
          });
        }
      })
      .catch((e) => {});
  };
  const onCheckDate = () => {
    let x = 1990;
    let check = [];
    do {
      check.push(x);
      x = x + 1;
    } while (x <= new Date().getFullYear());
    let c = check.map((item, index) => {
      return (
        <Option key={index} value={item}>
          {item.toString()}
        </Option>
      );
    });
    return c;
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
  const onSubmit = (e) => {
    e.preventDefault();
    let {
      dmThietBiId,
      dmLoaiThietBiId,
      dmModelId,
      dmNguonVonId,
      ten,
      soLuong,
      serial,
      dmDonViTinhId,
      namSuDung,
      namMua,
      giaNhap,
      dmTrangThaiId,
      ghiChu,
      donViSuDung,
      listTBPT,
      sanSangDieuChuyen,
    } = state;
    let TBPhuTro =
      listTBPT && listTBPT.length
        ? listTBPT.map((item) => {
            return {
              dmThietBiId: item.dmThietBiPTId,
              dmLoaiThietBiId: item.dmLoaiThietBiPTId,
              dmModelId: item.dmModelPTId,
              serial: item.serialPT,
              dmDonViTinhId: item.dmDonViTinhPTId,
              namMua: item.namMuaPT,
              dmTrangThaiId: item.trangThaiPT,
            };
          })
        : [];

    let param = {
      ma: state.ma,
      dmThietBiId,
      dmLoaiThietBiId,
      dmModelId,
      dmNguonVonId,
      ten,
      soLuong,
      serial,
      dmDonViTinhId,
      namSuDung,
      namMua,
      giaNhap,
      dmTrangThaiId,
      ghiChu,
      donViSuDung,
      thietBiPhuTro: TBPhuTro,
      sanSangDieuChuyen: sanSangDieuChuyen ? 1 : 0,
    };
    if (!dmModelId && !dmLoaiThietBiId) {
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
        handleCreate(param);
      }
    });
  };
  const handleCreate = (param) => {
    if (deviceId) {
      deviceProvider
        .createOrEdit(deviceId, param)
        .then((s) => {
          if (s && s.code === 0) {
            snackbar.show("Cập nhật thiêt bị", "success");
            props.history.push("/admin/device");
          } else if (s.code === 1000) {
            snackbar.show("Thiếu thông tin", "danger");
          }
        })
        .catch((x) => {});
    } else {
      confirm({
        title: "Xác nhận",
        content: `Bạn có muốn thêm ${state.soLuong} thiết bị ${state.ten} vào hệ thống không? `,
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
        props.history.push("/admin/device");
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
      serialPT,
      nhaCungCapPTId,
      nhaCungCapPTName,
      dmDonViTinhPTId,
      dmDonViTinhPTName,
      nuocSanXuatPTId,
      nuocSanXuatPTName,
      namMuaPT,
      trangThaiPT,
      trangThaiPTName,
      listTBPT,
      isEditPT,
      keyEdit,
    } = state;
    if (!dmThietBiPTId) {
      snackbar.show("Vui lòng nhập tên thiết bị", "danger");
      return;
    } else if (!soLuongPT) {
      snackbar.show("Vui lòng nhập số lượng", "danger");
      return;
    } else if (!namMuaPT) {
      snackbar.show("Vui lòng chọn năm mua sắm", "danger");
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
      serialPT,
      nhaCungCapPTId,
      nhaCungCapPTName,
      dmDonViTinhPTId,
      dmDonViTinhPTName,
      nuocSanXuatPTId,
      nuocSanXuatPTName,
      namMuaPT,
      trangThaiPT,
      trangThaiPTName,
    };
    if (isEditPT) {
      let checkValue = listTBPT.filter((item, index) => keyEdit !== index);
      checkValue.push(param);
      setState({
        listTBPT: checkValue,
        dataPT: checkValue.map((item, index) => {
          return {
            key: index,
            col1: index,
            col2: item.dmThietBiPTName,
            col3: item.serialPT,
            col4: item.dmLoaiThietBiPTName,
            col5: item.nuocSanXuatPTName,
            col6: item.namMuaPT,
            col7: item.trangThaiPTName,
            col8: index,
            col9: item.dmDonViTinhPTName,
            col10: item.nhaCungCapPTName,
            col11: item.dmModelPTName,
          };
        }),
        dmThietBiPTId: undefined,
        dmThietBiPTName: "",
        dmLoaiThietBiPTId: undefined,
        dmLoaiThietBiPTName: "",
        dmModelPTId: undefined,
        dmModelPTName: "",
        soLuongPT: 1,
        serialPT: "",
        nhaCungCapPTId: undefined,
        nhaCungCapPTName: "",
        dmDonViTinhPTId: undefined,
        dmDonViTinhPTName: "",
        nuocSanXuatPTId: undefined,
        nuocSanXuatPTName: "",
        namMuaPT: undefined,
        trangThaiPT: undefined,
        trangThaiPTName: "",
        isEditPT: false,
        keyEdit: undefined,
      });
    } else {
      setState({
        listTBPT: state.listTBPT.concat(param),
        dataPT: state.listTBPT.concat(param).map((item, index) => {
          return {
            key: index,
            col1: index,
            col2: item.dmThietBiPTName,
            col3: item.serialPT,
            col4: item.dmLoaiThietBiPTName,
            col5: item.nuocSanXuatPTName,
            col6: item.namMuaPT,
            col7: item.trangThaiPTName,
            col8: index,
            col9: item.dmDonViTinhPTName,
            col10: item.nhaCungCapPTName,
            col11: item.dmModelPTName,
          };
        }),
        dmThietBiPTId: undefined,
        dmThietBiPTName: "",
        dmLoaiThietBiPTId: undefined,
        dmLoaiThietBiPTName: "",
        dmModelPTId: undefined,
        dmModelPTName: "",
        soLuongPT: 1,
        serialPT: "",
        nhaCungCapPTId: undefined,
        nhaCungCapPTName: "",
        dmDonViTinhPTId: undefined,
        dmDonViTinhPTName: "",
        nuocSanXuatPTId: undefined,
        nuocSanXuatPTName: "",
        namMuaPT: undefined,
        trangThaiPT: undefined,
        trangThaiPTName: "",
        isEditPT: false,
        keyEdit: undefined,
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
              col1: index,
              col2: item.dmThietBiPTName,
              col3: item.serialPT,
              col4: item.dmLoaiThietBiPTName,
              col5: item.nuocSanXuatPTName,
              col6: item.namMuaPT,
              col7: item.trangThaiPTName,
              col8: index,
              col9: item.dmDonViTinhPTName,
              col10: item.nhaCungCapPTName,
              col11: item.dmModelPTName,
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
        getModel2(item.dmThietBiPTId);
        getDetailModel2(item.dmModelPTId);
        setState({
          dmThietBiPTId: item.dmThietBiPTId,
          dmThietBiPTName: item.dmThietBiPTName,
          dmLoaiThietBiPTId: item.dmLoaiThietBiPTId,
          dmLoaiThietBiPTName: item.dmLoaiThietBiPTName,
          dmModelPTId: item.dmModelPTId,
          dmModelPTName: item.dmModelPTName,
          soLuongPT: item.soLuongPT,
          serialPT: item.serialPT,
          nhaCungCapPTId: item.nhaCungCapPTId,
          nhaCungCapPTName: item.nhaCungCapPTName,
          dmDonViTinhPTId: item.dmDonViTinhPTId,
          dmDonViTinhPTName: item.dmDonViTinhPTName,
          nuocSanXuatPTId: item.nuocSanXuatPTId,
          nuocSanXuatPTName: item.nuocSanXuatPTName,
          namMuaPT: item.namMuaPT,
          trangThaiPT: item.trangThaiPT,
          trangThaiPTName: item.trangThaiPTName,
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
        <Panel
          id="panel-list-site"
          title="THÔNG TIN THIẾT BỊ"
          icon={images.icon.ic_device}
        >
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
                            dmModelId: undefined,
                          });
                          onResetModel();
                          getModel(e);
                        }}
                        // value={state.dmThietBiId}
                        showSearch
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                        disabled={deviceId ? true : false}
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
                    <Select
                      placeholder="Chọn loại thiết bị"
                      onChange={(e) => {
                        setState({
                          dmLoaiThietBiId: e,
                        });
                      }}
                      value={state.dmLoaiThietBiId}
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
                    {state.isCheckValidate && !state.dmLoaiThietBiId ? (
                      <span style={{ color: "red" }}>
                        Vui lòng chọn loại thiết bị
                      </span>
                    ) : (
                      ""
                    )}
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
                  {deviceId ? (
                    ""
                  ) : (
                    <Form.Item name="name" label="Số lượng *">
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
                          autoComplete="off"
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
                  )}
                  <Form.Item name="name" label="Đơn vị sử dụng">
                    <Input
                      autoComplete="off"
                      placeholder="Nhập đơn vị sử dụng"
                      onChange={(e) => {
                        setState({
                          donViSuDung: e.target.value,
                        });
                      }}
                      value={state.donViSuDung}
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
                  <Form.Item name="name" label="Serial">
                    {/* <Select
                      mode="tags"
                      style={{ width: "100%" }}
                      placeholder="Nhập serial"
                      onChange={e => {
                        setState({
                          serial: e
                        });
                      }}
                    // value={state.serial}
                    >
                    </Select> */}
                    <Input
                      autoComplete="off"
                      placeholder="Nhập serial"
                      onChange={(e) => {
                        setState({
                          serial: e.target.value,
                        });
                      }}
                      value={state.serial}
                    />
                  </Form.Item>
                </div>
                <div className="col-md-4">
                  <Form.Item name="name" label="Model *">
                    <Select
                      placeholder="Chọn model"
                      onChange={(e) => {
                        setState({
                          dmModelId: e,
                        });
                        onResetModel(e);
                      }}
                      value={state.dmModelId}
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
                    {state.isCheckValidate && !state.dmModelId ? (
                      <span style={{ color: "red" }}>Vui lòng chọn model</span>
                    ) : (
                      ""
                    )}
                  </Form.Item>
                  <Form.Item label="Nguồn vốn">
                    <Select
                      placeholder="Chọn nguồn vốn"
                      onChange={(e) => {
                        setState({
                          dmNguonVonId: e,
                        });
                      }}
                      value={state.dmNguonVonId}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listResource && state.listResource.length
                        ? state.listResource.map((item, index) => {
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
                  <Form.Item label="Năm sử dụng">
                    <Select
                      placeholder="Chọn năm sử dụng"
                      onChange={(e) => {
                        setState({
                          namSuDung: e,
                        });
                      }}
                      value={state.namSuDung}
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

                  <Form.Item
                    name="name"
                    label="Nguyên giá"
                    rules={[
                      { required: true, message: "Please enter user name" },
                    ]}
                  >
                    <Input
                      autoComplete="off"
                      placeholder="Nhập nguyên giá"
                      type="number"
                      onChange={(e) => {
                        setState({
                          giaNhap: e.target.value,
                        });
                      }}
                      value={state.giaNhap}
                    />
                    <span
                      style={{
                        position: "absolute",
                        right: "5px",
                        top: "-2px",
                      }}
                    >
                      VND
                    </span>
                  </Form.Item>
                  <Form.Item label="Nhà thầu / Nhà cung cấp">
                    <Select
                      placeholder="Nhà thầu / nhà cung cấp"
                      onChange={(e) => {
                        setState({
                          dmDonViCungCapId: e,
                        });
                      }}
                      showSearch
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {state.listSupplier1 && state.listSupplier1.length
                        ? state.listSupplier1.map((item, index) => {
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
                </div>
                <div className="col-md-4">
                  <Form.Item name="name" label="Tên tài sản">
                    <Input
                      autoComplete="off"
                      placeholder="Tên tài sản"
                      onChange={(e) => {
                        setState({
                          ten: e.target.value,
                        });
                      }}
                      value={state.ten}
                    />
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
                  <Form.Item label="Năm mua sắm *">
                    {getFieldDecorator("namMua", {
                      rules: [
                        {
                          required: true,
                          message: "Vui lòng chọn năm mua sắm",
                        },
                      ],
                      initialValue: state.namMua,
                    })(
                      <Select
                        placeholder="Chọn năm mua sắm"
                        onChange={(e) => {
                          setState({
                            namMua: e,
                          });
                        }}
                        // value={state.namMua}
                        showSearch
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                        disabled={deviceId ? true : false}
                      >
                        {onCheckUsedDate()}
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item label="Trạng thái thiết bị *">
                    {getFieldDecorator("dmTrangThaiId", {
                      rules: [
                        {
                          required: true,
                          message: "Vui lòng chọn trạng thái",
                        },
                      ],
                      initialValue: state.dmTrangThaiId,
                    })(
                      <Select
                        placeholder="Chọn trạng thái thiết bị"
                        onChange={(e) => {
                          setState({
                            dmTrangThaiId: e,
                          });
                        }}
                        // value={state.dmTrangThaiId}
                        showSearch
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {state.listStatus && state.listStatus.length
                          ? state.listStatus.map((item, index) => {
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
                  {/* <Checkbox
                    checked={state.sanSangDieuChuyen}
                    onChange={() => {
                      setState({ sanSangDieuChuyen: !state.sanSangDieuChuyen });
                    }}
                    style={{ marginBottom: 15 }}
                  >
                    Sẵn sàng điều chuyển
                  </Checkbox> */}
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
                  className="custom custom-table-tbpt"
                  columns={[
                    // {
                    //   title: (
                    //     <div className="custome-header">
                    //       <div className="title-box">Mã thiết bị</div>
                    //     </div>
                    //   ),
                    //   width: 200,
                    //   dataIndex: "col1",
                    //   key: "col1",
                    // },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Tên thiết bị *</div>
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
                      dataIndex: "col11",
                      key: "col11",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Loại thiết bị *</div>
                        </div>
                      ),
                      width: 200,
                      dataIndex: "col4",
                      key: "col4",
                    },

                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Serial</div>
                        </div>
                      ),
                      width: 100,
                      dataIndex: "col3",
                      key: "col3",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">
                            Nhà thầu / Nhà cung cấp{" "}
                          </div>
                        </div>
                      ),
                      width: 150,
                      dataIndex: "col10",
                      key: "col10",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Đơn vị tính *</div>
                        </div>
                      ),
                      width: 150,
                      dataIndex: "col9",
                      key: "col9",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Nước sản xuất</div>
                        </div>
                      ),
                      width: 150,
                      dataIndex: "col5",
                      key: "col5",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Năm mua sắm *</div>
                        </div>
                      ),
                      width: 200,
                      dataIndex: "col6",
                      key: "col6",
                    },
                    {
                      title: (
                        <div className="custome-header">
                          <div className="title-box">Trạng thái thiết bị *</div>
                        </div>
                      ),
                      width: 200,
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
                      width: 112,
                      fixed: "right",
                      render: (item) => {
                        return (
                          <div className="col-action">
                            <Tooltip placement="topLeft" title={"Sửa"}>
                              <div>
                                <button
                                  onClick={() => editItemPT(item)}
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
                      dataIndex: "col8",
                      key: "col8",
                    },
                  ]}
                  dataSource={state.dataPT}
                  footer={() => {
                    return (
                      <div
                        className="ant-table-fixed ant-add-footer "
                        // style={{ overflow: "scroll" }}
                      >
                        <table>
                          <colgroup>
                            <col style={{ width: 200, minWidth: 200 }} />
                            <col style={{ width: 200, minWidth: 200 }} />
                            <col style={{ width: 200, minWidth: 200 }} />
                            <col style={{ width: 100, minWidth: 100 }} />
                            <col style={{ width: 150, minWidth: 150 }} />
                            <col style={{ width: 150, minWidth: 150 }} />
                            <col style={{ width: 150, minWidth: 150 }} />
                            <col style={{ width: 200, minWidth: 200 }} />
                            <col style={{ width: 200, minWidth: 200 }} />
                            <col style={{ width: 120, minWidth: 120 }} />
                          </colgroup>
                          <tbody className="ant-table-tbody">
                            <tr className="ant-table-row">
                              <td className="ant-table-row-cell-break-word">
                                <Form.Item className="sty-selcect">
                                  <Select
                                    value={state.dmThietBiPTId}
                                    placeholder="Chọn tên thiết bị"
                                    onChange={(e, i) => {
                                      setState({
                                        dmThietBiPTId: e,
                                        dmThietBiPTName: i.props.children,
                                        dmModelPTId: undefined,
                                        dmModelPTName: undefined,
                                      });
                                      getModel2(e);
                                      onResetModelPT();
                                    }}
                                    showSearch
                                    filterOption={(input, option) =>
                                      option.props.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                    }
                                    disabled={
                                      deviceId && state.isEditPT ? true : false
                                    }
                                  >
                                    {state.listNames && state.listNames.length
                                      ? state.listNames.map((item, index) => {
                                          return (
                                            item && (
                                              <Option
                                                key={index}
                                                value={item.id}
                                              >
                                                {item.ten}
                                              </Option>
                                            )
                                          );
                                        })
                                      : ""}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
                                <Form.Item className="sty-selcect">
                                  <Select
                                    value={state.dmModelPTId}
                                    placeholder="Chọn Model"
                                    onChange={(e, i) => {
                                      setState({
                                        dmModelPTId: e,
                                        dmModelPTName: i.props.children,
                                      });
                                      onResetModelPT(e);
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
                                              <Option
                                                key={index}
                                                value={item.id}
                                              >
                                                {item.ten}
                                              </Option>
                                            )
                                          );
                                        })
                                      : ""}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
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
                                    {state.listDeviceType2 &&
                                    state.listDeviceType2.length
                                      ? state.listDeviceType2.map(
                                          (item, index) => {
                                            return (
                                              item && (
                                                <Option
                                                  key={index}
                                                  value={item.id}
                                                >
                                                  {item.ten}
                                                </Option>
                                              )
                                            );
                                          }
                                        )
                                      : ""}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
                                <Form.Item name="name" className="sty-selcect">
                                  <Input
                                    autoComplete="off"
                                    className="sty-input9"
                                    placeholder="Nhập số serial ngăn cách bởi dấu phím enter"
                                    onChange={(e) => {
                                      setState({
                                        serialPT: e.target.value,
                                      });
                                    }}
                                    value={state.serialPT}
                                  />
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
                                <Form.Item className="sty-selcect">
                                  <Select
                                    placeholder="Chọn nhà thầu / nhà cung cấp"
                                    value={state.nhaCungCapPTId}
                                    onChange={(e, i) => {
                                      setState({
                                        nhaCungCapPTId: e,
                                        nhaCungCapPTName: i.props.children,
                                      });
                                    }}
                                    showSearch
                                    filterOption={(input, option) =>
                                      option.props.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                    }
                                  >
                                    {state.listSupplier2 &&
                                    state.listSupplier2.length
                                      ? state.listSupplier2.map(
                                          (item, index) => {
                                            return (
                                              item && (
                                                <Option
                                                  key={index}
                                                  value={item.id}
                                                >
                                                  {item.ten}
                                                </Option>
                                              )
                                            );
                                          }
                                        )
                                      : ""}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
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
                                              <Option
                                                key={index}
                                                value={item.id}
                                              >
                                                {item.ten}
                                              </Option>
                                            )
                                          );
                                        })
                                      : ""}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
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
                                    {state.listCountry3 &&
                                    state.listCountry3.length
                                      ? state.listCountry3.map(
                                          (item, index) => {
                                            return (
                                              item && (
                                                <Option
                                                  key={index}
                                                  value={item.id}
                                                >
                                                  {item.ten}
                                                </Option>
                                              )
                                            );
                                          }
                                        )
                                      : ""}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
                                <Form.Item className="sty-selcect">
                                  <Select
                                    value={state.namMuaPT}
                                    placeholder="Chọn năm mua sắm"
                                    onChange={(e) => {
                                      setState({
                                        namMuaPT: e,
                                      });
                                    }}
                                    showSearch
                                    filterOption={(input, option) =>
                                      option.props.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                    }
                                    disabled={
                                      deviceId && state.isEditPT ? true : false
                                    }
                                  >
                                    {onCheckDate()}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td className="ant-table-row-cell-break-word">
                                <Form.Item className="sty-selcect">
                                  <Select
                                    value={state.trangThaiPT}
                                    placeholder="Chọn trạng thái thiết bị"
                                    onChange={(e, i) => {
                                      setState({
                                        trangThaiPT: e,
                                        trangThaiPTName: i.props.children,
                                      });
                                    }}
                                    showSearch
                                    filterOption={(input, option) =>
                                      option.props.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                    }
                                  >
                                    {state.listStatus && state.listStatus.length
                                      ? state.listStatus.map((item, index) => {
                                          return (
                                            item && (
                                              <Option
                                                key={index}
                                                value={item.id}
                                              >
                                                {item.ten}
                                              </Option>
                                            )
                                          );
                                        })
                                      : ""}
                                  </Select>
                                </Form.Item>
                              </td>
                              <td
                                className="ant-table-row-cell-break-word ant-table-footer-fixed"
                                style={{ textAlign: "center" }}
                              >
                                <Button
                                  className="btn-edit"
                                  onClick={(e) => onSubmitPT(e)}
                                >
                                  <i
                                    className="fal fa-plus-circle"
                                    style={{ color: "#fff" }}
                                  ></i>
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <style>{`.ant-table-footer{padding: 0px;}`}</style>
                      </div>
                    );
                  }}
                ></Table>
              </div>
            ) : (
              ""
            )}

            <div
              className="style-button pull-right"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 20,
              }}
            >
              <Button
                className="btn-edit"
                style={{ marginRight: 8 }}
                onClick={(e) => onSubmit(e)}
              >
                {deviceId ? "Cập nhật" : " Thêm mới"}
              </Button>
              <Button className="btn-delete" onClick={(e) => onReset(e)}>
                Reset
              </Button>
            </div>
          </Form>
        </Panel>
      </AdminPage>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth.auth,
  };
}

export default connect(mapStateToProps)(Form.create()(index));
