import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

type ModalProps = {
  status: boolean;
};

function ModalLayer({ status }: ModalProps) {
  if (status === true) {
    return Modal.success({
      title: "This is a notification message",
      content: `Modal Test`,
    });
  }

  return Modal.error({
    title: "This is a notification message",
    content: `Modal Test`,
  });
}

export default ModalLayer;
