import React from 'react';
import s from "./petProcedures.module.scss";
import ButtonStandart from "../buttonStandart/ButtonStandart";

type PropsType = {
    data: any
}

export const PetProcedures = ({data}:PropsType) => {

    console.log(data)
    return (
        <div className={s.petProcedures}>
            <h3 className={s.petProceduresTitle}>Процедуры</h3>
            <ol className={s.petProceduresItems}>
                <li className={s.petProceduresItem}>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                <li className={s.petProceduresItem}>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
                <li className={s.petProceduresItem}>Кастрация <span>Доктор Вет</span> <span>21.03.2022</span></li>
            </ol>
            <form className={s.petProceduresForm}>
                <label htmlFor="" className={s.petProceduresFormItem}>Дата<input type="date"
                                                                                 className={s.petProceduresFormItemDateInp}/></label>
                <label htmlFor="" className={s.petProceduresFormItem}>Процедура<input type="text"
                                                                                      className={s.petProceduresFormInput}/></label>
                <label htmlFor="" className={s.petProceduresFormItem}>Название клиники<input type="text"
                                                                                             className={s.petProceduresFormInput}/></label>
            </form>
            <div className={s.petAccountInfoBtnWrapper}>
                <ButtonStandart title={"Добавить"}/>
            </div>
        </div>
    );
};