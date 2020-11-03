import React, {useState} from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import StyledButton from "../Button";

import "./styles.scss";
import aveveo_logo from "../../assets/images/aveveo-logo.png";
import StyledModal from "../Modal";
import SignInWrapper from "../SignInWrapper";
import SignUpWrapper from "../SignUpWrapper";

const Header = (props) => {
    const [visible, setVisible] = useState(false);
    const [signUpModalVisible, setSignUpModalVisible] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top"
                className="d-flex flex-lg-row-reverse navigation-bar">
            <Container fluid className="px-5">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                    <Nav>
                        <Nav.Link href="#" className="mr-2">Find technician</Nav.Link>
                        <Nav.Link href="#" className="mr-2">Find order</Nav.Link>
                        <Nav.Link href="#">How it works?</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#home">
                        <img src={aveveo_logo} alt=""/>
                    </Navbar.Brand>

                    <Nav className="d-flex justify-content-between">
                        <Nav.Link href="#deets">Technicians forum</Nav.Link>
                        <div className="d-flex ml-5">
                            <Nav.Link eventKey={2} className="mr-2" onClick={() => setVisible(true)}>
                                Log In
                            </Nav.Link>
                            <StyledButton
                                onClick={() => setSignUpModalVisible(true)}
                            >
                                {/*<span className="px-3">*/}
                                    Sign Up
                                {/*</span>*/}
                            </StyledButton>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <StyledModal
                visible={visible}
                setVisible={() => setVisible(false)}
            >
                <SignInWrapper />
            </StyledModal>
            <StyledModal
                visible={signUpModalVisible}
                setVisible={() => setSignUpModalVisible(false)}

            >
                <SignUpWrapper />
            </StyledModal>
        </Navbar>
    )
};

export default Header;
