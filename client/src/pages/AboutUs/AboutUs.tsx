import React from 'react';
import s from './aboutUs.module.scss';
import paw from '../../images/Vector1.png';

const AboutUs = () => {
    return (
        <div>
            <div className={s.aboutUsBg}>
                <h1>Services</h1>
                <a href="/">
                    <p>Связаться с нами</p>
                    <img src={paw} alt=""/>
                </a>
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