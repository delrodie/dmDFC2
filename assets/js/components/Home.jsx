import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Col, Container, Nav, Navbar, NavDropdown, Row, Offcanvas, Card} from "react-bootstrap";
import logo from '../../images/logo/logo.png';
import logoSVG from '../../images/logo/logo.svg';
import {TfiArrowCircleUp} from "react-icons/tfi";
import slide1 from '../../images/slide/05.png';
import slide2 from '../../images/slide/02.png';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {GiReceiveMoney} from "react-icons/gi";
import {FaChalkboardUser} from "react-icons/fa6";
import metier1 from '../../images/metiers/01-metier.jpg';
import metier2 from '../../images/metiers/02-metier.jpg';
import metier3 from '../../images/metiers/03-metier.jpg';
import {BsArrowRight} from "react-icons/bs";
import performance from '../../images/realisations/02.jpeg'
import {TbPigMoney} from "react-icons/tb";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profileKone from '../../images/equipe/01-kone.jpg';
import profileNdri from '../../images/equipe/dga.jpg';
import profileGustave from '../../images/equipe/02-gustave.jpg';
import profileSylla from '../../images/equipe/03-sylla.jpg';
import logoBW from '../../images/logo/bw_logo.png';
import {Helmet} from "react-helmet";
import {NavLink} from "react-router-dom";
import {BeatLoader} from "react-spinners";
import {CircleSpinnerOverlay} from "react-spinner-overlay";
import LazyLoad from 'react-lazyload';

