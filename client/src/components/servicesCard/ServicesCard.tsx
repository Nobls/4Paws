import React from 'react';
import s from './servicesCard.module.scss';
import ButtonStandart from "../buttonStandart/ButtonStandart";
import EditButtons from "../editPostButtons/EditButtuons";
import {User} from "../../redux/slices/posts";
import {Link, useNavigate} from "react-router-dom";
import LowercaseButton from "../lowercaseButton/LowercaseButton";
import {useAppDispatch} from "../../redux/hook/hook";
import {fetchRemoveServices} from "../../redux/slices/services";
import {toast} from "react-toastify";

type PropsType = {
    id?: string
    title?: string
    imageUrl?: any
    date?: boolean
    description?: string
    descriptionModal?: string
    user: User
    userData?: any
}

export const ServicesCard = ({id, imageUrl, title, description, userData, user}: PropsType) => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const order = 'Заказать'

    const removeServicesHandle = () => {
        try {
        dispatch(fetchRemoveServices(id))
            toast('Услуга была удалена.')
            navigate('/services')
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div className={s.servicesItem}>
            <h4 className={s.servicesItemTitle}>{title}</h4>
            <div className={s.servicesImage} style={{backgroundImage: `url(http://localhost:3157${imageUrl})`}}>
            </div>
            <p className={s.servicesDescription}>{description}</p>
            <div className={s.buttonBlock}>
                <Link className={s.linkMore} to={`/services/${id}`}>
                    <LowercaseButton title={'Узнать больше'}/>
                </Link>
                <ButtonStandart title={order}/>
            </div>
            <div className={s.editBtnWrapper}>
                <a href={`/services/${id}/edit`}>
                    <EditButtons
                        userData={userData}
                        user={user}
                        titleButton={'Редактировать'}
                    />
                </a>
                <EditButtons
                    userData={userData}
                    user={user}
                    removeNewsHandle={removeServicesHandle}
                    titleButton={'Удалить'}
                />
            </div>

        </div>
    );
};