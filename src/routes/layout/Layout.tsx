import React, { useState } from "react";
import { Row, Col, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";
import LayoutHeader from "./components/Header";
import MainPresenter from "../main/MainPresenter";

const { Sider, Content } = Layout;

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const setToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Row>
      <Row>
        <Col span={12}>
          <LayoutHeader></LayoutHeader>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Sider></Sider>
        </Col>
        <Col span={8}>
          <Content>
            <Switch>
              <Route exact path="/" component={MainPresenter} />
              <Route exact path="/dashboard" component={MainPresenter} />{" "}
            </Switch>
          </Content>
        </Col>
      </Row>
    </Row>
  );
}

export default MainLayout;
