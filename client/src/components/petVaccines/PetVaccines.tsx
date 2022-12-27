import React, {useEffect, useState} from 'react';
import s from "./petVaccines.module.scss";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import {fetchCreateProcedures, fetchPetProcedures} from "../../redux/slices/procedures";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";


export const PetVaccines = () => {

    const params = useParams()

    const dispatch = useAppDispatch()

    const {petProcedures} = useAppSelector((state)=>state.procedures)

    const [typeVaccination, setTypeVaccination] = useState('')
    const [dateVaccination, setDateVaccination] = useState('')
    const [nameOfVaccine, setNameOfVaccine] = useState('')
    const [nameClinic, setNameClinic] = useState('')

    const [loading, setLoading] = useState(false)

    const onSubmitVaccine = () => {
        try {
            setLoading(!loading)
            const procedures = {
                typeVaccination,
                dateVaccination,
                nameOfVaccine,
                nameClinic
            }

            const userPetId = params.id
            dispatch(fetchCreateProcedures({userPetId, procedures}))

                } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        dispatch(fetchPetProcedures(params.id))
    },[dispatch])

    return (
        <div className={s.petVaccinations}>
            <h3 className={s.petVaccinationsTitle}>Прививки</h3>
            {
                petProcedures?.map((m,index)=> (
                    <ol key={index} className={s.petVaccinationsItems}>
                        <li className={s.petVaccinationsItem}>{m.typeVaccination} <span>{m.nameOfVaccine}</span> <span>{m.dateVaccination}</span>
                        </li>
                    </ol>
                ))
            }
            <form className={s.petVaccinationsForm}>
                <div className={s.petVaccinationsFormItemBlock}>
                    <label className={s.petVaccinationsFormItemType} htmlFor="">Тип прививки<input
                        className={s.petVaccinationsFormItemTypeInp} type="text" onChange={e => setTypeVaccination(e.currentTarget.value)}/></label>
                    <label className={s.petVaccinationsFormItemDate} htmlFor="">Дата<input
                        className={s.petVaccinationsFormItemDateInp} type="date" onChange={e => setDateVaccination(e.currentTarget.value)}/></label>
                </div>
                <label className={s.petVaccinationsFormItem} htmlFor="">Название препарата<input
                    className={s.petVaccinationsFormItemDrugName} type="text"
                    onChange={e => setNameOfVaccine(e.currentTarget.value)}/></label>
                <label className={s.petVaccinationsFormItem} htmlFor="">Название клиники<input
                    className={s.petVaccinationsFormItemClinicName} type="text" onChange={e => setNameClinic(e.currentTarget.value)}/></label>
            </form>
            <div className={s.petAccountInfoBtnWrapper}>
                <ButtonStandart title={"Добавить"} onclick={onSubmitVaccine}/>
            </div>

        </div>
    );
};