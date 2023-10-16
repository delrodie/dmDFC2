import React, {useEffect} from 'react';
import {LiaLongArrowAltRightSolid} from "react-icons/lia";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {Col} from "react-bootstrap";
import AOS from 'aos';

export default function () {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <div className="menu">
                <h4 className="sidebar-titre">Qui sommes-nous?</h4>
                <ul className="sidebar-liste">
                    <li>
                        <a href="/presentation">
                            <LiaLongArrowAltRightSolid/> Présentation
                        </a>
                    </li>
                    <li>
                        <a href="/notre-equipe">
                            <LiaLongArrowAltRightSolid/> Notre équipe
                        </a>
                    </li>
                    <li className="separateur"></li>
                    <li className="rubrique">
                        <a href="/nos-metiers/conseil-financier-et-strategique">
                            <LiaLongArrowAltRightSolid/> Nos métiers
                        </a>
                    </li>
                    <li className="rubrique">
                        <a href="/nos-realisations">
                            <LiaLongArrowAltRightSolid/> Notre performance
                        </a>
                    </li>
                    <li className="rubrique">
                        <a href="#">
                            <LiaLongArrowAltRightSolid/> Recrutement
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact">
                <h6>Nous contacter</h6>
                <div className="adresse">
                    <FaLocationDot/> <a href="https://maps.app.goo.gl/1AHdsKvHNtsqfVJz8" target="_blank">
                    Cocody Mermos - Imm. DIA | Abidjan, Côte d'Ivoire
                </a>
                </div>
                <div className="telephone">
                    <BsFillTelephoneFill/>
                    <a href="tel:+2252722599265"> +225 27 22 59 92 65</a>
                </div>
                <div className="email">
                    <GrMail/>
                    <a href="mailto:infos@divinefinancesci.com">
                        infos@divinefinancesci.com
                    </a>
                </div>
            </div>
        </div>
    );
}