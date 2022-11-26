import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./userInfo.module.scss";
import userPhoto from "../../images/user.png";
import {Link, useNavigate, useParams} from "react-router-dom";
import LowercaseButton from "../../components/lowercaseButton/LowercaseButton";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import axios from "../../axios/axios";

const UserInfo = () => {

    const {id} = useParams()

    const isEditing = !!(id)

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [surName, setSurName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [corpsHouse, setCorpsHouse] = useState('')
    const [apartmentNumber, setApartmentNumber] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (id) {
            axios.get(`/auth/user/${id}`).then(({data}) => {
                setName(data.name)
                setLastName(data.lastName)
                setSurName(data.surName)
                setCity(data.city)
                setStreet(data.street)
                setHouseNumber(data.houseNumber)
                setCorpsHouse(data.corpsHouse)
                setApartmentNumber(data.apartmentNumber)
                setUserPhoneNumber(data.userPhoneNumber)
                setAvatarUrl(data.avatarUrl)
            })
        }
    }, [])

    const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            if (event.target.files !== null) {
                const formData = new FormData()
                const file = event.target.files[0]
                formData.append('image', file)
                const {data} = await axios.post('upload', formData)
                setAvatarUrl(data.url)}
        } catch (err) {
            console.warn(err)
            alert('Ошибка при загрузке изображения!')
        }
    }

    const removeImageHandlerServices = () => {
        setAvatarUrl('')
    }

    const onSubmit = async () => {
        try {
            setLoading(true)
            const fieldsUser = {
                name,
                lastName,
                surName,
                city,
                street,
                houseNumber,
                corpsHouse,
                apartmentNumber,
                userPhoneNumber,
                avatarUrl,
            }
            const {data} = isEditing
                ? await axios.patch(`/auth/user/${id}`, fieldsUser)
                : await axios.post('//auth/user', fieldsUser)

            const _id = isEditing ? id : data._id

            navigate(`/auth/user/${_id}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={s.userInfo}>
            <h3 className={s.userInfoTitle}>Информация о пользователе</h3>
            <div className={s.userInfoBlock}>
                <div className={s.userInfoWrapper}>
                    <div className={s.userInfoItems}>
                        <label className={s.userInfoItem}>
                            <span>Фамилия</span>
                            <input value={lastName || ''} type="text" className={s.userInfoItemInput} onChange={e => setLastName(e.currentTarget.value)}/>
                        </label>
                        <label className={s.userInfoItem}>
                            <span>Имя</span>
                            <input value={name || ''} type="text" className={s.userInfoItemInput} onChange={e => setName(e.currentTarget.value)}/>
                        </label>
                        <label className={s.userInfoItem}>
                            <span>Отчество</span>
                            <input value={surName || ''} type="text" className={s.userInfoItemInput} onChange={e => setSurName(e.currentTarget.value)}/>
                        </label>
                    </div>
                    <div className={s.userInfoItems}>
                        <label className={s.userInfoItem}>
                            <span>Город</span>
                            <input value={city || ''} type="text" className={s.userInfoItemInput} onChange={e => setCity(e.currentTarget.value)}/>
                        </label>
                        <label className={s.userInfoItem}>
                            <span>Улица</span>
                            <input value={street || ''} type="text" className={s.userInfoItemInput} onChange={e => setStreet(e.currentTarget.value)}/>
                        </label>
                        <label className={s.userInfoItem}>
                            <span>Телефон</span>
                            <input value={userPhoneNumber || ''} type="tel" className={s.userInfoItemInput} onChange={e => setUserPhoneNumber(e.currentTarget.value)}/>
                        </label>
                    </div>
                    <div className={s.userInfoHomeItems}>
                        <label className={s.userInfoHomeItem}>
                            <span>Дом</span>
                            <input value={houseNumber || ''} className={s.userInfoHomeInput} type="text" onChange={e => setHouseNumber(e.currentTarget.value)}/>
                        </label>
                        <label className={s.userInfoHomeItem}>
                            <span>Корпус</span>
                            <input value={corpsHouse || ''} className={s.userInfoHomeInput} type="text" onChange={e => setCorpsHouse(e.currentTarget.value)}/>
                        </label>
                        <label className={s.userInfoHomeItem}>
                            <span>Квартира</span>
                            <input value={apartmentNumber || ''} className={s.userInfoHomeInput} type="text" onChange={e => setApartmentNumber(e.currentTarget.value)}/>
                        </label>
                    </div>
                </div>

                <div className={s.userInfoPhoto}>
                    {
                        avatarUrl && (
                            <>
                                {avatarUrl ? <img className={s.previewImage} src={`http://localhost:3157${avatarUrl}`}
                                                  alt="uploaded"/> :
                                    <img className={s.userPhoto} src={userPhoto} alt="photo"/>}
                                <button className={s.removeImageBtn} onClick={removeImageHandlerServices}>Удалить</button>
                            </>
                        )
                    }
                    <input className={s.addImageButton} type={'file'} onChange={handleChangeFile}/>
                    <div className={s.buttonWrapper}>
                        {/*<LowercaseButton title={'Добавить фото'}/>*/}
                    </div>
                    <ButtonStandart title={'Сохранить'} onclick={onSubmit}/>
                    <Link to={"/petInfo"}>!goToPetInfo</Link>
                    <Link to={"/usersAccount"}>!goToUsersAccount</Link>
                    <Link to={"/AdminPanel"}>!AdminPanel</Link>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;