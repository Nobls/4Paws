import React from 'react';
import s from "./buttonStandart.module.scss";
import paw from "../../images/Vector2.png";

export type PropsType = {
    title: string;
}

const ButtonStandart = ({title}:PropsType) => {
    return (
        <div className={s.buttonWrapper}>
            <button className={s.button}>
                <span>{title}</span>
                <img src={paw} alt="paw"/>
            </button>
        </div>
    );
};

export default ButtonStandart;