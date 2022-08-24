import React from 'react';
import s from "./navigationFooter.module.scss";
import {NavLink} from "react-router-dom";

export const NavigationFooter = () => {
    return (
        <nav className={s.containerNav}>
            <h4>Ссылки</h4>
            <div className={s.wrapper}>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/'}>Главная</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/services'}>Услуги</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/shop'}>Магазин</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/news'}>Новости</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/about'}>О нас</NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/contacts'}>Контакты</NavLink>
            </div>
        </nav>
    );
};
