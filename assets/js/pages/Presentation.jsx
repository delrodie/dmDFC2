import React, {useEffect} from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import BgHead from "../components/BgHead";
import {LiaLongArrowAltRightSolid} from "react-icons/lia";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMail, GrMailOption} from "react-icons/gr";
import AOS from 'aos';
import SidebarPresentation from "../components/SidebarPresentation";

export default function () {

    useEffect(() => {
        AOS.init();
        document.title = "Présentation de Divine Finances & Conseils";
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
                        <Breadcrumb.Item active>Présentation</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </section>
            <section id="page">
                <div className="page">
                    <Container>
                        <Row>
                            <Col md={4} lg={3} className="sidebar" data-aos="fade-right">
                                <SidebarPresentation/>
                            </Col>

                            <Col md={8} lg={9} className="content" data-aos="fade-left">
                                <h4 className="content-titre">Divine Finances & Conseils</h4>
                                <div className="paragraphe">
                                    <strong>DFconseils</strong> est un cabinet de conseil financier. Nous accompagnons les entreprises avec des solutions concrètes aux problématiques de levée de fonds, d’optimisation financière, de structuration et de restructuration financière.
                                </div>
                                <div className="paragraphe">
                                    <h6>Nos ambitions</h6>
                                    <p>
                                        Nous nous attelons à faire émerger davantage de champions locaux, car nous avons la ferme conviction que le développement économique de l’Afrique doit être porté par des acteurs africains.
                                        Accompagner les PME, dans la recherche de financement, les assister, les conseiller et structurer des financements à proposer à leurs partenaires financiers.
                                    </p>
                                </div>
                                <div className="paragraphe">
                                    <h6>Notre expertise</h6>
                                    <p>
                                        Une référence dans le conseil financier et stratégique en Afrique de l’Ouest dans des secteurs clés de l’économie tels que l’agro-industrie, les travaux publics, l’électricité, les services financiers, l’immobilier…
                                    </p>
                                </div>
                                <div className="paragraphe">
                                    <h6>Notre équipe</h6>
                                    <p>
                                        Une équipe compétente et pluridisciplinaire qui dispose d’une forte expérience sur le plan national dans divers secteurs menés par des Associés expérimentés.
                                    </p>
                                </div>
                                <div className="paragraphe">
                                    <h6>Nos clients</h6>
                                    <p>
                                        Nous cultivons des relations privilégiées avec les entreprises à fort potentiel et actrices majeures de leurs domaines d’activités respectifs.
                                    </p>
                                </div>
                                <div className="paragraphe">
                                    <h6>Nos valeurs</h6>
                                    <ul>
                                        <li>INNOVATION</li>
                                        <li>EXCELLENCE</li>
                                        <li>INTEGRITE</li>
                                        <li>ENGAGEMENT</li>
                                    </ul>
                                </div>
                                <div className="paragraphe">
                                    <h6>Nos services</h6>
                                    <p>
                                        Nous proposons une gamme élargie de services de conseils financiers allant de l’ingénierie financière à la gestion des fonds propres…
                                    </p>
                                    <ol>
                                        <li>Ingénierie financière</li>
                                        <ul className="mb-3">
                                            <li>Stratégie financière</li>
                                            <li>Due diligence</li>
                                            <li>Modélisation</li>
                                            <li>Restructuration</li>
                                        </ul>
                                        <li>Conseil en levée de fonds</li>
                                        <ul className="mb-3">
                                            <li>Structuration de dettes</li>
                                            <li> Levée de fonds :</li>
                                            <ul>
                                                <li>Marches financiers</li>
                                                <li>Institutions financières</li>
                                                <li>Banques</li>
                                            </ul>
                                        </ul>
                                        <li>Financements de projets</li>
                                        <ul>
                                            <li>Structuration et modélisation financière de projets d’Infrastructure</li>
                                            <li>Exécution de projets</li>
                                            <li>Levée de fonds en dette et fonds propres</li>
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