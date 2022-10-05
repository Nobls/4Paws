import React from 'react';
import s from './modalServices.module.scss'
import ButtonStandart from "../buttonStandart/ButtonStandart";

type PropsType = {
    alt: string
    image: any
    title: string
    date: boolean
    description: string
    modalActive: boolean
    setModalActive: (modalActive: boolean) => void
}

export const ModalServices = ({alt, image, title, date, description, modalActive, setModalActive,}: PropsType) => {
    return (
        <div className={modalActive ? `${s.modal} ${s.active}` : s.modal} onClick={() => setModalActive(!modalActive)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <h3 className={s.modalTitle}>{title}</h3>
                <div className={s.modalContentInner}>
                    <img className={s.modalImg} src={image} alt={alt}/>
                    <p className={s.modalDescription}>{description}</p>
                </div>

                {
                    date ?
                        <div>OLOLO</div>
                        :
                        <div>TROLOLO</div>
                }


                <div className={s.orderService}>
                    <ButtonStandart title={'Заказать услугу'}/>
                </div>
            </div>
        </div>
    );
};