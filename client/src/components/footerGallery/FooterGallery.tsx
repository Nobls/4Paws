import React, {useState} from 'react';
import {galleryFooter} from "../../data/data";
import {ModalGallery} from "../modalGallery/ModalGallery";
import s from './footerGallery.module.scss'

type PropsType = {
    id: number
    image: any
    alt: string
}

const FooterGallery = ({id, image, alt}: PropsType) => {

    const [modalGalleryActive, setModalGallery] = useState(false)
    const modalGalleryFilter = () => {
        galleryFooter.filter(f => f.id === id)
    }
    const allModalFunction = () => {
        setModalGallery(!modalGalleryActive)
        modalGalleryFilter()
    }

    return (
            <div key={id}>
                <div onClick={allModalFunction}>
                    <img className={s.imageGallery} src={image} alt={alt}/>
                </div>
                <ModalGallery
                    modalActive={modalGalleryActive}
                    setModalActive={setModalGallery}
                    key={id}
                    id={id}
                    image={image}
                    alt={alt}/>
            </div>
    );
};

export default FooterGallery;