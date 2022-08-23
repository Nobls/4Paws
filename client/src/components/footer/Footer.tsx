import React from 'react';
import {Link} from "react-router-dom";
import s from './footer.module.scss'
import logo from "../../images/logoNew2.png";
import Navigation from "../navigation/Navigation";
import iconViber from "../../images/icons/iconViber.svg";
import iconInstagram from "../../images/icons/iconInstagram.svg";
import iconTelegram from "../../images/icons/iconTelegram.svg";

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
                            <p>С заботой о <br/> ваших питомцах</p>
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
                    <div className={s.wrapperSocials}>
                        <Link to={"/"}>
                            <img className={s.socialIcon} src={iconInstagram} alt="InstagramIcon"/>
                        </Link>
                        <Link to={"/"}>
                            <img className={s.socialIcon} src={iconViber} alt="ViberIcon"/>
                        </Link>
                        <Link to={"/"}>
                            <img className={s.socialIcon} src={iconTelegram} alt="TelegramIcon"/>
                        </Link>
                    </div>

                </div>
            </div>
            <div className={s.protection}>Все права защищены © 2022 </div>
        </div>
    );
};

export default Footer;