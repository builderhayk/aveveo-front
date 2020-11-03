import React from "react";
import {Image, Row, Col, Container, NavLink} from "react-bootstrap";
import {Form, Input, Button, Checkbox, Divider} from 'antd';

import fb_logo from "../../assets/images/fb-logo.png"
import google_logo from "../../assets/images/google-logo.png"
import apple_logo from "../../assets/images/apple-logo.png"

import "./styles.scss";

const formLayout = {
    wrapperCol: {span: 24}
};
const SingInWrapper = (props) => {
    const submitForm = (formData) => {
        console.log(formData, "formData");
    }
    return (
        <Container className="p-4">
            <Row className="m-0">
                <Col>
                    <div className="auth-header text-left">
                        <h5>Log in</h5>
                    </div>
                </Col>
            </Row>
            <Row className="auth-form-wrapper m-0">
                <Col className="mt-2">
                    <Form
                        {...formLayout}
                        name="signIn"
                        initialValues={{remember: true}}
                        onFinish={submitForm}
                    >
                        <Form.Item
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input placeholder="Username"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password placeholder="Password" visibilityToggle={false}/>
                        </Form.Item>
                        <Form.Item className="m-0">
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <div className="forgot-password-link">
                                <NavLink href="#" style={{ margin: '0 8px' }}>
                                    Forgot Password?
                                </NavLink>
                            </div>
                        </Form.Item>
                        <Form.Item className="submit-button">
                            <Button type="primary" htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                        <Divider>
                            or
                        </Divider>
                        <Row className="mt-4 px-5">
                            <Col xs={6} md={4} className="text-center">
                                <Image src={fb_logo} roundedCircle width={39} height={39} />
                            </Col>
                            <Col xs={6} md={4} className="text-center">
                                <Image src={google_logo} roundedCircle width={37} height={39} />
                            </Col>
                            <Col xs={6} md={4} className="text-center">
                                <Image src={apple_logo} roundedCircle width={32} height={37} />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SingInWrapper;
