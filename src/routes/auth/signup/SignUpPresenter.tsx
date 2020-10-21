import React, { useContext, useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { LoginContext } from "../../../App";
import Loading from "../../../components/Loading";

function SignUpPresenter({ signUp }: any) {
  const [spin, setSpin] = useState(false);
  const logined = useContext(LoginContext);

  const onFinish = async (values: object) => {
    setSpin(true);
    signUp(values, logined?.isLoggedIn.setLogin, setSpin);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      style={{ width: "500px" }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        className="login-input login-user"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        rules={[
          {
            required: true,
            message: "Please input your Password Again!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (value === getFieldValue("password")) {
                return Promise.resolve();
              }
              return Promise.reject("비밀 번호가 일치하지 않습니다.");
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="comfirm password"
        />
      </Form.Item>
      <Form.Item
        name="name"
        className="login-input login-user"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          회원가입
        </Button>
      </Form.Item>
      <Loading prop={spin} msg={"회원 가입 중입니다."}></Loading>
    </Form>
  );
}

export default SignUpPresenter;
