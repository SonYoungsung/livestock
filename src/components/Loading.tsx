import React from "react";
import { Spin, Alert } from "antd";
import "antd/dist/antd.css";

function Loading<propType>({ prop, msg }: { prop: boolean; msg: string }) {
  if (prop === true) {
    return (
      <Spin tip="Loading...">
        <Alert message={msg} description="잠시만 기다려주세요." type="info" />
      </Spin>
    );
  }
  return null;
}

export default Loading;
