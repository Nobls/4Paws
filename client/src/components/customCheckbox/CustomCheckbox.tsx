import React from 'react';
import s from './customCheckbox.module.scss'

const CustomCheckbox = () => {
    return (
        <label htmlFor="symbols">
            <input type={"checkbox"} id="symbols" className={s.customCheckbox}/>
            <label htmlFor="symbols"></label>
        </label>
        /*<div className={s.checkboxes}>
            <input id="a" type="checkbox"/>
            <label className={s.greenBackground} htmlFor="a"></label>
        </div>*/
    );
};

export default CustomCheckbox;