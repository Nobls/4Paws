import React from 'react';
import {NavLink} from "react-router-dom";
import s from './navigation.module.scss'

const Navigation = () => {

    // const isActive = ({isActive})=>isActive ? `${s.activeLink}`: `${s.link}`

    return (
            <nav className={s.containerNav}>
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

export default Navigation;