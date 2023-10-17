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
import SidebarPerformance from "../components/SidebarPerformance";

export default function () {

    useEffect(() => {
        AOS.init();
        document.title = "Nos réalisations";
    }, []);

    return (
        <div>
            <BgHead/>
            <section id="breadcrumb">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        {/*<Breadcrumb.Item href="#">*/}
                        {/*    Nos métiers*/}
                        {/*</Breadcrumb.Item>*/}
                        <Breadcrumb.Item active>Nos réalisations</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </section>
            <section id="page">
                <div className="page">
                    <Container>
                        <Row className="">
                            <Col md={4} lg={3} className="sidebar" data-aos="fade-right">
                                <SidebarPerformance/>
                            </Col>

                            <Col md={8} lg={9} className="content" data-aos="fade-left">
                                <h4 className="content-titre">Nos réalisations</h4>
                                <div className="paragraphe">
                                    <ul>
                                        <li>Secteur agro-industrie</li>
                                        <ul>
                                            <li>Mission effectuée : une levée de fonds auprès d'une structure financière</li>
                                        </ul>
                                        <li className="mt-4">Restructuration organisationnelle de deux Grands Groups de dix filiales chacun:</li>
                                        <ul>
                                            <li>Secteur BTP </li>
                                            <li>Secteur de la distribution de marchandises et produits pétroliers</li>
                                            <li>Secteur du transport </li>
                                            <li>Secteur de l’agro-industrie </li>
                                            <div className="mission-effectuee mt-3">
                                                <strong><em>Missions effectuées par Divine Finances & Conseils:</em></strong>
                                                <ul>
                                                    <li>La rédaction des procédures de fonctionnement du groupe,</li>
                                                    <li>La certification des comptes de toutes les filiales et leur consolidation comptable au sein de la holding,</li>
                                                    <li>La rédaction et la revue des conventions et contrats entre la holding et les filiales</li>
                                                    <li>La rédaction du business plan du group</li>
                                                    <li>La valorisation des fonds propres de toutes les filiales et de la holding</li>
                                                </ul>
                                            </div>
                                        </ul>
                                        <li className="mt-4">Valorisation de fonds propres</li>
                                        <ul>
                                            <li>Secteur BTP (x2)</li>
                                            <li>Secteur distribution</li>
                                            <li>Secteur santé</li>
                                        </ul>
                                        <li className="mt-4">Réalisation de Business Plan</li>
                                        <ul>
                                            <li>Plus de vingt (20) business plans au cours de l'année 2022-2023</li>
                                            <li>Valorisation du business plan</li>
                                        </ul>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}