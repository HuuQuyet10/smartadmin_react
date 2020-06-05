import React from "react";
import { AdminPage } from "@admin/components/admin";
import { connect } from "react-redux";
import "./style.scss";
function index(props) {
  return (
    <AdminPage
      icon="subheader-icon fal fa-window"
      header="Hướng dẫn sử dụng"
      subheader="Hướng dẫn sử dụng sở y tế"
    >
      {/* <div style={{ textAlign: "center" }}>
                <img style={{ width: "70%" }} src={require("@images/csyt.png")} alt="" />
            </div> */}
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div class="container-form">
            <ul>
              <li>
                <span>1. Thêm mới Cơ sở y tế.</span>
                <p>
                  <b>Bước 1: </b> Vào{" "}
                  <img src={require("@images/cstyIc.png")} alt="" /> chọn
                  <img src={require("@images/DeviceNewB3.png")} alt="" />
                </p>
                <p>
                  <b>Bước 2:</b> Nhập thông tin Cơ sở y tế vào các trường tại
                  màn hình hiển thị
                  <img
                    style={{
                      maxHeight: "initial",
                      display: "block",
                      height: "auto",
                      width: "100%",
                      border: "1px solid ",
                      margin: "12px 0px 25px",
                    }}
                    src={require("@images/guide/csyt.png")}
                    alt=""
                  />
                </p>
                <p>
                  <b>Bước 3:</b> Click vào{" "}
                  <img src={require("@images/DeviceNewB3.png")} alt="" /> để
                  thêm mới cơ sở y tế vào hệ thống.
                </p>
              </li>
              <li>
                <span>
                  2. Bổ sung thông tin hành chính của cơ sở y tế (khi tài khoản
                  cơ sở y tế chưa được tạo).
                </span>
                <ul class="list-child">
                  <li>
                    <img
                      class="arrowIc"
                      src={require("@images/arrowIc.PNG")}
                      alt=""
                    />{" "}
                    Vào Màn hình
                    <img src={require("@images/cstyIc.png")} alt="" />
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
                    để sửa thông tin Cơ sơ y tế.
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
                    để xóa Cơ sở y tế.
                  </li>
                  <li>
                    <img
                      class="arrowIc"
                      src={require("@images/arrowIc.PNG")}
                      alt=""
                    />{" "}
                    Chọn biểu tượng
                    <img src={require("@images/guide/execel.png")} alt="" /> để
                    xuất danh sách cơ sở y tế.
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  3. Xem danh sách Trang thiết bị của các cơ sở y tế thuộc quản
                  lý của sở.
                </span>
                <ul class="list-child">
                  <li>
                    <img
                      class="arrowIc"
                      src={require("@images/arrowIc.PNG")}
                      alt=""
                    />{" "}
                    Vào màn hình
                    <img src={require("@images/equipmentIc.png")} alt="" />
                    để xem hoặc chọn biểu tượng
                    <img src={require("@images/guide/execel.png")} alt="" />
                    để xuất danh sách trang thiết bị của các cơ sở y tế.
                  </li>
                </ul>
              </li>
              <li>
                <span>4. Xem danh mục dùng chung.</span>
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
