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
                            Nos métiers
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Conseils financiers et stratégiques</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </section>
            <section id="page">
                <div className="page">
                    <Container>
                        <Row>
                            <Col md={4} lg={3} className="sidebar" data-aos="fade-right">
                                <SidebarMetier/>
                            </Col>

                            <Col md={8} lg={9} className="content" data-aos="fade-left">
                                <h4 className="content-titre">Conseils financiers et stratégiques</h4>
                                <div className="paragraphe">
                                    <ol>
                                        <li>RESTRUCTURATION FINANCIÈRE</li>
                                        <ul>
                                            <li>Diagnostic économique et financier de l’entreprise</li>
                                            <li>Élaboration de mesures d’assainissement de la structure financière</li>
                                            <li>Élaboration d’un Plan d’affaires sur base d’un modèle financier</li>
                                            <li>Rédaction d’un mémorandum d’information de synthèse et de tous supports d’aide aux négociations</li>
                                            <li>Assistance dans la préparation d’un plan d’action de redressement en partenariat avec le management, les créanciers et les actionnaires</li>
                                            <li>Négociation des axes de restructuration des dettes, en coordination avec le client</li>
                                        </ul>
                                        <li className="mt-4">ANALYSE DE PERSPECTIVES DE DÉVELOPPEMENT</li>
                                        <ul>
                                            <li>Évaluation du positionnement stratégique de l’entreprise</li>
                                            <li>Analyse alternative de développement d’entreprise (recherche de partenaires, développement de nouvelle activité, etc.)</li>
                                            <li>Sélection d’opportunités d’investissement</li>
                                            <li>Rédaction d’un mémorandum d’information pour servir de support stratégique</li>
                                        </ul>
                                        <li className="mt-4">ÉLABORATION OU REVUE DE PLAN D’AFFAIRES</li>
                                        <ul>
                                            <li>Diagnostic opérationnel et financier (évaluation de l’activité si existante)</li>
                                            <li>Revue et assistance à l’élaboration du Plan d’affaires et du modèle financier de l’entreprise</li>
                                            <li>Définition d’une structure financière optimale en collaboration avec le management</li>
                                            <li>Rédaction d’un mémorandum d’information à l’attention des prêteurs/investisseurs, et de notes spécifiques à l’attention du Conseil d’Administration et du management</li>
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