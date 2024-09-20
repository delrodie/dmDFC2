import React, {useEffect, useState} from 'react';
import {Breadcrumb, Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import BgHead from "../components/BgHead";
import AOS from 'aos';
import {IoIosMail} from "react-icons/io";
import {GiRotaryPhone} from "react-icons/gi";
import {FaMapMarkerAlt} from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

export default function () {
    const [validated, setValidated] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    useEffect(() => {
        AOS.init();
        document.title = "Nos réalisations";
    }, []);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false || !captchaValue) {
            event.preventDefault();
            event.stopPropagation();
            alert("Veuillez compléter le captcha avant de soumettre.");
        }

        setValidated(true);
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
                        <Breadcrumb.Item active>Contact</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </section>
            <section id="contact">
                <div className="contact">
                    <Container>
                        <Row className="row-cols-1 row-cols-lg-3" data-aos="fade-down" data-aos-duration="2500" data-aos-easing="ease-in-out">
                            <Col>
                                <h3><GiRotaryPhone/></h3>
                                <h4>Téléphone</h4>
                                <h5>
                                    <a href="tel:+2252722599268">+225 27 22 59 92 68</a>
                                </h5>
                            </Col>
                            <Col>
                                <h3><IoIosMail/></h3>
                                <h4>Email</h4>
                                <h5>
                                    <a href="mailto:infos@divinefinancesci.com">infos@divinefinancesci.com</a>
                                </h5>
                            </Col>
                            <Col>
                                <h3><FaMapMarkerAlt/></h3>
                                <h4>Localisation</h4>
                                <h5>
                                    <a href="https://maps.app.goo.gl/1AHdsKvHNtsqfVJz8" target="_blank">
                                        Cocody Mermoz - Imm. DIA 4è étage | Abidjan, Côte d'Ivoire
                                    </a>
                                </h5>
                            </Col>
                        </Row>
                        <Row className="formulaire">
                            <Col lg={6} xl={5} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration={2500}>
                                <h2>Ecrivez-nous</h2>
                                <p>Laissez nous votre message et nous vous contacterons sous peu.</p>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <FloatingLabel
                                        controlId="nom"
                                        label="Nom & Prénoms *"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="nom" required autoComplete="off" name="nom" />
                                        <Form.Control.Feedback type="invalid">
                                            Veuillez renseigner votre nom & prénoms
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Contact"
                                        className="mb-3"
                                    >
                                        <Form.Control type="tel" placeholder="contact" name="contact"/>
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="email"
                                        label="Adresse email *"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="email" name="email" autoComplete="off" required />
                                        <Form.Control.Feedback type="invalid">
                                            Veuillez entrer un email valide
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="objet"
                                        label="Objet *"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="objet" name="objet" required />
                                        <Form.Control.Feedback type="invalid">
                                            veuillez entrer l'objet de votre message
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                    <FloatingLabel controlId="message" label="Message *">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Message"
                                            style={{ height: '100px' }}
                                            name="message"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Veuillez entrer votre message
                                        </Form.Control.Feedback>
                                    </FloatingLabel>

                                    {/* reCAPTCHA Component */}
                                    <div className="my-4">
                                        <ReCAPTCHA
                                            sitekey="6LdrDUoqAAAAAAf2E3t-G5RM_dEBIh4f7eVyvE1u" // Remplacez par votre clé publique
                                            onChange={onCaptchaChange}
                                        />
                                    </div>

                                    <div className="d-grid gap-2 mt-5">
                                        <Button variant="primary" size="lg" type="submit">Envoyer</Button>
                                    </div>
                                </Form>
                            </Col>
                            <Col lg={6} xl={7} data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration={2500}>
                                <h2>Retrouvez nous</h2>
                                <p>Suivez cet itinéraire pour nous réjoindre</p>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5253101941994!2d-3.9973294999999998!3d5.3364612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb368fa0ff77%3A0xe73e079022e2dc21!2sDFC%20-%20Divine%20Finances%20Conseils!5e0!3m2!1sfr!2sci!4v1697444482169!5m2!1sfr!2sci"
                                    width="100%"
                                    height="450"
                                    style={{border: '0'}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
}
