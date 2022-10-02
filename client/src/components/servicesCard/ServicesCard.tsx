import React, {useState} from 'react';
import s from './servicesCard.module.scss';
import {ServicesType} from "../../data/data";
import {ModalServices} from "../modalServices/ModalServices";
import paw from "../../images/Vector2.png";
import ButtonStandart from "../buttonStandart/ButtonStandart";

type PropsType = {
    id: number
    title: string
    image: any
    alt: string
    description: string
    descriptionModal:string
    services: ServicesType[]
}

export const ServicesCard = ({id, alt, image, title, description, services,descriptionModal}: PropsType) => {

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
            <div className={s.servicesImage} style={{backgroundImage: `url(${image})`}}>
                {/*<img className={s.servicesImage} src={image} alt={alt}/>*/}
            </div>

            <p className={s.servicesDescription}>{description}</p>

            <div className={s.buttonBlock}>
                    {/*<button className={s.learnMore} onClick={allModalFunction}>*/}
                    {/*    <span>Узнать больше</span>*/}
                    {/*    <img src={paw} alt="paw"/>*/}
                    {/*</button>*/}
                <div style={{display:'flex'}}>
                    <div style={{display:'block'}}>
                        <ButtonStandart title={'Заказать'} />
                    </div>
                    <div style={{display:'block'}}>
                        <ButtonStandart title={'Узнать больше'} />
                    </div>
                </div>


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





















        // <div key={id} className={s.servicesItem}>
        //     <h4 className={s.servicesItemTitle}>{title}</h4>
        //     <img className={s.servicesImage} src={image} alt={alt}/>
        //     <p className={s.servicesDescription}>{description}</p>
        //     <ModalServices
        //         modalActive={modalActive}
        //         setModalActive={setModalActive}
        //         alt={alt}
        //         image={image}
        //         title={title}
        //         description={descriptionModal}
        //     />
        //     <button className={s.learnMore} onClick={allModalFunction}>
        //         <span>Узнать больше об услуге</span>
        //         <img src={paw} alt="paw"/>
        //     </button>
        // </div>
    );
};