import React, {ChangeEvent} from 'react';
import s from './customCheckbox.module.scss'

export type PropsType = {
    checked: boolean
    setChecked: (checked:boolean) => void
}

const CustomCheckbox = ({checked, setChecked}:PropsType) => {

    const abc = (e:ChangeEvent<HTMLInputElement>) => {
        let changeABC = e.target.checked;
        setChecked(changeABC)
        checked = changeABC;
        console.log(checked)
    }

    return (
        <label className={s.check}>
            <input className={s.checkInput} type="checkbox" onChange={abc}/>
            <span className={s.checkBox}>
            </span>
        </label>
    );
};

export default CustomCheckbox;