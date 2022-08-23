import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logoNew2.png"
import s from './header.module.scss'
import Navigation from "../navigation/Navigation";
import iconInstagram from "../../images/icons/iconInstagram.svg";
import iconTelegram from "../../images/icons/iconTelegram.svg";
import iconViber from "../../images/icons/iconViber.svg";
import {Search} from "../search/Search";

const Header = () => {

    const [search, setSearch] = useState(false)
    const onclickSearchHandler = () => {
        setSearch(!search)
    }

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
                                {search && <Search search={search} setSearch={setSearch}/>}
                                <div  onClick={onclickSearchHandler}>
                                    Поиск
                                    <button>
                                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
                                             viewBox="0 0 30 30" aria-labelledby="searchIconTitle"
                                             fill="#eb5837"><title id="searchIconTitle">Search</title>
                                            <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                                                  id="XMLID_223_"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={s.linkWrapper}>
                                <div className={s.phoneWrapper}>
                                    <a className={s.linkPhone} href={'tel:+375291111111'}>+375-29-111-11-11</a>
                                    <a className={s.linkPhone} href={'tel:+375291111122'}>+375-29-111-11-22</a>
                                </div>

                                <Link className={s.link} to={"/"}>
                                    <img className={s.icon} src={iconInstagram} alt="InstagramIcon"/>
                                </Link>
                                <Link className={s.link} to={"/"}>
                                    <img className={s.icon} src={iconTelegram} alt="TelegramIcon"/>
                                </Link>
                                <Link className={s.link} to={"/"}>
                                    <img className={s.icon} src={iconViber} alt="ViberIcon"/>
                                </Link>
                            </div>
                            <Link className={s.linkLogin} to={'#'}>Войти</Link>
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