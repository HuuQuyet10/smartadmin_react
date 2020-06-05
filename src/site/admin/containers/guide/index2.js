import React from "react";
import { AdminPage } from "@admin/components/admin";
import { connect } from "react-redux";
import "./style.scss";
function index(props) {
  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Hướng dẫn sử dụng"
      subheader="Hướng dẫn sử dụng nhập thiết bị"
    >
      {/* <div style={{ textAlign: "center" }}>
                <img style={{ width: "70%" }} src={require("@images/csyt.png")} alt="" />
            </div> */}
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div class="container-form">
            <ul>
              <li>
                <span>1. Nhập thông tin thiết bị của bệnh viện.</span>
                <p>
                  <b>Bước 1: </b> Vào{" "}
                  <img src={require("@images/equipmentIc.png")} alt="" />
                </p>
                <p>
                  <b>Bước 2:</b> Chọn button{" "}
                  <img src={require("@images/DeviceNewB3.png")} alt="" /> để
                  thêm mới thông tin thiết bị vào hệ thống.
                </p>
                <p>
                  <b>Bước 3:</b> Nhập thông tin thiết bị vào các trường tại màn
                  hình hiển thị
                  <img
                    style={{
                      maxHeight: "initial",
                      display: "block",
                      height: "auto",
                      width: "100%",
                      border: "1px solid ",
                      margin: "12px 0px 25px",
                    }}
                    src={require("@images/listDevice.png")}
                    alt=""
                  />
                </p>
                <p>
                  <b>Bước 4:</b> Click vào{" "}
                  <img src={require("@images/DeviceNewB3.png")} alt="" /> để lưu
                  thông tin thiết bị vào hệ thống.{" "}
                </p>
                <p>
                  <b>Bước 5:</b> Tại Màn hình{" "}
                  <img src={require("@images/listDeviceB4.png")} alt="" /> :
                  <ul class="list-child">
                    <li>
                      <img
                        class="arrowIc"
                        src={require("@images/arrowIc.PNG")}
                        alt=""
                      />{" "}
                      Chọn biểu tượng
                      <img
                        class="IcAction"
                        src={require("@images/detailB4.png")}
                        alt=""
                      />{" "}
                      để xem chi tiết thông tin thiết bị.
                    </li>
                    <li>
                      <img
                        class="arrowIc"
                        src={require("@images/arrowIc.PNG")}
                        alt=""
                      />{" "}
                      Chọn biểu tượng
                      <img
                        class="IcAction"
                        src={require("@images/editB4.png")}
                        alt=""
                      />{" "}
                      để sửa thông tin thiết bị.
                    </li>
                    <li>
                      <img
                        class="arrowIc"
                        src={require("@images/arrowIc.PNG")}
                        alt=""
                      />{" "}
                      Chọn biểu tượng
                      <img
                        class="IcAction"
                        src={require("@images/deleteB4.png")}
                        alt=""
                      />{" "}
                      để xóa thiết bị.
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <span>2. Bổ sung thông tin hành chính của Bệnh viện.</span>
                <p class="list-child">
                  <img
                    class="arrowIc"
                    src={require("@images/arrowIc.PNG")}
                    alt=""
                  />{" "}
                  Vào Màn hình
                  <img src={require("@images/cstyIc.png")} alt="" /> để xem hoặc
                  sửa thông tin hành chính của Bệnh viện chọn biểu tượng
                  <img
                    class="IcAction"
                    src={require("@images/editB4.png")}
                    alt=""
                  />
                  .
                </p>
              </li>
              <li>
                <span>3. Xem danh mục dùng chung.</span>
                <ul class="list-child">
                  <li>
                    <img
                      class="arrowIc"
                      src={require("@images/arrowIc.PNG")}
                      alt=""
                    />{" "}
                    Vào
                    <img src={require("@images/categoryIc.png")} alt="" />
                    để xem thông tin các danh mục dùng chung.
                  </li>
                  <li>
                    <img
                      class="arrowIc"
                      src={require("@images/arrowIc.PNG")}
                      alt=""
                    />{" "}
                    Khi danh mục nhập thông tin thiết bị thiếu hoặc cần hỗ trợ,
                    vui lòng liên hệ:
                    <b style={{ display: "initial", paddingLeft: 6 }}>
                      hotline 089 555 3299.
                    </b>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AdminPage>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth.auth || {},
  };
}

export default connect(mapStateToProps)(index);
