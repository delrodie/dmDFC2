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
        document.title = "Levée de fonds";
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
                        <Breadcrumb.Item active>Levée de fond</Breadcrumb.Item>
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
                                <h4 className="content-titre">Levée de fonds</h4>
                                <div className="paragraphe">
                                    <ol>
                                        <li>Financements structurés</li>
                                        <ul>
                                            <li>Financement d’exploitation (crédit de campagne, lignes de découvert …)</li>
                                            <li>Financements d’Investissements (Dettes bancaires, Emprunt Obligataire …)</li>
                                        </ul>
                                        <li className="mt-4">Financement de Projet</li>
                                        <ul>
                                            <li>Infrastructures</li>
                                            <li>Agro-industrie</li>
                                            <li>Mines et Énergie</li>
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