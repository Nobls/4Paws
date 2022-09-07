import React from 'react';
import s from './ourPartners.module.scss';
import {ourPartners} from "../../data/data";

const OurPartners = () => {
    return (
        <div className={s.ourPartnersBg}>
            <h4 className={s.ourPartnersTitle}>Наши партнеры</h4>
            <div className={s.ourPartnersWrapper}>
                {
                    ourPartners.map(m => {
                        return (
                                <a href={m.link} target='_blank' key={m.id}>
                                    <div key={m.id}>
                                        <img className={s.partnersLogo} src={m.img} alt={m.alt}/>
                                    </div>
                                </a>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OurPartners;