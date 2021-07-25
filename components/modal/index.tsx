import React from "react";
import { Modal } from "antd";

const ModalComponent = (props) => {
  const { title, visible, onOk, onCancel, children } = props;
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
