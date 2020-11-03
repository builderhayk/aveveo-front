import React from "react";
import {Modal} from "antd";
import "./styles.scss";
import {Container} from "react-bootstrap";

const StyledModal = ({title, visible, setVisible, children, ...props}) => {
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={() => setVisible(false)}
            className="styled-modal pb-0"
            footer={null}
            {...props}
        >
            {children}
        </Modal>
    )
};

export default StyledModal;
