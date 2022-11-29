import React from 'react';
import s from './shopSidebar.module.scss';
import {Link} from "react-router-dom";

const ShopSidebar = () => {
    return (
        <div className={s.shopSidebar}>
            <ul className={s.shopSidebarItems}>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        Для собак
                    </li>
                </Link>

                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        Для котов
                    </li>
                </Link>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        Для грызунов
                    </li>
                </Link>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        Для птиц
                    </li>
                </Link>
                <Link to={'/'} className={s.sidebarItemLink}>
                    <li className={s.shopSidebarItem}>
                        Для рыб
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default ShopSidebar;