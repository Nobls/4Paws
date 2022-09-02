import React from 'react';
import {advantage} from "../../data/data";
import s from './advantage.module.scss';
import vector from '../../images/Vector2.png'

export const Advantage = () => {
    return (
        <div className={s.advantage}>

            {/*<h3 className={s.title}>Наши преимущества</h3>*/}

            <div className={s.advantageWrapper}>

                {
                    advantage.map(m => {
                        return (
                            <div className={s.advantageItems} key={m.id}>
                                <div className={s.iconsWrapper}>
                                    <img className={s.advantageIcon} src={m.icon} alt={m.alt}/>
                                    <img className={s.paw} src={vector} alt="paw"/>
                                </div>
                                <div>
                                    <h3>{m.title}</h3>
                                    <p className={s.description}>{m.description}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>

    );
};

