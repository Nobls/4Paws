import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logoNew.png"
import s from './header.module.scss'
import Navigation from "../navigation/Navigation";
import iconPhone from "../../images/icons/iconPhone50.png";
import iconInstagram from "../../images/icons/iconInstagram50.png";
import iconTelegram from "../../images/icons/iconsTelegram50.png";

const Header = () => {
    return (
        <div className={s.headerBg}>
            <div className={s.containerHeader}>
                <div className={s.wrapperHeader}>
                    <Link className={s.innerLogo} to={'/'}>
                        <img className={s.logo} src={logo} alt="logo"/>
                        {/*<p className={s.slogan}>С заботой <br/> о вашем питомце</p>*/}
                    </Link>
                    <div className={s.innerHeader}>
                        <div className={s.wrapperInformationBlock}>
                            <div className={s.innerSearch}>
                                <input className={s.inputSearch} type="text" placeholder={'Найти на сайте'}/>
                                <button className={s.buttonSearch}>Поиск</button>
                            </div>
                            <div className={s.linkWrapper}>
                                <img className={s.icon} src={iconPhone} alt="phone"/>
                                <a className={s.link} href={'tel:+375291111111'}>+375-29-111-11-11</a>
                                <a className={s.link} href={'tel:+375291111122'}>+375-29-111-11-22</a>
                                <Link className={s.link} to={"/"}>
                                    <img className={s.icon} src={iconInstagram} alt="InstagramIcon"/>
                                </Link>
                                <Link className={s.link} to={"/"}>
                                    <img className={s.icon} src={iconTelegram} alt="TelegramIcon"/>
                                </Link>
                                {/*<a className={s.link} href={'mailto:revertagroup@gmail.com'}>revertagroup@gmail.com</a>*/}
                            </div>
                            <Link className={s.linkLogin}  to={'#'}>Войти</Link>
                            {/*<Link className={s.linkLogin}  to={'#'}>
                                <div>
                                    <p>Войти</p>
                                </div>

                            </Link>*/}
                        </div>
                        <div>
                            <Navigation/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;