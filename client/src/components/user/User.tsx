import React from 'react';
import s from "./user.module.scss";
import {logout} from "../../redux/slices/auth";
import user from '../../images/user.png'
import {useAppDispatch} from "../../redux/hook/hook";
import {Link, useNavigate} from "react-router-dom";

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
                <Link className={s.linkUser} to={`/auth/user/${userData._id}`} reloadDocument={true}>
                    <div className={s.linkUserWrapper}>
                        <div className={s.userLogin}><img className={s.userLoginIcon} src={userData.avatarUrl ? `http://localhost:3157${userData.avatarUrl}` : user} alt="user"/></div>
                        <span className={s.userName}>{userData.name ? userData.name : userData.fullName}</span>
                    </div>
                </Link>

            </div>
            <button className={s.userLogout} type={'submit'} onClick={onClickLogout}>Выйти</button>
        </div>
    );
};