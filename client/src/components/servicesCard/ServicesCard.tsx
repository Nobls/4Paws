import React, {useState} from 'react';
import s from './servicesCard.module.scss';
import {ServicesType} from "../../data/data";
import {ModalServices} from "../modalServices/ModalServices";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import LowercaseButton from "../lowercaseButton/LowercaseButton";

type PropsType = {
    id?: string
    title?: string
    imageUrl?: any
    date?: boolean
    description?: string
    descriptionModal?: string
    userData?: any
    services?: ServicesType[]
}

export const ServicesCard = ({id, imageUrl, date,title,services, description, descriptionModal}: PropsType) => {

    const order = 'Заказать'

    const [modalActive, setModalActive] = useState(false)
    /*const modalFilter = () => {
        services.filter(f => f.id === id)
    }*/
    /*const allModalFunction = () => {
        setModalActive(!modalActive)
        modalFilter()
    }*/

    return (
        <div key={id} className={s.servicesItem}>
            <h4 className={s.servicesItemTitle}>{title}</h4>
            <div className={s.servicesImage} style={{backgroundImage: `url(http://localhost:3157${imageUrl})`}}>
            </div>
            <p className={s.servicesDescription}>{description}</p>
            <div className={s.buttonBlock}>
                {/*<LowercaseButton title={'Узнать больше'} allModalFunction={allModalFunction}/>*/}
                <ButtonStandart title={order}/>
            </div>

            {/*<ModalServices
                modalActive={modalActive}
                setModalActive={setModalActive}
                alt={alt}
                image={image}
                date={date}
                title={title}
                description={descriptionModal}
            />*/}
        </div>
    );
};