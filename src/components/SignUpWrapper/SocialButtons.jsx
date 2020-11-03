import {Divider} from "antd";
import {Col, Image, Row} from "react-bootstrap";
import fb_logo from "../../assets/images/fb-logo.png";
import google_logo from "../../assets/images/google-logo.png";
import apple_logo from "../../assets/images/apple-logo.png";
import React from "react";

const SocialButtons = () => {
    return (
        <>
            <Divider>
                or
            </Divider>
            <Row className="mt-4 px-5">
                <Col xs={6} md={4} className="text-center">
                    <Image src={fb_logo} roundedCircle width={39} height={39}/>
                </Col>
                <Col xs={6} md={4} className="text-center">
                    <Image src={google_logo} roundedCircle width={37} height={39}/>
                </Col>
                <Col xs={6} md={4} className="text-center">
                    <Image src={apple_logo} roundedCircle width={32} height={37}/>
                </Col>
            </Row>
        </>
    );
};
export default SocialButtons;
