import React, {ChangeEvent} from 'react';
import s from './customCheckbox.module.scss'

export type PropsType = {
    checked: boolean
    setChecked: (checked:boolean) => void
}

const CustomCheckbox = ({checked, setChecked}:PropsType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let changeCheckbox = e.target.checked;
        setChecked(changeCheckbox)
        checked = changeCheckbox;
        console.log(checked)
    }

    return (
        <label className={s.check}>
            <input className={s.checkInput} type="checkbox" onChange={onChangeHandler}/>
            <span className={s.checkBox}>
            </span>
        </label>
    );
};

export default CustomCheckbox;