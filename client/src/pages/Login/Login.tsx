import React from 'react';
import s from "./login.module.scss";
import {Link, useNavigate} from "react-router-dom";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";

const Login = () => {

    const navigate = useNavigate()

    const userAccount = () => {
        navigate('/usersAccount')
    }

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
                        <span>
                            <Link to={"/userInfo"} className={s.pageInfo}>!pageInfo</Link>
                        </span>
                        {/*<button className={s.buttonLogin}>
                            <span>Войти</span>
                            <img src={paw} alt="paw"/>
                        </button>*/}
                        <div className={s.buttonLogin} onClick={userAccount}>
                            <ButtonStandart title={'Войти'}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;