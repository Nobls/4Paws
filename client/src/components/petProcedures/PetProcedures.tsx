import React, {useEffect, useState} from 'react';
import s from "./petProcedures.module.scss";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import {fetchCreateProcedures, fetchPetProcedures, PetProceduresType} from "../../redux/slices/procedures";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hook/hook";
import {fetchUserPet} from "../../redux/slices/userPet";

type PropsType = {
    petProcedures: PetProceduresType[]
}

export const PetProcedure = ({petProcedures}:PropsType) => {

    const params = useParams()

    const dispatch = useAppDispatch()

    const [dateProcedure, setDateProcedure] = useState('')
    const [nameOfProcedure, setNameOfProcedure] = useState('')
    const [nameClinic, setNameClinic] = useState('')

    const [loading, setLoading] = useState(false)

    const onSubmitProcedures = () => {
        try {
            setLoading(!loading)
            const procedures = {
                dateProcedure,
                nameOfProcedure,
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
        dispatch(fetchUserPet())
    },[dispatch, params.id])

    return (
        <div className={s.petProcedures}>
            <h3 className={s.petProceduresTitle}>Процедуры</h3>
            {
                petProcedures?.map((m,index)=>{
                    return (
                        <ol key={index} className={s.petProceduresItems}>
                            <li className={s.petProceduresItem}>{m.nameOfProcedure}<span>{m.nameClinic}</span> <span>{m.dateProcedure?.toLowerCase().toString().slice(0,10)}</span></li>
                        </ol>
                    )
                })
            }
            <form className={s.petProceduresForm}>
                <label htmlFor="" className={s.petProceduresFormItem}>
                    Дата
                    <input type="date" className={s.petProceduresFormItemDateInp} onChange={e => setDateProcedure(e.currentTarget.value)}/>
                </label>
                <label htmlFor="" className={s.petProceduresFormItem}>
                    Процедура
                    <input type="text" className={s.petProceduresFormInput} onChange={e => setNameOfProcedure(e.currentTarget.value)}/>
                </label>
                <label htmlFor="" className={s.petProceduresFormItem}>
                    Название клиники
                    <input type="text" className={s.petProceduresFormInput} onChange={e => setNameClinic(e.currentTarget.value)}/>
                </label>
            </form>
            <div className={s.petAccountInfoBtnWrapper}>
                <ButtonStandart title={"Добавить"} onclick={onSubmitProcedures}/>
            </div>
        </div>
    );
};