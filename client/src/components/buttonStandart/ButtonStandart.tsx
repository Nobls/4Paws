import React from 'react';
import s from "./buttonStandart.module.scss";
import paw from "../../images/Vector2.png";

export type PropsType = {
    title: string;
    onclick?: () => void;
}

const ButtonStandart = ({title,onclick}:PropsType) => {
    return (
            <button type={'submit'} className={s.button} onClick={onclick}>
                <span>{title}</span>
                <img src={paw} alt="paw"/>
            </button>
    );
};

export default ButtonStandart;