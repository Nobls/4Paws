import React from 'react';
import s from './shopSidebar.module.scss';
import {Link} from "react-router-dom";
import paw from '../../images/pawBigWhite.png';

const ShopSidebar = () => {
    return (
        <div className={s.shopSidebar}>
            <ul className={s.shopSidebarItems}>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        <img className={s.shopSidebarPaw} src={paw} alt="paw"/>
                           Для собак
                    </li>
                </Link>

                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        <img className={s.shopSidebarPaw} src={paw} alt="paw"/>
                        Для котов
                    </li>
                </Link>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        <img className={s.shopSidebarPaw} src={paw} alt="paw"/>
                        Для грызунов
                    </li>
                </Link>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        <img className={s.shopSidebarPaw} src={paw} alt="paw"/>
                        Для птиц
                    </li>
                </Link>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        <img className={s.shopSidebarPaw} src={paw} alt="paw"/>
                        Для рыб
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default ShopSidebar;