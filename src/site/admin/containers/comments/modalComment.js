import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";
import { connect } from "react-redux";
import authAction from "@actions/auth";
import "../userinfo/style.scss";

function index(props) {
  const [state, _setState] = useState({
    size: 10,
    page: 1,
  });
  const setState = (data = {}) => {
    _setState((state) => {
      return { ...state, ...data };
    });
  };
  useEffect(() => {
  }, []);
  const closeModal = () => {
    props.onClose()
  }
  const { getFieldDecorator } = props.form;

  const handleComment = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
      }
    })
  }
  return (
    <Modal
      className="change-status"
      width={770}
      title={"Gửi ý kiến đóng góp"}
      visible={true}
      cancelText={"Đóng"}
      onCancel={closeModal}
      footer={[
        <>
          <Button type="danger" key="back" onClick={() => closeModal()}>Lịch sử gửi</Button>
          <Button key="submit" type="primary" onClick={(e) => handleComment(e)}>Gửi ý kiến đóng góp </Button>
        </>
      ]} >
      <div>
        <Form layout="vertical" hideRequiredMark onSubmit={handleComment}>
          <Form.Item
            name="description"
          >
            {getFieldDecorator("ghiChu", {
              rules: [
                {
                  required: true,
                  message: "Nhập nội dung",
                },
              ],
              initialValue: state.ghiChu
            })(
              <Input.TextArea
                rows={10.5}
                placeholder="Nhập nội dung"
                onChange={(e) => {
                  setState({
                    ghiChu: e.target.value,
                  });
                }}
                value={state.ghiChu}
              />
            )}
          </Form.Item>
        </Form>
      </div>
    </Modal>
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