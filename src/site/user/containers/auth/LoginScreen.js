import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import authAction from "@actions/auth";
import "./css/main.scss";
import "./css/util.css";

function LoginScreen(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = () => {
    props.onLogin(username.trim(), password).then((s) => {
      window.location.href = "/admin";
    });
  };
  useEffect(() => {
    if (props.auth) {
      window.location.href = "/admin";
    }
  }, []);

  const onKeyDown = (e) => {
    if (e.nativeEvent.code === "Enter") {
      onLogin();
    }
  };

  return (
    <div className="login-page">
      <div
        className="container-login100"
        style={{ backgroundImage: `url(${require("@images/bg_login.jpg")})` }}
      >
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
          <div className="login100-form validate-form">
            <span className="login100-form-title p-b-49">
              <img
                src={require("@images/logoBo.png")}
                alt=""
                style={{ paddingBottom: 20 }}
              />
              <br />
              ĐĂNG NHẬP
            </span>
            <div
              className="wrap-input100 validate-input m-b-23"
              data-validate="Username is reauired"
            >
              <span className="label-input100">Tài khoản</span>
              <input
                className="input100"
                type="text"
                name="username"
                value={username}
                placeholder="Nhập tài khoản"
                onKeyDown={onKeyDown}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <span className="label-input100">Mật khẩu</span>
              <input
                className="input100"
                type="password"
                name="pass"
                value={password}
                placeholder="Nhập mật khẩu"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyDown={onKeyDown}
              />
            </div>

            <div className="text-right p-t-8 p-b-31"></div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button onClick={onLogin} className="login100-form-btn">
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    auth: state.auth.auth,
  }),
  {
    onLogin: authAction.onLogin,
  }
)(LoginScreen);