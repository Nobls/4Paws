import React from 'react';
import s from './shop.module.scss';
import {Link} from "react-router-dom";

const Shop = () => {
    return (
        <div className={s.shopBg}>
            <div className={s.shopContainer}>
                <div className={s.shopWrapper}>

                    <div className={s.shopSidebar}>
                        <ul>
                            <li>
                                <Link to={'/'}>
                                    Для собак
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Для котов
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Для грызунов
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Для птиц
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Для рыб
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={s.shopCategory}>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;