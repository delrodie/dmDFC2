import React, {useEffect} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import BgHead from "../components/BgHead";
import {LiaLongArrowAltRightSolid} from "react-icons/lia";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMail, GrMailOption} from "react-icons/gr";
import AOS from 'aos';
import SidebarPresentation from "../components/SidebarPresentation";
import SidebarMetier from "../components/SidebarMetier";

export default function () {

    useEffect(() => {
        AOS.init();
        document.title = "Ingénierie financière";
    }, []);

    return (
        <div>
            <BgHead/>
            <section id="breadcrumb">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Nos métiers
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Ingénierie financière</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </section>
            <section id="page">
                <div className="page">
                    <Container>
                        <Row className="">
                            <Col md={4} lg={3} className="sidebar" data-aos="fade-right">
                                <SidebarMetier/>
                            </Col>

                            <Col md={8} lg={9} className="content" data-aos="fade-left">
                                <h4 className="content-titre">Ingénierie financière</h4>
                                <div className="paragraphe">
                                    <ol>
                                        <li>FUSION - ACQUISITIONS</li>
                                        <ul>
                                            <li>Évaluation financière et opérationnelle de l’opportunité d’investissement et identification des risques</li>
                                            <li>Conduite de la Due diligence</li>
                                            <li>Rédaction d’un Mémorandum d’Information pour servir de support à l’opération</li>
                                            <li>Assistance à la négociation financière et à la préparation des supports de la transaction</li>
                                            <li>Évaluation du prix de cession</li>
                                        </ul>
                                        <li className="mt-4">ARRANGEMENT DE FINANCEMENT</li>
                                        <ul>
                                            <li>Identification du besoin de trésorerie (CT et MLT)</li>
                                            <li>Appréciation des facteurs de risque</li>
                                            <li>Identification des mécanismes de garantie</li>
                                            <li>Choix des modes de financements</li>
                                            <li>Stratégie de financement et recommandation d’une structure de financement adaptée</li>
                                        </ul>
                                    </ol>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}