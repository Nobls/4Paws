import React, {useState} from 'react';
import s from './servicesCard.module.scss';
import {ServicesType} from "../../data/data";
import {ModalServices} from "../modalServices/ModalServices";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import LowercaseButton from "../lowercaseButton/LowercaseButton";

type PropsType = {
    id: number
    title: string
    image: any
    alt: string
    description: string
    descriptionModal: string
    services: ServicesType[]
}

export const ServicesCard = ({id, alt, image, title, description, services, descriptionModal}: PropsType) => {

    const order = 'Заказать'

    const [modalActive, setModalActive] = useState(false)
    const modalFilter = () => {
        services.filter(f => f.id === id)
    }
    const allModalFunction = () => {
        setModalActive(!modalActive)
        modalFilter()
    }

    return (
        <div key={id} className={s.servicesItem}>
            <h4 className={s.servicesItemTitle}>{title}</h4>
            <div className={s.servicesImage} style={{backgroundImage: `url(${image})`}}></div>
            <p className={s.servicesDescription}>{description}</p>
            <div className={s.buttonBlock}>
                <LowercaseButton title={'Узнать больше'} allModalFunction={allModalFunction}/>
                <ButtonStandart title={order}/>
            </div>

            <ModalServices
                modalActive={modalActive}
                setModalActive={setModalActive}
                alt={alt}
                image={image}
                title={title}
                description={descriptionModal}
            />
        </div>
    );
};