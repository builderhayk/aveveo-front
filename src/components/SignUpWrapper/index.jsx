import React, {useState} from "react";
import { Row, Col, Container} from "react-bootstrap";
import {Tabs} from 'antd';

import "../SignInWrapper/styles.scss";
import ClientForm from "./ClientForm";
import TechnicianForm from "./TechnicianForm";

const { TabPane } = Tabs;
const SingInWrapper = (props) => {
    const [tab, setTab] = useState('forClient');


    const handleTabChange = (key) => setTab(key);

    return (
        <Container className="p-4">
            <Row className="m-0">
                <Col>
                    <div className="auth-header text-left">
                        <h5>Sign up</h5>
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Tabs defaultActiveKey="forClient" onChange={handleTabChange} className="auth-form-tabs">
                    <TabPane tab="For Client" key="forClient">
                        <ClientForm/>
                    </TabPane>
                    <TabPane tab="For Technician" key="forTechnician">
                        <TechnicianForm/>
                    </TabPane>
                </Tabs>
            </Row>
        </Container>
    )
}

export default SingInWrapper;
