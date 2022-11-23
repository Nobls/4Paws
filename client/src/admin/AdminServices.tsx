import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../pages/AdminPanel/adminPanel.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../axios/axios";


export const AdminServices = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const isEditing = !!(id)


    const [titleServices, setTitleServices] = useState('')
    const [descriptionServices, setDescriptionServices] = useState('')
    const [descriptionModalServices, setDescriptionModalServices] = useState('')
    const [imageUrlServices, setImageUrlServices] = useState('')
    const [imageTitleServices, setImageTitleServices] = useState('')

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (id) {
            axios.get(`/services/${id}`).then(({data}) => {
                setTitleServices(data.title)
                setDescriptionServices(data.description)
                setDescriptionModalServices(data.descriptionModal)
                setImageUrlServices(data.imageUrl)
            })
        }
    }, [])


    const handleChangeFileServices = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            if (event.target.files !== null) {
                const formData = new FormData()
                const file = event.target.files[0]
                formData.append('image', file)
                const {data} = await axios.post('upload', formData)
                setImageUrlServices(data.url)
                setImageTitleServices(data.url.replace(/uploads\s?/, '').replace(/['/']\s?/, '').replace(/['/']\s?/, ''))
            }
        } catch (err) {
            console.warn(err)
            alert('Ошибка при загрузке изображения!')
        }
    }

    const removeImageHandlerServices = () => {
        setImageUrlServices('')
        setImageTitleServices('')
    }

    const onSubmitServices = async () => {
        try {
            setLoading(true)
            const fieldsServices = {
                titleServices,
                descriptionServices,
                imageUrlServices,
                descriptionModalServices,
            }
            const {data} = isEditing
                ? await axios.patch(`/services/${id}`, fieldsServices)
                : await axios.post('/services', fieldsServices)

            const _id = isEditing ? id : data._id

            navigate(`/services${_id}`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={s.addServicesWrapper}>
            <h3 className={s.adminPanelSubtitle}>
                Добавить услугу
            </h3>
            <form className={s.addServicesForm}>
                <input value={titleServices || ''} onChange={e => setTitleServices(e.currentTarget.value)}
                       className={s.changeTitleServices} type="text" placeholder={'Добавить заголовок'}/>
                {/*<input value={tags} onChange={e => setTags(e.currentTarget.value)} className={s.changeTitleTags}
                               type="text" placeholder={'Добавить тег'}/>*/}
                <textarea value={descriptionServices || ''} onChange={e => setDescriptionServices(e.currentTarget.value)}
                          className={s.changeTextServices} placeholder={'Добавить текст'}/>
                <textarea value={descriptionModalServices || ''} onChange={e => setDescriptionModalServices(e.currentTarget.value)}
                          className={s.changeTextServices} placeholder={'Добавить текст для модально окна'}/>
                <p>{imageTitleServices}</p>
                {
                    imageUrlServices && (
                        <>
                            <img className={s.previewImage} src={`http://localhost:3157${imageUrlServices}`}
                                 alt="uploaded"/>
                            <button className={s.removeImageBtn} onClick={removeImageHandlerServices}>Удалить</button>
                        </>
                    )
                }

                <input className={s.addImageButton} type={'file'} onChange={handleChangeFileServices}/>

                <input value={imageTitleServices || ''} onChange={e => setImageTitleServices(e.currentTarget.value)}
                       className={s.altImage} type="text" placeholder={'Название картинки'}/>

                <button type={'submit'} onClick={onSubmitServices}
                        className={s.addServicesButton}>{isEditing ? 'Сохранить' : 'Добавить услугу'}</button>

            </form>
        </div>
    );
};