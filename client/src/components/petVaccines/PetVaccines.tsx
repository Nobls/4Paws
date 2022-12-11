import React from 'react';
import s from "./petVaccines.module.scss";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import {PetProceduresType} from "../../redux/slices/procedures";

type PropsType = {
    procedures: PetProceduresType[]
}


export const PetVaccines = ({procedures}:PropsType) => {
    return (
        <div className={s.petVaccinations}>
            <h3 className={s.petVaccinationsTitle}>Прививки</h3>
            {
                procedures.map((m,index)=> (
                    <ol key={index} className={s.petVaccinationsItems}>
                        <li className={s.petVaccinationsItem}>{m.typeVaccination} <span>{m.nameOfVaccine}</span> <span>{m.dateVaccination}</span>
                        </li>
                    </ol>
                ))
            }
            <form className={s.petVaccinationsForm}>
                <div className={s.petVaccinationsFormItemBlock}>
                    <label className={s.petVaccinationsFormItemType} htmlFor="">Тип прививки<input
                        className={s.petVaccinationsFormItemTypeInp} type="text"/></label>
                    <label className={s.petVaccinationsFormItemDate} htmlFor="">Дата<input
                        className={s.petVaccinationsFormItemDateInp} type="date"/></label>
                </div>
                <label className={s.petVaccinationsFormItem} htmlFor="">Название препарата<input
                    className={s.petVaccinationsFormItemDrugName} type="text"/></label>
                <label className={s.petVaccinationsFormItem} htmlFor="">Название клиники<input
                    className={s.petVaccinationsFormItemClinicName} type="text"/></label>
            </form>
            <div className={s.petAccountInfoBtnWrapper}>
                <ButtonStandart title={"Добавить"}/>
            </div>

        </div>
    );
};