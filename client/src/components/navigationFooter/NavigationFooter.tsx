import React from 'react';
import s from "./navigationFooter.module.scss";
import {NavLink} from "react-router-dom";

export const NavigationFooter = () => {
    return (
        <nav className={s.containerNav}>
            <h4>Ссылки</h4>
            <div className={s.wrapper}>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/'}><span>Главная</span></NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/services'}><span>Услуги</span></NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/shop'}><span>Магазин</span></NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/news'}><span>Новости</span></NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/about'}><span>О нас</span></NavLink>
                <NavLink className={({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`} to={'/contacts'}><span>Контакты</span></NavLink>
            </div>
        </nav>
    );
};
