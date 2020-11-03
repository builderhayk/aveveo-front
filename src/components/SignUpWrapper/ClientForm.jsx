import {Button, Form, Input} from "antd";
import {Col, Row} from "react-bootstrap";
import React from "react";
import SocialButtons from "./SocialButtons";

const formLayout = {
    wrapperCol: {span: 24}
};
const ClientForm = () => {
    const submitForm = (formData) => {
        console.log(formData, "formData");
    }
    return (
        <Row className="auth-form-wrapper m-0">
            <Col className="mt-2">
                <Form
                    {...formLayout}
                    name="signIn"
                    initialValues={{remember: true}}
                    onFinish={submitForm}
                >
                    <Form.Item className="m-0">
                        <Form.Item
                            name="firstName"
                            rules={[{type: "string", required: true}]}
                            style={{display: 'inline-block', width: 'calc(50%  - 8px)'}}
                        >
                            <Input placeholder="First Name"/>
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[{type: "string", required: true}]}
                            style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 16px'}}
                        >
                            <Input placeholder="Last Name"/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password placeholder="Password" visibilityToggle={false}/>
                    </Form.Item>
                    <Form.Item className="m-0">
                        <Form.Item
                            name="city"
                            rules={[{type: "string", required: true}]}
                            style={{display: 'inline-block', width: 'calc(50%  - 8px)'}}
                        >
                            <Input placeholder="City"/>
                        </Form.Item>
                        <Form.Item
                            name="zipCode"
                            rules={[{type: "number", required: true}]}
                            style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 16px'}}
                        >
                            <Input placeholder="Zip-code"/>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item className="submit-button">
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                    </Form.Item>
                    <SocialButtons/>
                </Form>
            </Col>
        </Row>
    );
}
export default ClientForm;