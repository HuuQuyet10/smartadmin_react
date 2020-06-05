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
                <img style={{ width: "70%" }} src={require("@images/cty.png")} alt="" />
            </div> */}
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <div class="container-form">
            <ul>
              <li>
                <span>1. Thao tác nhập thông tin thiết bị của công ty.</span>
                <p>
                  <b>Bước 1: </b> Chọn mục
                  <img src={require("@images/ctyttb.png")} alt="" /> tại thanh
                  Menu bên trái, chọn tiếp{" "}
                  <img src={require("@images/tbcty.png")} alt="" /> để vào màn
                  hình Danh sách thiết bị.
                </p>
                <p>
                  <b>Bước 2: </b> Chọn nút
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
                    src={require("@images/tmcty.png")}
                    alt=""
                  />
                </p>
                <p>
                  Nhấn nút{" "}
                  <img src={require("@images/DeviceNewB3.png")} alt="" /> trên
                  màn hình để lưu các thiết bị vào hệ thống.{" "}
                </p>
                <p>
                  * Tại Màn hình Danh sách thiết bị, chọn biểu tượng{" "}
                  <img
                    class="IcAction"
                    src={require("@images/detailB4.png")}
                    alt=""
                  />{" "}
                  để xem chi tiết thông tin thiết bị.
                </p>
              </li>
              <li>
                <span>2. Bổ sung thông tin hành chính của công ty.</span>
                <p>
                  <b>Bước 1: </b> Vào màn hình{" "}
                  <img src={require("@images/ctyttb.png")} alt="" /> tại thanh
                  Menu bên trái.
                </p>
                <p>
                  <b>Bước 2: </b> Chọn tiếp{" "}
                  <img src={require("@images/qlttb.png")} alt="" />
                </p>
                <p>
                  <b>Bước 3: </b> Nhấn biểu tượng bút chì{" "}
                  <img src={require("@images/editB4.png")} alt="" /> để chỉnh
                  sửa thông tin hành chính của công ty.
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
