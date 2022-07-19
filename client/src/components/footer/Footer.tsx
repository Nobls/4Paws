import React from 'react';
import {Link} from "react-router-dom";
import s from './footer.module.scss'
import logo from "../../images/logo.png";
import Navigation from "../navigation/Navigation";

const Footer = () => {
    return (
        <div className={s.footerBg}>
            <div className={s.wrapper}>
                <div>
                    <div className={s.wrapperLogo}>
                        <Link to={'/'}>
                            <img className={s.logo} src={logo} alt="logo"/>
                        </Link>
                        <div>
                            <p>Pet Friend</p>
                            <span className={s.protection}>Все права защищены © </span>
                        </div>
                    </div>
                </div>
                <div className={s.footerNav}>
                    <Navigation/>
                </div>
                <div className={s.wrapperLink}>
                    <a className={s.link} href={'tel:+375291111111'}>+375-29-111-11-11</a>
                    <a className={s.link} href={'tel:+375291111122'}>+375-29-111-11-22</a>
                    <a className={s.link} href={'mailto:revertagroup@gmail.com'}>revertagroup@gmail.com</a>
                    <a className={s.link} href="">Instagram</a>
                    <a className={s.link} href="">Viber</a>
                    <a className={s.link} href="">VK</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;