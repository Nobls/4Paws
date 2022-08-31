import React from 'react';
import s from './ourTeam.module.scss';
import {ourTeam} from "../../data/data";
import paw from '../../images/ourTeam/paw.png';

const OurTeam = () => {
    return (
        <>
            <div>
                <h3 className={s.ourTeamTitle}>Наша команда</h3>
            </div>
            <div className={s.ourTeamContainer}>

                {
                    ourTeam.map(m => {
                        return (
                            <div key={m.id} className={s.ourTeamCardWrapper}>
                                <img className={s.paw} src={paw} alt="paw"/>
                                <div className={s.ourTeamPhotoWrapper}>
                                    <img className={s.ourTeamPhoto} src={m.image} alt={m.alt}/>
                                </div>
                                <div className={s.ourTeamInformation}>
                                    <h4>{m.name}</h4>
                                    <p>{m.description}</p>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </>
    );
};

export default OurTeam;