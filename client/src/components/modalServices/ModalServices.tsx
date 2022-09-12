import React from 'react';
import s from './modalServices.module.scss'
import paw from "../../images/Vector2.png";

type PropsType = {
    alt: string
    image: any
    title: string
    description: string
    modalActive: boolean
    setModalActive: (modalActive: boolean) => void
}

export const ModalServices = ({alt, image, title, description, modalActive, setModalActive,}: PropsType) => {
    return (
        <div className={modalActive ? `${s.modal} ${s.active}` : s.modal} onClick={() => setModalActive(!modalActive)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <h3 className={s.modalTitle}>{title}</h3>
                <div className={s.modalContentInner}>
                    <img className={s.modalImg} src={image} alt={alt}/>
                    <p className={s.modalDescription}>{description}</p>
                </div>
                <button className={s.orderService}>
                    <span>Заказать услугу</span>
                    <img src={paw} alt="paw"/>
                </button>
            </div>
        </div>
    );
};