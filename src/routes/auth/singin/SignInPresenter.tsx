import React, { useContext, useState } from "react";
import { Row, Layout, Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ViewContext } from "../AuthPresenter";
import { LoginContext } from "../../../App";
import Loading from "../../../components/Loading";

function SignInPresenter({ signIn }: any) {
  const [spin, setSpin] = useState(false);
  const view = useContext(ViewContext);
  const logined = useContext(LoginContext);

  const onFinish = (values: object) => {
    setSpin(true);
    signIn(values, logined?.isLoggedIn.setLogin, setSpin);
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
      <Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          className="login-check"
          noStyle
        >
          <Checkbox>
            <span className="login-check-text">Remember me</span>
          </Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%", marginBottom: "15px" }}
        >
          Log in
        </Button>
        <div className="login-form-bottom">
          <span className="login-form-bottom-text">회원이 아니시라면</span>{" "}
          &nbsp;
          {view !== undefined ? (
            <a
              onClick={() => {
                view.setView(true);
              }}
            >
              register now!
            </a>
          ) : null}
        </div>
      </Form.Item>
      <Loading prop={spin} msg={"로그인 중입니다."}></Loading>
    </Form>
  );
}

export default SignInPresenter;
