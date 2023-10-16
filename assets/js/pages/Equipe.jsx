import React, {useEffect} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import BgHead from "../components/BgHead";
import {LiaLongArrowAltRightSolid} from "react-icons/lia";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMail, GrMailOption} from "react-icons/gr";
import AOS from 'aos';
import Slider from "react-slick";
import profileKone from "../../images/equipe/01-kone.jpg";
import profileNdri from "../../images/equipe/dga.jpg";
import profileGustave from "../../images/equipe/02-gustave.jpg";
import profileSylla from "../../images/equipe/03-sylla.jpg";

export default function () {

    useEffect(() => {
        AOS.init();
        document.title = "Notre équipe";
    }, []);

    return (
        <div>
            <BgHead/>
            <section id="breadcrumb">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            qui sommes-nous?
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Notre équipe</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </section>
            <section id="equipe">
                <div className="equipe">
                    <Container fluid="lg">
                        <h1>Notre équipe</h1>
                        <Row className="g-3" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="2500">
                            <Col md={6} lg={4} className="profile">
                                <a href="#">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={profileKone} />
                                        <Card.Body>
                                            <h3>RAMATOU TIEGNIN KONE</h3>
                                            <h5>P.D.G</h5>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col  md={6} lg={4} className="profile">
                                <a href="#">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={profileNdri} />
                                        <Card.Body>
                                            <h3>KAN AUGUSTIN N'DRI</h3>
                                            <h5>D.G.A</h5>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={6} lg={4} className="profile">
                                <a href="#">
                                    <Card className="h-100">
                                        <Card.Img src={profileGustave} />
                                        <Card.Body>
                                            <h3>GUSTAVE KRAGBE</h3>
                                            <h5>Responsable projet</h5>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={6} lg={4} className="profile">
                                <a href="#">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={profileSylla} />
                                        <Card.Body>
                                            <h3>CHEICKNA SYLLA</h3>
                                            <h5>CONSULTANT</h5>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}