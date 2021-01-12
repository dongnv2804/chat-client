import React, { useCallback } from "react";
import { Form, Input, Button, Row, message } from "antd";
import { useDispatch } from "react-redux";
import * as action from "../../redux/action";

const RegisterPage = ({ changeTab }) => {
  const dispatch = useDispatch();
  const initialValue = {
    userName: "",
    password: "",
    name: "",
  };
  const handleSubmit = useCallback(
    (value) => {
      return new Promise((resolve, reject) => {
        dispatch(action.register({ value, resolve, reject }));
      }).then((res) => {
        return message.info(res.message);
      });
    },
    [dispatch]
  );

  return (
    <>
      <Form
        layout="vertical"
        name="login"
        initialValues={initialValue}
        onFinish={handleSubmit}
      >
        <Form.Item name="name" label="nick name">
          <Input />
        </Form.Item>
        <Form.Item name="userName" label="user name">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="password">
          <Input.Password />
        </Form.Item>
        <Row justify="center">
          <Button className="btn-login" htmlType="submit" type="primary">
            Register
          </Button>
        </Row>
      </Form>
      <p className="link-sign">
        already have acount?
        <a href="#" onClick={() => changeTab("1")}>
          login
        </a>
      </p>
    </>
  );
};

export default RegisterPage;
