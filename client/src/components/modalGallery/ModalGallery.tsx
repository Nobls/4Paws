import React from 'react';
import s from './modalGallery.module.scss'


type PropsType = {
    modalActive: boolean
    setModalActive: (modalActive: boolean) => void
    id: number
    image: any
    alt: string

}

export const ModalGallery = ({ modalActive, setModalActive, image, alt}: PropsType) => {

    return (
        <div className={modalActive ? `${s.modal} ${s.active}` : s.modal} onClick={() => setModalActive(!modalActive)}>
            <div className={s.modalGalleryContent} onClick={e => e.stopPropagation()}>
                <img className={s.imageGallery} src={image} alt={alt}/>
            </div>
        </div>
    );
};

