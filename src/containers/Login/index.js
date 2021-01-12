import React, { useCallback, useState } from "react";
import "./index.css";
import { Form, Input, Button, Row, message } from "antd";
import { useDispatch } from "react-redux";
import * as action from "../../redux/action";
import { useHistory } from "react-router-dom";
const LoginPage = ({ changeTab }) => {
  const [messageInfo, setMessageInfo] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const initialValue = {
    userName: "",
    password: "",
  };
  const handleSubmit = useCallback(
    (value) => {
      return new Promise((resolve, reject) => {
        dispatch(action.login({ value, resolve, reject }));
      }).then((res) => {
        if (res === null) {
          setMessageInfo(
            <p style={{ color: "red", textAlign: "center" }}>
              Wrong username or password
            </p>
          );
        } else {
          history.push("/room");
          return message.success("login successfully!");
        }
      });
    },
    [dispatch, history]
  );

  return (
    <>
      {messageInfo}
      <Form
        layout="vertical"
        name="login"
        initialValues={initialValue}
        onFinish={handleSubmit}
      >
        <Form.Item name="userName" label="user name">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="password">
          <Input.Password />
        </Form.Item>
        <Row justify="center">
          <Button className="btn-login" htmlType="submit" type="primary">
            Login
          </Button>
        </Row>
      </Form>
      <p className="link-sign">
        no account?
        <a href="#" onClick={() => changeTab("2")}>
          register
        </a>
      </p>
    </>
  );
};

export default LoginPage;
