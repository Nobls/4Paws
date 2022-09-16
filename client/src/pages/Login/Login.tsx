import React from 'react';
import s from "./login.module.scss";
import {Link} from "react-router-dom";
import paw from "../../images/Vector2.png";

const Login = () => {

    return (
        <div>
            <div className={s.loginContent}>
                    <h2 className={s.loginContentTitle}>Вход</h2>

                <form action="/client/src/pages" className={s.formWrapper}>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder="E-mail"/>
                        <input type="password" placeholder="Пароль"/>
                    </div>
                    <div className={s.buttonWrapper}>
                        <span>
                            <Link to={"/registration"} className={s.register}>Зарегистрироваться</Link>

                        </span>
                        <button className={s.buttonLogin}>
                            <span>Войти</span>
                            <img src={paw} alt="paw"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;