import React, { useState, useEffect } from "react";
import { AdminPage, Panel } from "@admin/components/admin";
import Table from "@admin/components/common/Table";
import deviceProvider from "@data-access/device-provider";
import ListImage from "@admin/components/device/ListImage";
import ListFile from "@admin/components/device/ListFile";
import snackbar from "@utils/snackbar-utils";
import "./style.scss";
export default function index(props) {
  const [state, _setState] = useState({
    data: [],
  });

  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };

  const closeDetail = () => {
    props.history.push(`/admin/device`);
  };
  useEffect(() => {
    let id = props.match.params.id;
    getDetail(id);
  }, []);
  const getDetail = (id) => {
    deviceProvider
      .getById(id)
      .then((s) => {
        if (s && s.code === 0) {
          let dataIndex =
            s.data && s.data.thietBiPhuTro.length
              ? s.data.thietBiPhuTro.map((item, index) => {
                  return {
                    key: index,
                    col1: index + 1,
                    col2: item.ma,
                    col3: item.dmThietBi && item.dmThietBi.ten,
                    col4: item.serial,
                    col5: item.dmHangSanXuat && item.dmHangSanXuat.ten,
                    col6: item.nuocSanXuat && item.nuocSanXuat.ten,
                    col7: item.namMua,
                    col8: item.dmTrangThai && item.dmTrangThai.ten,
                  };
                })
              : [];
          setState({
            data: s.data,
            thietBiPhuTro: dataIndex,
          });
        }
      })
      .catch((e) => {});
  };
  const { data } = state;
  const onSaveImage = (images) => {
    let check = {
      anh: images || [],
    };
    let param = Object.assign(data, check);

    let id = props.match.params.id;
    deviceProvider
      .createOrEdit(id, param)
      .then((s) => {
        if (s && s.code === 0) {
          snackbar.show("Thêm ảnh thành công", "success");
          setState({
            data: s.data,
          });
        }
      })
      .catch((x) => {});
  };
  const onSaveFile = (files) => {
    let check = {
      taiLieu: files || [],
    };
    let param = Object.assign(data, check);

    let id = props.match.params.id;

    deviceProvider
      .createOrEdit(id, param)
      .then((s) => {
        if (s && s.code === 0) {
          snackbar.show("Thêm file thành công", "success");
          setState({
            data: s.data,
          });
        }
      })
      .catch((x) => {});
  };

  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Chi tiết thiết bị"
      subheader="Thông tin chi tiết thiết bị - Công ty TTB"
    >
      <Panel id="panel-list-site" title="THÔNG TIN THIẾT BI">
        <div className="row">
          <div className="col-sm-4">
            <div className="info-device">
              <h3 className="title">{data.ten}</h3>
              <div className="p-t-8">
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Tên thương mại:
                </strong>
                <label>{data.dmThietBi}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Mã thiết bị:
                </strong>
                <label>{data.ma}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Số lượng:
                </strong>
                <label>{data.serial}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Đơn vị tính:
                </strong>
                <label>{data.model}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Chủng loại (Model):
                </strong>
                <label>{data.loaiCsyt}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Hãng sản xuất:
                </strong>
                <label>{data.dmHangSanXuat && data.dmHangSanXuat.ten}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Nước sản xuất:
                </strong>
                <label>{data.nuocSanXuat && data.nuocSanXuat.ten}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Năm sản xuất:
                </strong>
                <label>{data.giaNhap}</label>
              </div>
              <div style={{ paddingTop: 20 }}>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Trạng thái:
                </strong>
                <label>{data.dmTrangThai && data.dmTrangThai.ten}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Thời gian:
                </strong>
                <label>{data.giaNhap}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  CSYT sử dụng:
                </strong>
                <label>{data.giaNhap}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Địa chỉ CSYT:
                </strong>
                <label>{data.giaNhap}</label>
              </div>
              <div style={{ paddingTop: 20 }}>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Công ty TTB:
                </strong>
                <label>{data.dmDonViCungCap && data.dmDonViCungCap.ten}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Tỉnh/Thành phố:
                </strong>
                <label>{data.namSanXuat}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Quận/Huyện:
                </strong>
                <label>{data.namMua}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Xã/Phường:
                </strong>
                <label>{data.namSuDung}</label>
              </div>
              <div>
                <strong className="width40" style={{ fontWeight: 600 }}>
                  {" "}
                  Ghi chú:
                </strong>
                <label>{data.ghiChu}</label>
              </div>
            </div>
            <div className="p-t-8">
              <button
                className="btn btn-info waves-effect waves-themed"
                onClick={() => {
                  closeDetail();
                }}
              >
                Trở về
              </button>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="panel-content">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab_borders_icons-1"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fal fa-home mr-1"></i> Thiết bị đính kèm
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tab_borders_icons-2"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fal fa-file-image"></i> HÌnh Ảnh
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab_borders_icons-3"
                    role="tab"
                  >
                    <i className="fal fa-newspaper"></i> Tài liệu
                  </a>
                </li>
              </ul>
              <div className="tab-content border border-top-0 p-3">
                <div
                  className="tab-pane fade"
                  id="tab_borders_icons-1"
                  role="tabpanel"
                >
                  <Table
                    scroll={{ x: 200, y: 500 }}
                    style={{ marginLeft: -10, marginRight: -10 }}
                    className="custom"
                    columns={[
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">STT</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 70,
                        dataIndex: "col1",
                        key: "col1",
                      },
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">Mã thiết bị</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 150,
                        dataIndex: "col2",
                        key: "col2",
                      },
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">Tên thiết bị</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 150,
                        dataIndex: "col3",
                        key: "col3",
                      },
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">Số lượng</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 150,
                        dataIndex: "col4",
                        key: "col4",
                      },
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">Đơn vị tính</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 200,
                        dataIndex: "col5",
                        key: "col5",
                      },
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">Hãng sản xuất</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 200,
                        dataIndex: "col6",
                        key: "col6",
                      },
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">Nước sản xuất</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 150,
                        dataIndex: "col7",
                        key: "col7",
                      },
                      {
                        title: (
                          <div className="custome-header">
                            <div className="title-box">Năm sản xuất</div>
                            {/* <div className="addition-box"></div> */}
                          </div>
                        ),
                        width: 150,
                        dataIndex: "col8",
                        key: "col8",
                      },
                    ]}
                    dataSource={state.thietBiPhuTro}
                  ></Table>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="tab_borders_icons-2"
                  role="tabpanel"
                >
                  <ListImage
                    onSave={onSaveImage}
                    files={state.data.anh || []}
                  />
                  {}
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_borders_icons-3"
                  role="tabpanel"
                >
                  <ListFile
                    onSaveFile={onSaveFile}
                    files={state.data.taiLieu || []}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </AdminPage>
  );
}
