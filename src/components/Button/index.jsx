import React from "react";
import {Button} from "react-bootstrap";
import "./styles.scss";

const StyledButton = ({children, className, ...props}) => {
    return (
        <Button
            size={props.size || "sm"}
            type={props.type || "button"}
            className={className + " primary-red"}
        >
            {children}
        </Button>
    )
};

export default StyledButton;
