import React, {useEffect} from 'react';
import s from "./login.module.scss";
import {Link, useNavigate} from "react-router-dom";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {fetchLogin, selectedIsAuth} from "../../redux/slices/auth";
import {toast} from "react-toastify";

interface FormValues {
    email: string
    password: string
}

const Login = () => {

    const dispatch = useAppDispatch()

    const {status} = useAppSelector((state) => state.auth)

    const isAuth = useAppSelector(selectedIsAuth)

    const navigate = useNavigate()

    useEffect(() => {
        if (status) {
            toast(status)
        }
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const {
        register,
        handleSubmit,
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
        const data = await dispatch(fetchLogin(values))
        console.log(data)
        if (!data.payload) {
            return alert('Не удалось авторизоваться!')
        }

        /*if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
        }*/
    }

    console.log(errors,
        isValid)

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