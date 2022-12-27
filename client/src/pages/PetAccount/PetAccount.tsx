import React, {useEffect, useState} from 'react';
import s from './petAccount.module.scss'
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import {useParams} from "react-router-dom";
import axios from "../../axios/axios";
import {PetVaccines} from "../../components/petVaccines/PetVaccines";
import {PetProcedure,} from "../../components/petProcedures/PetProcedures";

const PetAccount = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    const params = useParams()

    useEffect(() => {
        axios.get(`petAccount/${params.id}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            }).catch(err => {
            console.warn(err)
        })
    }, [params.id])

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={s.pageContainer}>
            <div className={s.petAccountInfo}>
                <div className={s.petAccountInfoWrapper}>
                    <div className={s.petAccountPhoto}
                         style={{backgroundImage: `url(http://localhost:3157${data.petAvatarUrl})`}}>
                    </div>
                    <div className={s.petAccountPersonalInfo}>
                        <div className={s.personalPetName}>{data.petName}</div>
                        <div>
                            <span className={s.personalPetAge}>{data.agePet} лет</span>
                            <span className={s.personalPetGender}>{data.petGender}</span>
                        </div>
                        <div className={s.personalPetBreed}>{data.petBreed}</div>
                    </div>
                </div>
                <div className={s.petAccountPersonalCard}>
                    <p className={s.petPersonalCard}>Личная карта №</p>
                    <p className={s.petPersonalCardNumber}>000000001</p>
                </div>
            </div>

            <PetVaccines id={data.id}/>

            <PetProcedure/>

            <div className={s.petAccountInstruction}>
                <div className={s.petAccountInstructionWrapper}>
                    <p className={s.petAccountInstructionDescription}><span
                        className={s.petAccountInstructionDescriptionStar}>*</span> Медицинская карта заполняется
                        автоматически при обращение к нам за услугами сопровождения в клинику.</p>
                    <p className={s.petAccountInstructionDescription}>Во всех других случаях карта заполняется
                        пользователем.</p>
                </div>
                <div className={s.petAccountInfoBtnWrapper}>
                    <ButtonStandart title={'Сохранить'}/>
                </div>
            </div>
        </div>
    );
};

export default PetAccount;