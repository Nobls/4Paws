import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './petInfo.module.scss';
import petPhoto from '../../images/pet.png';
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import LowercaseButton from "../../components/lowercaseButton/LowercaseButton";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../../axios/axios";


const PetInfo = () => {

    const params = useParams()

    const navigate = useNavigate()

    const [petName, setPetName] = useState('')
    const [petBreed, setPetBreed] = useState('')
    const [agePet, setAgePet] = useState('')
    const [petGender, setPetGender] = useState('')
    const [petAvatarUrl, setPetAvatarUrl] = useState('')

    const [loading, setLoading] = useState(false)

    const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            if (event.target.files !== null) {
                const formData = new FormData()
                const file = event.target.files[0]
                formData.append('image', file)
                const {data} = await axios.post('upload', formData)
                setPetAvatarUrl(data.url)
            }
        } catch (err) {
            console.warn(err)
            alert('Ошибка при загрузке изображения!')
        }
    }

    const removeImageHandler = () => {
        setPetAvatarUrl('')
    }

    const onSubmit = async () => {
        try {
            setLoading(!loading)
            const fieldsPet = {
                petName,
                petBreed,
                agePet,
                petGender,
                petAvatarUrl,

            }

            //navigate(`/auth/user`)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const buttonTitleRegister = 'Сохранить';

    return (
        <div className={s.petInfoBg}>
            <h1>Электронная карта питомца</h1>
            <div className={s.petInfoWrapper}>
                <form className={s.petInfoItems}>
                    <label>
                        <span>Кличка</span>
                        <input value={petName || ''} type="text" onChange={e => setPetName(e.currentTarget.value)}/>
                    </label>
                    <label>
                        <span>Порода</span>
                        <input value={petBreed || ''} type="text" onChange={e => setPetBreed(e.currentTarget.value)}/>
                    </label>
                    <div className={s.petInfoAgeBlockItems}>
                        <label className={s.petInfoAgeBlockItemsWrapper}>
                            <span className={s.petInfoAgeBlockItemTitle}>Возраст</span>
                            <input value={agePet || ''} className={s.petInfoAgeBlockItemInput} type="text"
                                   onChange={e => setAgePet(e.currentTarget.value)}/>
                        </label>
                        <label className={s.petInfoAgeBlockItemsWrapper}>
                            <span className={s.petInfoSexBlockItemTitle}>Пол</span>
                            <select value={petGender || ''} className={s.petInfoSexBlockItemInput} name="pet"
                                    onChange={e => setPetGender(e.currentTarget.value)}>
                                <option value="m">М</option>
                                <option value="w">Ж</option>
                            </select>
                        </label>
                    </div>
                    <div className={s.electronicCardWrapper}>
                        <label className={s.electronicCardLabel}>
                            <input className={s.electronicCardInput} type="checkbox"/>
                            <span className={s.electronicCardTitle}>Завести электронную карту</span>
                        </label>
                    </div>

                </form>

                <div className={s.petPhotoWrapper}>
                    {
                        petAvatarUrl && (
                            <>
                                {
                                    petAvatarUrl
                                        ?
                                        <img className={s.petPhoto} src={`http://localhost:3157${petAvatarUrl}`}
                                             alt="pet"/>
                                        :
                                        <img className={s.petPhoto} src={petPhoto} alt="pet"/>
                                }
                                <button onClick={removeImageHandler}>Удалить</button>
                            </>
                        )
                    }
                    <img className={s.petPhoto} src={petPhoto} alt="pet"/>
                    <input type="file" onChange={handleChangeFile}/>
                    <div className={s.buttonWrapper}>
                        <LowercaseButton title={'Добавить фото'}/>
                    </div>
                    <ButtonStandart title={buttonTitleRegister} onclick={onSubmit}/>
                </div>
            </div>
        </div>
    );
};

export default PetInfo;