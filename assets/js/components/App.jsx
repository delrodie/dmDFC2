import React, {useEffect, useState} from 'react';
import {createBrowserRouter, Outlet, RouterProvider, NavLink} from "react-router-dom";
import Home from "./Home";
import {Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row} from "react-bootstrap";
import logoSVG from "../../images/logo/logo.svg";
import logo from "../../images/logo/logo.png";
import Presentation from "../pages/Presentation";
import logoBW from "../../images/logo/bw_logo.png";
import Equipe from "../pages/Equipe";
import {TfiArrowCircleUp} from "react-icons/tfi";
import AOS from "aos";
import ConseilsFinanciers from "../pages/ConseilsFinanciers";
import IngenierieFinancieres from "../pages/IngenierieFinancieres";
import LeveeFonds from "../pages/LeveeFonds";
import Performance from "../pages/Performance";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children:[
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'accueil',
                element: <Home/>
            },
            {
                path: 'presentation',
                element: <Presentation/>
            },
            {
                path: 'notre-equipe',
                element: <Equipe/>
            },
            {
                path: 'nos-metiers',
                element: <div>metier</div>
            },
            {
                path: 'nos-metiers/conseil-financier-et-strategique',
                element: <ConseilsFinanciers/>
            },
            {
                path: 'nos-metiers/ingenierie-financiere',
                element: <IngenierieFinancieres/>
            },
            {
                path: 'nos-metiers/levee-de-fonds',
                element: <LeveeFonds/>
            },
            {
                path: 'nos-realisations',
                element: <Performance/>
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    }
]);

function Root() {
    useEffect(() => {
        AOS.init();

        document.title = "Divine Finances et conseils";

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuFixed, setIsMenuFixed] = useState(false);

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };

    const [isQuiSommesNousOpen, setIsQuiSommesNousOpen] = useState(false);
    const [isNosMetiersOpen, setIsNosMetiersOpen] = useState(false);

    const handleQuiSommesNousToggle = () => {
        setIsQuiSommesNousOpen(!isQuiSommesNousOpen);
    };

    const handleNosMetiersToggle = () => {
        setIsNosMetiersOpen(!isNosMetiersOpen);
    };
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 100) {
            setIsMenuFixed(true);
        } else {
            setIsMenuFixed(false);
        }
    };

    return (
        <div>
            <header>
                <section id="topHead">
                    <div className="topHead">
                        <Container>
                            <Row>
                                <Col className="telephone">
                                    <a href="tel:+2252722599265">+225 27 22 59 92 65</a>
                                </Col>
                                <Col className="email text-end">
                                    <a href="mailto:infos@divinefinancesci.com">infos@divinefinancesci.com</a>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

                <section id="menu" style={{ position: isMenuFixed ? 'fixed' : 'relative', backgroundColor: isMenuFixed ? '#7890e5' : 'rgba(255,255,255,0.3)' }}>
                    <Navbar collapseOnSelect expand="lg" sticky="top">
                        <Container>
                            <NavLink className="navbar-brand" to="/">
                                <img
                                    src={logoSVG}
                                    datasrc={logoSVG}
                                    className="logo"
                                    alt="logo Divine Finances et conseils"
                                />
                            </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => setShowOffcanvas(true)}/>
                            <Navbar.Collapse  id="basic-navbar-nav" onClick={closeOffcanvas}>
                                <Nav className="me-auto menu-item">
                                    <NavLink className="nav-link" to="/accueil">Accueil</NavLink>
                                    <NavDropdown
                                        title="Qui sommes-nous?"
                                        id="basic-nav-dropdown"
                                        show={isQuiSommesNousOpen}
                                        onMouseEnter={handleQuiSommesNousToggle}
                                        onMouseLeave={handleQuiSommesNousToggle}
                                    >
                                        <NavLink to="/presentation" className="dropdown-item">Présentation</NavLink>
                                        <NavLink to="/notre-equipe" className="dropdown-item">Notre équipe</NavLink>
                                    </NavDropdown>
                                    <NavDropdown
                                        title="Nos métiers"
                                        id="metier-nav-dropdown"
                                        show={isNosMetiersOpen}
                                        onMouseEnter={handleNosMetiersToggle}
                                        onMouseLeave={handleNosMetiersToggle}
                                    >
                                        <NavLink to="/nos-metiers/conseil-financier-et-strategique" className="dropdown-item">Conseil financier et stratégique</NavLink>
                                        <NavLink to="/nos-metiers/ingenierie-financiere" className="dropdown-item">Ingénierie financière</NavLink>
                                        <NavLink to="/nos-metiers/levee-de-fonds" className="dropdown-item">Levée de fonds</NavLink>
                                    </NavDropdown>
                                    {/*<NavLink className="nav-link" to="/nos-metiers">Nos metiers</NavLink>*/}
                                    <NavLink className="nav-link" to="/nos-realisations">Nos réalisations</NavLink>
                                    <NavLink className="nav-link" to="/recrutement">Recrutement</NavLink>
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </Nav>
                            </Navbar.Collapse>

                            <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>
                                        <img
                                            src={logo}
                                            datasrc={logo}
                                            className="logo"
                                            alt="logo Divine Finances et conseils"
                                        />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body onClick={(e) => e.stopPropagation()}>
                                    <Nav className="me-auto menu-item">
                                        <Nav.Link href="#home">Accueil</Nav.Link>
                                        <NavDropdown
                                            title="Qui sommes-nous?"
                                            id="basic-nav-dropdown"
                                            show={isDropdownOpen}
                                            onMouseEnter={handleDropdownToggle}
                                            onMouseLeave={handleDropdownToggle}
                                        >
                                            <NavDropdown.Item href="#action/3.1">Présentation</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Notre équipe</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#link">Nos metiers</Nav.Link>
                                        <Nav.Link href="#link">Nos réalisations</Nav.Link>
                                        {/*<Nav.Link href="#link">Actualités</Nav.Link>*/}
                                        <Nav.Link href="#link">Récrutement</Nav.Link>
                                        <Nav.Link href="#link">Contact</Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </Offcanvas>

                        </Container>
                    </Navbar>


                </section>

            </header>
            <main>
                <Outlet/>
            </main>

            <section id="footer">
                <div className="footer">
                    <Container>
                        <div className="logo">
                            <img src={logoBW} alt="Logo Divine Finances & Conseils" className="img-fluid"/>
                        </div>
                        <ul className="d-lg-flex justify-content-center align-content-center">
                            <li><a href="#">Présentation</a></li>
                            <li><a href="#">Equipe</a></li>
                            <li><a href="#">Métiers</a></li>
                            <li><a href="#">Réalisations</a></li>
                            <li><a href="#">Recrutement</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </Container>
                </div>
                <div className="copyright">
                    <Container>
                        <Row>
                            <Col sm={12} md={8} className="copy">
                                &copy; Copyright 2021, <a href="https://divinefinancesci.com/">Divine Finances Conseils SA</a> |
                                Tous droits réservés
                            </Col>
                            <Col sm={12} md={4} className="powered text-md-end text-sm-center">
                                By <a href="https://dreammaker-ci.com">DREAM MAKER</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <div
                className="scroll-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{ display: isMenuFixed ? "block" : "none" }}
            >
                <TfiArrowCircleUp/>
            </div>
        </div>
    )
}
export default function () {

    return <RouterProvider router={router} />
}