import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../pages/AdminPanel/adminPanel.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import axios from "../axios/axios";
import {useAppDispatch} from "../redux/hook/hook";
import {fetchCreateServices, fetchUpdateServices} from "../redux/slices/services";


export const AdminServices = () => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {id} = useParams()

    const isEditing = !!(id)


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [descriptionModal, setDescriptionModal] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageTitle, setImageTitle] = useState('')

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (id) {
            axios.get(`/services/${id}`).then(({data}) => {
                setTitle(data.title)
                setDescription(data.description)
                setDescriptionModal(data.descriptionModal)
                setImageUrl(data.imageUrl)
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
                setImageUrl(data.url)
                setImageTitle(data.url.replace(/uploads\s?/, '').replace(/['/']\s?/, '').replace(/['/']\s?/, ''))
            }
        } catch (err) {
            console.warn(err)
            alert('Ошибка при загрузке изображения!')
        }
    }

    const removeImageHandlerServices = () => {
        setImageUrl('')
        setImageTitle('')
    }

    const onSubmitServices = async () => {
        try {
            setLoading(!loading)
            const fieldsServices = {
                title,
                description,
                imageUrl,
                descriptionModal,
            }

            const updateServicesFields = {
                title,
                description,
                imageUrl,
                descriptionModal,
                id: id,
            }

            isEditing
                ? dispatch(fetchUpdateServices(updateServicesFields))
                : dispatch(fetchCreateServices(fieldsServices))

            navigate(`/services`)
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
                <input value={title || ''} onChange={e => setTitle(e.currentTarget.value)}
                       className={s.changeTitleServices} type="text" placeholder={'Добавить заголовок'}/>
                {/*<input value={tags} onChange={e => setTags(e.currentTarget.value)} className={s.changeTitleTags}
                               type="text" placeholder={'Добавить тег'}/>*/}
                <textarea value={description || ''} onChange={e => setDescription(e.currentTarget.value)}
                          className={s.changeTextServices} placeholder={'Добавить текст'}/>
                <textarea value={descriptionModal || ''} onChange={e => setDescriptionModal(e.currentTarget.value)}
                          className={s.changeTextServices} placeholder={'Добавить текст для модально окна'}/>
                <p>{imageTitle}</p>
                {
                    imageUrl && (
                        <>
                            <img className={s.previewImage} src={`http://localhost:3157${imageUrl}`}
                                 alt="uploaded"/>
                            <button className={s.removeImageBtn} onClick={removeImageHandlerServices}>Удалить</button>
                        </>
                    )
                }

                <input className={s.addImageButton} type={'file'} onChange={handleChangeFileServices}/>

                <input value={imageTitle || ''} onChange={e => setImageTitle(e.currentTarget.value)}
                       className={s.altImage} type="text" placeholder={'Название картинки'}/>

                <button type={'submit'} onClick={onSubmitServices}
                        className={s.addServicesButton}>{isEditing ? 'Сохранить' : 'Добавить услугу'}</button>

            </form>
        </div>
    );
};