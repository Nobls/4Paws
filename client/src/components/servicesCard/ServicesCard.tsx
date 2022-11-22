import React from 'react';
import s from './servicesCard.module.scss';
import ButtonStandart from "../buttonStandart/ButtonStandart";
import EditButtons from "../editPostButtons/EditButtuons";
import {User} from "../../redux/slices/posts";
import {Link} from "react-router-dom";
import LowercaseButton from "../lowercaseButton/LowercaseButton";

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

    const order = 'Заказать'

    return (
        <div className={s.servicesItem}>
            <h4 className={s.servicesItemTitle}>{title}</h4>
            <div className={s.servicesImage} style={{backgroundImage: `url(http://localhost:3157${imageUrl})`}}>
            </div>
            <p className={s.servicesDescription}>{description}</p>
            <div className={s.buttonBlock}>
                <Link to={`/services/${id}`}>
                    <LowercaseButton title={'Узнать больше'}/>
                </Link>
                <ButtonStandart title={order}/>
            </div>
            <a href={`/services/${id}/edit`}>
                <EditButtons
                    userData={userData}
                    user={user}
                    titleButton={'Редактировать'}
                />
            </a>
        </div>
    );
};