export default function () {
    const [maxCharacters, setMaxCharacters] = useState(80);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        AOS.init();

        setLoading(false)
        setIsLoading(false);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuFixed, setIsMenuFixed] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 100) {
            setIsMenuFixed(true);
        } else {
            setIsMenuFixed(false);
        }
    };

    // Resumé domaine
    const contentIngenierie = "Nous proposons des services sur mesure répondant aux besoins de nos clients (organisation des flux financiers intergroupe, reclassement de participations, valorisation et développement stratégique des entreprises) et toute autres opérations susceptibles de renforcer la capacité de nos clients à lever des Fonds et à renforcer la rentabilité de leurs investissements.";
    const truncatedContentIngenierie = `${contentIngenierie.substring(0, maxCharacters)}...`;

    const contentLevee = "Nous assistons et aidons nos clients dans les négociations avec les bailleurs de fonds et autres investisseurs (private Equity, quasi-equity, dettes...).";
    const truncatedContentLevee = `${contentLevee.substring(0, maxCharacters)}...`;

    const contentConseils = "Nous assistons et accompagnons nos clients dans toutes les opérations de restructuration financière, analyse de perspective de développement, etc.";
    const truncatedContentConseils = `${contentConseils.substring(0, maxCharacters)}...`;



    const puceFinance = () =>
        (<svg className="puce-finance" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 11v.01"></path>
            <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377"></path>
            <path d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z"></path>
        </svg>);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <meta name="keywords" content="Finances, economiques, conseils, fonds" />
                <meta name="description" content="Un partenaire crédible dans le conseil financier et stratégique." />
                <link rel="canonical" href="https://divinefinancesci.com/" />
                <link rel="next" href=" https://divinefinancesci.com/" />

                <meta property="og:locale" content="fr_FR" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Divine Finances Conseils" />
                <meta property="og:description" content="Un partenaire crédible dans le conseil financier et stratégique." />
                <meta property="og:url" content="http://divinefinancesci.com/" />
                <meta property="og:site_name" content="Divine Finances Conseils" />
                <meta property="article:modified_time" content="2023-10-17T11:08:30+00:00" />
                <meta property="og:image" content={logo} />
                <meta property="og:image:type" content="image/svg+xml" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Un partenaire crédible dans le conseil financier et stratégique."/>
                <meta name="twitter:title" content="Divine Finances Conseils"/>
                <meta name="twitter:domain" content="Un partenaire crédible dans le conseil financier et stratégique."/>
                <meta name="twitter:image:src" content={logo}/>

            </Helmet>
            <section id="carousel">
                <Carousel fade controls={false} interval={7000}>
                    <Carousel.Item>
                        <img
                            src={slide1}
                            alt="Slide 1"
                            className="d-block w-100"
                            loading="lazy"
                        />
                        <Carousel.Caption>
                            {/*<h6>Divine Finance Conseil</h6>*/}
                            <h3>Finances</h3>
                            <p>
                                Nous accompagnons les entreprises avec des solutions concrètes aux problématiques
                                de levée de fonds, d’optimisation financière, de structuration et de restructuration
                                financière.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={slide2}
                            alt="Slide 2"
                            className="d-block w-100"
                            loading="lazy"
                        />
                        <Carousel.Caption>
                            {/*<h6>Divine finances &</h6>*/}
                            <h3>Conseils</h3>
                            <p>
                                Un partenaire crédible dans le conseil financier et stratégique en Côte d'Ivoire
                                dans des secteurs clés de l’économie tels que l’agro-industrie, les travaux publics,
                                l’électricité, les services financiers, l’immobilier…
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section id="accroche">
                <div className="accroche">
                    <Row>
                        <Col sm={6} className="label" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="2000">
                            <span>Divine Finances Conseils</span>, agréée
                        </Col>
                        <Col sm={6} className="iob" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="2000">
                            <p>
                                Intermédiaire en Opération de Banque <br/> (IOB N°: <u>CI 00004/IOB/2022</u>)
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>
            <section id="domaines">
                <div className="domaine">
                    <Container fluid="lg">
                        <Row className="">
                            <Col lg={4} className="domaine-block" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <NavLink to='/nos-metiers/ingenierie-financiere'>
                                    <h3 className="titre">
                                        <RiMoneyDollarCircleFill/>
                                        Ingénierie Financière
                                    </h3>
                                    <div className="content">
                                        <p>{truncatedContentIngenierie}</p>
                                    </div>
                                </NavLink>
                            </Col>
                            <Col lg={4} className="domaine-block" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <NavLink to="/nos-metiers/levee-de-fonds">
                                    <h3 className="titre">
                                        <GiReceiveMoney/>
                                        Levée de fonds
                                    </h3>
                                    <div className="content">
                                        <p>{truncatedContentLevee}</p>
                                    </div>
                                </NavLink>
                            </Col>
                            <Col lg={4} className="domaine-block" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <NavLink to="/nos-metiers/conseil-financier-et-strategique">
                                    <h3 className="titre">
                                        <FaChalkboardUser/>
                                        Conseils
                                    </h3>
                                    <div className="content">
                                        <p>{truncatedContentConseils}</p>
                                    </div>
                                </NavLink>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section id="metiers">
                <div className="metier">
                    <Container fluid="lg">
                        <h1>Nos métiers</h1>

                        <Row className="row-cols-1 row-cols-lg-3 g-4">
                            <Col data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <NavLink to="/nos-metiers/conseil-financier-et-strategique">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={metier1} />
                                        <Card.Body>
                                            <Card.Title>
                                                Conseil financier et stratégique
                                            </Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>Restructuration financière</li>
                                                    <li>Analyse de perspective de développement</li>
                                                    <li>Elaboration ou revue de plan d'affaires</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="text-end">
                                            <BsArrowRight/>
                                        </div>
                                    </Card>
                                </NavLink>
                            </Col>
                            <Col data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <NavLink to="/nos-metiers/levee-de-fonds">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={metier2} />
                                        <Card.Body>
                                            <Card.Title>
                                                Levée de fonds
                                            </Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>Financements structurés</li>
                                                    <li>Financement de projet</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="text-end">
                                            <BsArrowRight/>
                                        </div>
                                    </Card>
                                </NavLink>
                            </Col>
                            <Col data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <NavLink to="/nos-metiers/ingenierie-financiere">
                                    <Card className="h-100">
                                        <Card.Img variant="top" src={metier3} />
                                        <Card.Body>
                                            <Card.Title>
                                                Ingénierie financière
                                            </Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>Fusion - acquisition</li>
                                                    <li>Arrangement de financement</li>
                                                </ul>
                                            </Card.Text>

                                        </Card.Body>
                                        <div className="text-end">
                                            <BsArrowRight/>
                                        </div>
                                    </Card>
                                </NavLink>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section id="performance">
                <div className="performance">
                    <Container fluid="lg">
                        <Row>
                            <Col md={7} xl={6} className="performance-liste" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <h1>Nos performances</h1>
                                <ul>
                                    <li>
                                        {puceFinance()} Levée de fonds de <span>25 millions d'euro</span>
                                    </li>
                                    <li className="puce-principale">
                                        {puceFinance()} Restructuration organisationnelle de <span> deux conglemérats de dix (10) sociétés chacun </span>

                                        <ul>
                                            <li>{puceFinance()} Rédaction des procédures de fonctionnement du groupe,</li>
                                            <li>{puceFinance()} Certification des comptes de toutes les filiales et leur consolidation comptable au sein de la holding,</li>
                                            <li>{puceFinance()} Rédaction et la revue des conventions et contrats entre la holding et les filiales</li>
                                            <li>{puceFinance()} Rédaction du business plan du groupe</li>
                                            <li>{puceFinance()} Valorisation des fonds propres de toutes les filiales et de la holding</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Valorisation des fonds propres
                                    </li>
                                    <li>
                                        Réalisation de Business Plan
                                    </li>
                                </ul>
                            </Col>
                            <Col md={5} xl={6} className="illustration" data-aos="zoom-out" data-aos-easing="ease-in-out" data-aos-duration="2500">
                                <img src={performance} alt="Notre performance" className="img-fluid" loading="lazy"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section id="equipe">
                <div className="equipe">
                    <Container fluid="lg">
                        <h1>Notre équipe</h1>
                        <Row className="g-3" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="2500">
                            <Slider {...settings}>
                                <Col className="profile">
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
                                <Col className="profile">
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
                                <Col className="profile">
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
                                <Col className="profile">
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
                            </Slider>
                        </Row>
                    </Container>
                </div>
            </section>
            {isLoading ? (
                <div className="loading-animation">
                    <CircleSpinnerOverlay/>
                </div>
            ): null}
        </div>
    )
}