import React from 'react';
import s from "./login.module.scss";
import {Link} from "react-router-dom";
import paw from "../../images/Vector2.png";

type PropsType = {
    modalLoginActive: boolean
    setModalLoginActive: (modalLoginActive: boolean) => void
}

const Login = ({modalLoginActive, setModalLoginActive}: PropsType) => {

    return (
        <div className={modalLoginActive ? `${s.modalLogin} ${s.active}` : s.modalLogin}
             onClick={() => setModalLoginActive(!modalLoginActive)}>
            <div className={s.modalLoginContent} onClick={e => e.stopPropagation()}>
                <div>
                    <h2>Вход</h2>
                </div>

                <form action="/" className={s.formWrapper}>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder="Login"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className={s.buttonWrapper}>
                        <span>
                            <Link to={"/"} className={s.register}>Зарегистрироваться</Link>
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