import React, {useEffect} from 'react';
import {Card, Avatar, Rate} from 'antd';
import {Jumbotron, InputGroup, FormControl, Container, Row, Col} from "react-bootstrap";
import {SearchOutlined} from "@ant-design/icons";
import "./styles.scss";

import StyledButton from "../../components/Button";
import workers from "../../assets/images/workers-stuff.png"
import services from "../../assets/images/services-image.png"
import profile_pic from "../../assets/images/profile_pic.png"
import {seo} from "../../helpers/seo";

const {Meta} = Card;

const Home = (props) => {
    useEffect(() => {
        seo({title: "Aveveo", description: "Home description"})
    }, []);
    return (
        <>
            <Jumbotron className="d-flex flex-column justify-center align-center landing-page-heading">
                <h1 className="">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
                <div className="main-page-search-wrapper">
                    <InputGroup className="mt-4 main-page-search">
                        <InputGroup.Prepend className="main-page-search-input">
                            <InputGroup.Text>
                                Find
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="plumbers, delivery, takeout..." className="main-page-search-find"/>
                        <InputGroup.Prepend className="main-page-search-input">
                            <InputGroup.Text>
                                Location
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl placeholder="San Francisco, CA"/>
                        <InputGroup.Append>
                            <StyledButton size="md"><SearchOutlined className="search-icon"/></StyledButton>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Jumbotron>
            <Container className="pt-lg-4 text-center">
                <h2>
                    Find the Best Technicians in Your City
                </h2>
                <Row className="mt-5">
                    {Array.from(Array(8).keys()).map((item, i) => (
                        <Col md={3} key={i} className="p-md-3">
                            <Card
                                hoverable
                                cover={<img alt="example" src={workers}/>}
                            >
                                <Meta title="Workers"/>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className="pt-lg-4 text-center">
                <h2>
                    Lorem ipsum dolor sit amet
                </h2>
                <Row className="mt-5">
                    {Array.from(Array(3).keys()).map((item, i) => (
                        <Col md={4} key={i} className="p-md-3">
                            <Card
                                hoverable
                                cover={
                                    <div className="card-img-wrapper">
                                        <img alt="example" src={services}/>
                                        <div><span>Plumbers</span></div>
                                    </div>
                                }
                            >
                                <Meta
                                    avatar={
                                        <Avatar
                                            src={profile_pic}
                                        />
                                    }
                                    title={
                                        <div className="service-card-title-wrapper">
                                            <span className="mr-3">Username</span>
                                            <Rate allowHalf defaultValue={2.5}/>
                                        </div>
                                    }
                                    // description={
                                    //     <div className="service-card-description">
                                    //
                                    //     </div>
                                    // }
                                />
                                <div className="ant-card-meta-description text-left mt-3">
                                    Lorem ipsum dolor sit amet, facilisis
                                    sconsectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                                    lectus magna fringilla urna, porttitor rhoncus dolor purus non dolor purus
                                    dolor purus dolor purus
                                </div>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
}

export default Home;
