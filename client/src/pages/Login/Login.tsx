import React from 'react';
import s from "./login.module.scss";
import {Link, useNavigate, Navigate} from "react-router-dom";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {fetchAuth, selectedIsAuth} from "../../redux/slices/auth";

interface FormValues {
    email: string
    password: string
}

const Login = () => {

    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(selectedIsAuth)

    const {
        register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isValid
        }
    } = useForm({
        defaultValues: {
            email: 'mail@mail.com',
            password: '12345',
        },
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        const data = await dispatch(fetchAuth(values))
        console.log(data)
        if (!data.payload) {
            return alert('Не удалось авторизоваться!')
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        }
    }

    /*const onSubmit: SubmitHandler<FormValues> = data => dispatch(fetchAuth(values));*/

    console.log(errors,
        isValid)

    const navigate = useNavigate()

    /*const userAccount = () => {
        navigate('/usersAccount')
    }*/

    if (isAuth) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <div className={s.loginContent}>
                <h2 className={s.loginContentTitle}>Вход</h2>

                <form action="/client/src/pages" className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.inputWrapper}>
                        <input type={"text"} placeholder="E-mail" {...register('email', {required: 'Укажите почту'})}/>
                        <input type={"text"}
                               placeholder="Пароль" {...register('password', {required: 'Укажите пароль'})}/>
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
                        <div className={s.buttonLogin}>
                            <ButtonStandart title={'Войти'}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;