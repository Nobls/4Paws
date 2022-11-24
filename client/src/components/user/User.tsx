import React from 'react';
import s from "../header/header.module.scss";
import user from "../../images/user.png";
import {logout} from "../../redux/slices/auth";
import {useAppDispatch} from "../../redux/hook/hook";
import {useNavigate} from "react-router-dom";

type PropsType = {
    userData: any
}

export const User = ({userData}:PropsType) => {


    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const onClickLogout = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className={s.userWrapper}>
            <div className={s.userLoginWrapper}>
                <div className={s.userLogin}><img className={s.userLoginIcon} src={user} alt="user"/></div>
                <a href={`/auth/user/${userData._id}`}>
                    <span className={s.userName}>{userData.fullName}</span>
                </a>

            </div>
            <button className={s.userLogout} type={'submit'} onClick={onClickLogout}>Выйти</button>
        </div>
    );
};