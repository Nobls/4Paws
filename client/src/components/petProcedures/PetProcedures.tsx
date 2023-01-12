import React, {useEffect, useState} from 'react';
import s from "./petProcedures.module.scss";
import ButtonStandart from "../buttonStandart/ButtonStandart";
import {
    fetchCreateProcedures,
    fetchPetProcedures,
    fetchRemoveProcedures,
    PetProceduresType
} from "../../redux/slices/procedures";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hook/hook";
import {fetchUserPet} from "../../redux/slices/userPet";

type PropsType = {
    petProcedures: PetProceduresType[]
}

export const PetProcedure = ({petProcedures}:PropsType) => {

    const params = useParams()

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

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

    const removeProceduresHandler = (id:string)=>{
        try {
            dispatch(fetchRemoveProcedures(id))
            navigate(0)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        dispatch(fetchPetProcedures(params.id))
    },[dispatch, params.id])


    return (
        <div className={s.petProcedures}>
            <h3 className={s.petProceduresTitle}>Процедуры</h3>
            {
                petProcedures?.map((m,index)=>{
                    return (
                        <ol key={index} className={s.petProceduresItems}>
                            <li className={s.petProceduresItem}>{m.nameOfProcedure}<span>{m.nameClinic}</span> <span>{m.dateProcedure?.toLowerCase().toString().slice(0,10)}</span>
                                <button className={s.deleteProcedures} onClick={()=>removeProceduresHandler(m._id)}>
                                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                         viewBox="0 0 24 24"
                                         aria-labelledby="closeIconTitle" stroke="#ffffff" strokeWidth={3}>
                                        <path
                                            d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                                    </svg>
                                </button>
                            </li>
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