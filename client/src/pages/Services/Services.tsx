import React from 'react';
import s from "./services.module.scss";
import {services} from "../../data/data";
import {ServicesCard} from "../../components/servicesCard/ServicesCard";
import Reviews from "../../components/reviews/Reviews";
import paw from "../../images/Vector2.png";

const Services = () => {

    return (
        <div>
            <div className={s.servicesBg}>
                <h1 className={s.servicesTitle}>Счастливая жизнь <br/> <span className={s.servicesSpan}>вашего</span>любимого<br/>питомца.
                </h1>
            </div>
            <div>
                <h3 className={s.servicesSubTitle}>Наши Услуги</h3>
                <div className={s.servicesItems} >
                    {
                        services.map(m=>{
                            return (
                                <ServicesCard
                                    key={m.id}
                                    id={m.id}
                                    title={m.title}
                                    image={m.image}
                                    alt={m.alt}
                                    description={m.description}
                                    descriptionModal={m.descriptionModal}
                                    services={services}
                                />
                            )
                        })
                    }
                    <div className={s.servicesFeedbackWrapper}>
                        <h3 className={s.servicesFeedbackTitle}>Оставить отзыв</h3>
                        <form className={s.servicesFeedbackFrom} action="">
                            <textarea className={s.servicesFeedbackTextarea} name="Ваш отзыв" rows={5} placeholder={'Ваш отзыв'}></textarea>
                            <button className={s.servicesFeedbackButton}>
                                <span>Оставить отзыв</span>
                                <img src={paw} alt="paw"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Reviews/>
        </div>
    );
};

export default Services;