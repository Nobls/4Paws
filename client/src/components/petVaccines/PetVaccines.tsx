import React, {useEffect, useState} from 'react';
import s from "./petVaccines.module.scss";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import {fetchCreateVaccines, fetchPetVaccines, PetVaccinesType,} from "../../redux/slices/procedures";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hook/hook";
import {fetchUserPet} from "../../redux/slices/userPet";

type PropsType = {
    petVaccines: PetVaccinesType[]
}

export const PetVaccines = ({petVaccines}:PropsType) => {

    const params = useParams()

    const dispatch = useAppDispatch()

    const [typeVaccination, setTypeVaccination] = useState('')
    const [dateVaccination, setDateVaccination] = useState('')
    const [nameOfVaccine, setNameOfVaccine] = useState('')
    const [nameClinic, setNameClinic] = useState('')

    const [loading, setLoading] = useState(false)

    const onSubmitVaccine = () => {
        try {
            setLoading(!loading)
            const vaccines = {
                typeVaccination,
                dateVaccination,
                nameOfVaccine,
                nameClinic
            }

            const userPetId = params.id
            dispatch(fetchCreateVaccines({userPetId, vaccines}))

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(fetchPetVaccines(params.id))
        dispatch(fetchUserPet())
    }, [dispatch, params.id])

    return (
        <div className={s.petVaccinations}>
            <h3 className={s.petVaccinationsTitle}>Прививки</h3>
            {
                petVaccines?.map((m, index) => (
                    <ol key={index} className={s.petVaccinationsItems}>
                        <li className={s.petVaccinationsItem}>{m.typeVaccination}<span>{m.nameOfVaccine}</span><span>{m.nameClinic}</span>
                            <span>{m.dateVaccination?.toLowerCase().toString().slice(0,10)}</span>
                        </li>
                    </ol>
                ))
            }
            <form className={s.petVaccinationsForm}>
                <div className={s.petVaccinationsFormItemBlock}>
                    <label className={s.petVaccinationsFormItemType} htmlFor="">Тип прививки<input
                        className={s.petVaccinationsFormItemTypeInp} type="text"
                        onChange={e => setTypeVaccination(e.currentTarget.value)}/></label>
                    <label className={s.petVaccinationsFormItemDate} htmlFor="">Дата<input
                        className={s.petVaccinationsFormItemDateInp} type="date"
                        onChange={e => setDateVaccination(e.currentTarget.value)}/></label>
                </div>
                <label className={s.petVaccinationsFormItem} htmlFor="">Название препарата<input
                    className={s.petVaccinationsFormItemDrugName} type="text"
                    onChange={e => setNameOfVaccine(e.currentTarget.value)}/></label>
                <label className={s.petVaccinationsFormItem} htmlFor="">Название клиники<input
                    className={s.petVaccinationsFormItemClinicName} type="text"
                    onChange={e => setNameClinic(e.currentTarget.value)}/></label>
            </form>
            <div className={s.petAccountInfoBtnWrapper}>
                <ButtonStandart title={"Добавить"} onclick={onSubmitVaccine}/>
            </div>

        </div>
    );
};