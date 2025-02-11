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
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <FloatingLabel
                                                controlId="nom"
                                                label="Nom de l'entreprise *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="nom" required autoComplete="off"
                                                              name="nom" onChange={handleChange}/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez renseigner le nom de votre entreprise
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Actvité *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Activité" name="activite"
                                                              required autoComplete="off"/>
                                            </FloatingLabel>
                                            <FloatingLabel
                                                controlId="dateCreation"
                                                label="Date de création *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="date" placeholder="Date" name="dateCreation"
                                                              autoComplete="off" required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer la date de création
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                            <FloatingLabel
                                                controlId="chiffreAffaire"
                                                label="Chiffre d'affaires des trois (3) dernières années *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Chiffre d'affaire"
                                                              name="chiffreAffaire" required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer le chiffre d'affaires des trois (3) dernières années
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="siege"
                                                label="Siège *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Siège" name="siege" required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Siège
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <ul className="mt-5">
                                                <li><strong>INFORMATIONS SIGNATAIRE(S)</strong></li>
                                            </ul>

                                            <FloatingLabel
                                                controlId="nomDemandeur"
                                                label="Nom et prenoms du demandeur *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Nom" name="nomDemandeur"
                                                              required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Nom et prenoms du demandeur
                                                </Form.Control.Feedback>
                                            </FloatingLabel>


                                            <FloatingLabel
                                                controlId="qualite"
                                                label="Qualité *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Qualité" name="qualite"
                                                              required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer votre qualité
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="email"
                                                label="Email *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="email" name="email" required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer votre adresse email
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="telephone"
                                                label="Telephone *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="telephone" name="email"
                                                              required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer votre numéro de telephone
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <ul className="mt-5">
                                                <li><strong>DESCRIPTION DU PROJET</strong></li>
                                            </ul>

                                            <FloatingLabel
                                                controlId="titreProjet"
                                                label="Titre du projet *"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Titre du projet"
                                                              name="titreProjet"
                                                              required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer le titre de votre projet
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="decriptionProjet"
                                                label="Décrivez brièvement le projet proposé et les objectifs. *"
                                                className="mb-3"
                                            >
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder="Description du projet"
                                                    style={{height: '200px'}}
                                                    name="message"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez décrire brièvement le projet proposé et les objectifs.
                                                </Form.Control.Feedback>
                                            </FloatingLabel>


                                            <FloatingLabel
                                                controlId="montantProjet"
                                                label="Montant total demandé pour mener à bien ce projet (Veuillez estimer les coûts) :"
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Montant total du projet"
                                                              name="montantProjet"
                                                              required/>
                                                <Form.Control.Feedback type="invalid">
                                                    Veuillez entrer le montant total demandé pour mener à bien ce projet
                                                    (Veuillez estimer les coûts) :
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <ul className="mt-5">
                                                <li><strong>PARTENARIATS ET COLLABORATIONS</strong></li>
                                            </ul>

                                            <FloatingLabel
                                                controlId="projetPartenaire"
                                                label="Avez-vous des partenaires pour ce projet?"
                                                className="mb-3"
                                            >
                                                <Form.Select aria-label="Selectionnez vos partenaires"
                                                  onChange={(e) => setPartenaireActive(e.target.value === "OUI")}
                                                >
                                                    <option>-- Selectionnez --</option>
                                                    <option value="OUI">OUI</option>
                                                    <option value="NON">NON</option>
                                                </Form.Select>
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="nomPartenaire"
                                                label="Si oui, inscrivez le nom des partenaires avec qui vous travaillerez pendant le projet et leurs rôles."
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Nom du partenaire"
                                                              name="nomPartenaire"
                                                              disabled={!partenaireActive}/>
                                                <Form.Control.Feedback>
                                                    Si oui, inscrivez le nom des partenaires avec qui vous travaillerez pendant le projet et leurs rôles.
                                                </Form.Control.Feedback>
                                            </FloatingLabel>

                                            <ul className="mt-5">
                                                <li><strong>CO-FINANCEMENT(S)</strong></li>
                                            </ul>

                                            <FloatingLabel
                                                controlId="nomEtablissement"
                                                label="Le projet a-t-il été déjà présenté à un établissement financier ou un organisme pour financement ?"
                                                className="mb-3"
                                            >
                                                <Form.Select
                                                    aria-label="Selectionnez l'établissement"
                                                    onChange={(e) => setOrganismeActive(e.target.value === "OUI")}
                                                >
                                                    <option>-- Selectionnez --</option>
                                                    <option value="NON">NON</option>
                                                    <option value="OUI">OUI</option>
                                                </Form.Select>
                                            </FloatingLabel>

                                            <FloatingLabel
                                                controlId="nomOrganisme"
                                                label="Si oui, précisez le nom de l’établissement financier ou de l’organisme "
                                                className="mb-3"
                                            >
                                                <Form.Control type="text" placeholder="Nom de l'établissement financier"
                                                              name="nomOrganisme"
                                                              disabled={!organismeActive}/>
                                                <Form.Control.Feedback>
                                                    Si oui, précisez le nom de l’établissement financier ou de l’organisme
                                                </Form.Control.Feedback>
                                            </FloatingLabel>


                                            {/* reCAPTCHA Component */}
                                            <div className="my-4">
                                                <ReCAPTCHA
                                                    sitekey="6Le0JEoqAAAAACF2q2WURUHLowYBJTTE0TZMqDFh" // Remplacez par votre clé publique
                                                    onChange={onCaptchaChange}
                                                />
                                            </div>

                                            <div className="d-grid gap-2 mt-5">
                                                <Button variant="primary" size="lg" type="submit">Envoyer</Button>
                                            </div>
                                        </Form>
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
