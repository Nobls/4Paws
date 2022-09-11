import React from 'react';
import s from "./services.module.scss";
import {services} from "../../data/data";

const Services = () => {
    return (
        <div>
            <div className={s.servicesBg}>
                <h1 className={s.servicesTitle}>Счастливая жизнь <br/> <span className={s.servicesSpan}>вашего</span>любимого<br/>питомца.
                </h1>
            </div>
            <div>
                <h3 className={s.servicesSubTitle}>Наши Услуги</h3>
                <div className={s.servicesItems}>
                    {
                        services.map(m=>{
                            return (
                                <div key={m.id} className={s.servicesItem}>
                                    <h4>{m.title}</h4>
                                    <p>{m.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;