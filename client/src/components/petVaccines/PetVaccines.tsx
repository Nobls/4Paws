import React, {useEffect} from 'react';
import s from "./petVaccines.module.scss";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {fetchPetProcedures} from "../../redux/slices/procedures";

type PropsType = {
    data: any
    id: any
}


export const PetVaccines = ({data, id}:PropsType) => {

    const dispatch = useAppDispatch()
    const {procedures} = useAppSelector((state)=>state.procedures)

    useEffect(()=>{
        dispatch(fetchPetProcedures())
    },[])

    console.log(procedures)


    return (
        <div className={s.petVaccinations}>
            <h3 className={s.petVaccinationsTitle}>Прививки</h3>
            <ol className={s.petVaccinationsItems}>
                <li className={s.petVaccinationsItem}>От бешенства <span>Novak2000</span> <span>21.03.2022</span>
                </li>
                <li className={s.petVaccinationsItem}>От бешенства <span>Novak2000</span> <span>21.03.2022</span>
                </li>
                <li className={s.petVaccinationsItem}>От бешенства <span>Novak2000</span> <span>21.03.2022</span>
                </li>
            </ol>
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