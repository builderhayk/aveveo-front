import React from 'react';
import {NavLink} from "react-router-dom";
import {Card, Jumbotron, Button, InputGroup, FormControl, Container, Row, Col} from "react-bootstrap";

import "./styles.scss";
import StyledButton from "../../components/Button";
import workers from "../../assets/images/workers-stuff.png"
const Home = (props) => {
    return (
        <>
            <Jumbotron className="d-flex flex-column justify-center align-center landing-page-heading">
                <h1 className="">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
                <p>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                Find
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl/>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                Find
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl/>
                        <InputGroup.Append>
                            <StyledButton size="md">Search</StyledButton>
                        </InputGroup.Append>
                    </InputGroup>
                </p>
            </Jumbotron>
            <Container className="pt-lg-4 text-center">
                <h2>
                    Find the Best Technicians in Your City
                </h2>
                <Row className="mt-5">
                    {Array.from(Array(4).keys()).map(item => (
                        <Col>
                            <Card className="landing-page-card">
                                <Card.Img variant="top" src={workers}/>
                                <Card.Body>Plumbers</Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className="mt-5">
                    {Array.from(Array(4).keys()).map(item => (
                        <Col>
                            <Card className="landing-page-card">
                                <Card.Img variant="top" src={workers}/>
                                <Card.Body>Plumbers</Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Home;
