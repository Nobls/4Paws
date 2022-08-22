import React from 'react';
import s from './aboutUs.module.scss';
import paw from '../../images/Vector2.png';
import {Link} from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <div className={s.aboutUsBg}>
                <h1 className={s.aboutUsTitle}>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. <br/> Doloremque, minima.</h1>
                <Link className={s.aboutUsButton} to={'/'}>
                    <span>Связаться с нами</span>
                    <img src={paw} alt=""/>
                </Link>
            </div>
            <div>
                <h1>Services</h1>
                <h1>Services</h1>
                <h1>Services</h1>
                <h1>Services</h1>
                <h1>Services</h1>
                <h1>Services</h1>
                <h1>Services</h1>
                <h1>Services</h1>
            </div>
        </div>
    );
};

export default AboutUs;