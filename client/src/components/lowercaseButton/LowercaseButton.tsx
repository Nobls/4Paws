import React from 'react';
import s from './lowercaseButton.module.scss'
import paw from "../../images/pawBig.png";

export type PropsType = {
    title: string;
    onclick?: () => void;
    allModalFunction?:()=> void
}

const LowercaseButton = ({title,allModalFunction}:PropsType) => {
    return (
        <div className={s.lowercaseButton} onClick={allModalFunction}>{title}<img src={paw} alt="paws"/></div>
    );
};

export default LowercaseButton;