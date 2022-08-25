import React from 'react';
import s from './modalGallery.module.scss'


type PropsType = {
    modal: boolean
    setModal: any
    id: number
    image:any
    alt:string
}

export const ModalGallery = ({image,alt, modal, setModal}: PropsType) => {

    const onClickHandler = () => {
        setModal(!modal)
    }

    return (
        <div className={s.modalWrapper}>
            <img src={image} alt={alt}/>
            <button onClick={onClickHandler}>X</button>
        </div>
    );
};

