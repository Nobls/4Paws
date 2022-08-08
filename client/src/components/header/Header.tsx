import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logo.png"
import s from './header.module.scss'
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <div className={s.headerBg}>
            <div className={s.containerHeader}>
                <div className={s.wrapperHeader}>

                    <Link className={s.innerLogo} to={'/'}>
                        <img className={s.logo} src={logo} alt="logo"/>
                        <p className={s.slogan}>С заботой <br/> о вашем питомце</p>
                    </Link>

                    <div className={s.innerHeader}>
                        <div className={s.wrapperInformationBlock}>
                            {/*<div className={s.innerSearch}>*/}
                            {/*    <input className={s.inputSearch} type="text" placeholder={'search'}/>*/}
                            {/*    <button className={s.buttonSearch}>Search</button>*/}
                            {/*</div>*/}
                            <div className={s.linkWrapper}>
                                <a className={s.link} href={'tel:+375291111111'}>+375-29-111-11-11</a>
                                <a className={s.link} href={'tel:+375291111122'}>+375-29-111-11-22</a>
                                {/*<a className={s.link} href={'mailto:revertagroup@gmail.com'}>revertagroup@gmail.com</a>*/}
                            </div>
                            <div>
                                <Link to={'#'}>
                                    Login
                                </Link>
                            </div>
                        </div>
                            <div className={s.line}></div>
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