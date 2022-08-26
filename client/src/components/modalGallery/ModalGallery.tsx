import React from 'react';
import s from './modalGallery.module.scss'


type PropsType = {
    modal: boolean
    setModal: any
}

export const ModalGallery = ({ modal, setModal}: PropsType) => {

    const onClickHandler = () => {
        setModal(!modal)
    }

    return (
        <div className={s.modalWrapper}>

        </div>
    );
};

