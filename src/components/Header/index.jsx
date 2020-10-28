import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import StyledButton from "../Button";

import "./styles.scss";
import aveveo_logo from "../../assets/images/aveveo-logo.png";
const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="d-flex flex-lg-row-reverse navigation-bar">
            <Container fluid className="px-5">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                    <Nav>
                        <Nav.Link href="#features">Find technician</Nav.Link>
                        <Nav.Link href="#pricing">Find order</Nav.Link>
                        <Nav.Link href="#pricing">How it works?</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#home">
                        <img src={aveveo_logo} alt=""/>
                    </Navbar.Brand>

                    <Nav className="d-flex justify-content-between">
                        <Nav.Link href="#deets">Technicians forum</Nav.Link>
                        <div className="d-flex ml-5">
                            <Nav.Link eventKey={2} className="mr-2">
                                Log In
                            </Nav.Link>
                            <StyledButton>
                                Sign Up
                            </StyledButton>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;
