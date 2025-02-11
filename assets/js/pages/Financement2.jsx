import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Breadcrumb, Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import BgHead from "../components/BgHead";
import AOS from 'aos';
import {IoIosMail} from "react-icons/io";
import {GiRotaryPhone} from "react-icons/gi";
import {FaMapMarkerAlt} from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
// import docFinancement from "../doc/demande-de-financement-projet.pdf";

export default function () {
    const [validated, setValidated] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(true);
    const  [formData, setFormData] = useState({
        nom: '',
        ativite: ''
    });

    const [partenaireActive, setPartenaireActive] = useState(false);
    const [organismeActive, setOrganismeActive] = useState(false);

    useEffect(() => {
        AOS.init();
        document.title = "Demande de financement de projet";
    }, []);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.nom]: e.target.value });
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || !captchaValue) {
            event.preventDefault();
            event.stopPropagation();
            alert("Veuillez compléter le captcha avant de soumettre.");
        }

        setValidated(true);

        try {

            const response = await fetch('http://localhost:8000/api/email/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            alert(5845);

            const result = await response.json();
            alert(result.success || result.error);
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    const onCaptchaChange = (value) => {
        setCaptchaValue(value); // Set the captcha value when the user completes it
    };

    return (
        <div>
            <BgHead/>
            <section id="breadcrumb">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                        <Breadcrumb.Item active>Demande de financement</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </section>
            <section id="financement">
                <div className="financement">
                    <Container>
                        <Row className="row">
                            <Col className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                                <h2 className="text-center">Demande de financement de projet</h2>
                                <h4 className="text-center">VOUS AVEZ UN PROJET, VOUS RECHERCHEZ UN FINANCEMENT?</h4>
                                <h6 className="text-center">DIVINE FINANCES CONSEILS VOUS ACCOMPAGNE AVEC UN BESOIN REEL DE FINANCEMENT</h6>

                                <Row>
                                    <Col className="mt-5">
                                        <p>
                                            Les activités de DIVINE FINANCES CONSEILS en tant qu’intermédiaire en opérations de banque consistent à :
                                        </p>
                                        <ul>
                                            <li>Analyser vos besoins de financement auprès des institutions financières ;</li>
                                            <li>Vous conseillez sur d’autres sources de financement.</li>
                                        </ul>
                                        <p>
                                            Veuillez <a href="/doc/demande-de-financement-projet.pdf" download="demande-de-financement-projet.pdf">télécharger le document ici</a>
                                            , puis le remplir et l'envoyer à l'adresse <a href="mailto:infos@divinefinancesci.com">infos@divinefinancesci.com</a>
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}
