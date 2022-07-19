import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logo.png"
import s from './header.module.scss'
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <div className={s.headerBg}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div>
                        <Link to={'/'}>
                            <img className={s.logo} src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <div>
                        <input type="text" placeholder={'search'}/>
                        <button>+</button>
                    </div>
                    <div className={s.linkWrapper}>
                        <a className={s.link} href={'tel:+375291111111'}>+375-29-111-11-11</a>
                        <a className={s.link} href={'tel:+375291111122'}>+375-29-111-11-22</a>
                        <a className={s.link} href={'mailto:revertagroup@gmail.com'}>revertagroup@gmail.com</a>
                    </div>
                    <div>
                        <Link to={'#'}>
                            <p>Login</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={s.navBg}>
                <Navigation/>
            </div>
        </div>
    );
};

export default Header;