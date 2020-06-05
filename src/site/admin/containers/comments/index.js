import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "antd";
import "../userinfo/style.scss";
import { connect } from "react-redux";
import authAction from "@actions/auth";
import ModalComment from "@admin/containers/comments/modalComment";
function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
    showComments: false,
  });
  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };
  useEffect(() => {}, []);
  const closeModal = () => {
    props.onClose();
  };

  const handleModel = (e) => {
    e.preventDefault();
    setState({
      showComments: true,
    });
  };
  const closeModalComment = () => {
    setState({
      showComments: false,
    });
  };
  return (
    <div>
      <Modal
        className="change-status"
        width={770}
        title={"Gửi ý kiến đóng góp"}
        visible={true}
        cancelText={"Đóng"}
        onCancel={closeModal}
        footer={[
          <>
            <Button type="danger" key="back" onClick={() => closeModal()}>
              Trở về
            </Button>
            <Button key="submit" type="primary" onClick={(e) => handleModel(e)}>
              Viết ý kiến đóng góp{" "}
            </Button>
          </>,
        ]}
      >
        <div></div>
      </Modal>
      {state.showComments ? <ModalComment onClose={closeModalComment} /> : null}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth.auth || {},
  };
}

export default connect(mapStateToProps, {
  onLogout: authAction.onLogout,
})(Form.create()(index));
