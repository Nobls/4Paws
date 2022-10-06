import React from 'react';
import s from './customCheckbox.module.scss'

const CustomCheckbox = () => {
    return (
        <label className={s.check}>
            <input className={s.checkInput} type="checkbox"/>
            <span className={s.checkBox}>
            </span>
        </label>
    );
};

export default CustomCheckbox;