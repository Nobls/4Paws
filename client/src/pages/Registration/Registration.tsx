import React from 'react';
import s from "./registration.module.scss";
import {Link} from "react-router-dom";
import paw from "../../images/Vector2.png";


const Registration = () => {
    return (
        <div>
            <div className={s.registrationContent}>
                <div>
                    <h2>Регистрация</h2>
                </div>

                <form action="/client/src/pages" className={s.formWrapper}>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Login"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className={s.buttonWrapper}>
                        <span>
                            <Link to={"/userInfo"} className={s.register}>Есть Аккаунт?</Link>
                        </span>
                        <button className={s.buttonRegistration}>
                            <span>Зарегистрироваться</span>
                            <img src={paw} alt="paw"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;