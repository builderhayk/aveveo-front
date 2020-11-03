import React from "react"
import {NavLink} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="pb-lg-4">
            <Container className="mt-5">
                <Row className="d-flex justify-content-between">
                    <Col className="d-flex justify-content-between">
                        <div className="footer-items-wrapper">
                            <h6>
                                <NavLink to="about">
                                    About Us
                                </NavLink>
                            </h6>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                        </div>
                        <div className="footer-items-wrapper">
                            <h6>
                                <NavLink to="about">
                                    Contacts
                                </NavLink>
                            </h6>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div className="footer-items-wrapper">
                            <h6>
                                <NavLink to="about">
                                    How It Works
                                </NavLink>
                            </h6>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-between">
                        <div className="footer-items-wrapper">
                            <h6>
                                <NavLink to="about">
                                    About Us
                                </NavLink>
                            </h6>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                        </div>
                        <div className="footer-items-wrapper">
                            <h6>
                                <NavLink to="about">
                                    Contacts
                                </NavLink>
                            </h6>
                            <span>
                                <NavLink to="#">First Page</NavLink>
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="d-flex align-items-center justify-content-center">
                        <span className="footer-copyright">© Copyright {new Date().getFullYear()} AVEVEO LLC.</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
