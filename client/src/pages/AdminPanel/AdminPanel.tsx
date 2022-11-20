import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './adminPanel.module.scss';
import {useAppSelector} from "../../redux/hook/hook";
import {selectedIsAuth} from "../../redux/slices/auth";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import axios from "../../axios/axios";

const AdminPanel = () => {

    const isAuth = useAppSelector(selectedIsAuth)

    const navigate = useNavigate()

    const {id} = useParams()

    const isEditing = !!(id) // или вот так можно Boolean(_id)
    // states для новостей
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tags, setTags] = useState('')
    const [imageTitle, setImageTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    // states для услуг
    const [titleServices, setTitleServices] = useState('')
    const [descriptionServices, setDescriptionServices] = useState('')
    const [descriptionModalServices, setDescriptionModalServices] = useState('')
    const [imageTitleServices, setImageTitleServices] = useState('')
    const [imageUrlServices, setImageUrlServices] = useState('')


    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (id) {
            axios.get(`/news/${id}`).then(({data}) => {
                setTitle(data.title)
                setText(data.text)
                setTags(data.tags.join(','))
                setImageUrl(data.imageUrl)
            })
        }
    }, [])


    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to={'/'}/>
    }

    const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
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

    const removeImageHandler = () => {
        setImageUrl('')
        setImageTitle('')
    }

    const onSubmit = async () => {
        try {
            setLoading(true)
            const fields = {
                title,
                text,
                imageUrl,
                tags,
            }

            const {data} = isEditing
                ? await axios.patch(`/news/${id}`, fields)
                : await axios.post('/news', fields)

            const _id = isEditing ? id : data._id

            navigate(`/news/${_id}`)
        } catch (err) {
            console.log(err)
        }
        try {
            setLoading(true)
            const fieldsServices = {
                titleServices,
                descriptionModalServices,
                descriptionServices,
                imageUrl,
            }

            const {data} = isEditing
                ? await axios.patch(`/services/${id}`, fieldsServices)
                : await axios.post('/services', fieldsServices)

            const _id = isEditing ? id : data._id

            navigate(`/services/${_id}`)
            debugger
        } catch (err) {
            console.log(err)
        }
    }


    //Добавление и редактирование будет в одной форме
    return (
        <div className={s.adminPanelContainer}>
            <div>
                <h1 className={s.adminPanelTitle}>
                    Админ панель
                </h1>
                <div className={s.addPostWrapper}>
                    <h3 className={s.adminPanelSubtitle}>
                        Добавить новость
                    </h3>
                    <form className={s.addPostForm}>
                        <input value={title} onChange={e => setTitle(e.currentTarget.value)}
                               className={s.changeTitleNews} type="text" placeholder={'Добавить заголовок'}/>
                        <input value={tags} onChange={e => setTags(e.currentTarget.value)} className={s.changeTitleTags}
                               type="text" placeholder={'Добавить тег'}/>
                        <textarea value={text} onChange={e => setText(e.currentTarget.value)}
                                  className={s.changeTextNews} placeholder={'Добавить текст'}/>
                        <p>{imageTitle}</p>
                        {
                            imageUrl && (
                                <>
                                    <img className={s.previewImage} src={`http://localhost:3157${imageUrl}`}
                                         alt="uploaded"/>
                                    <button className={s.removeImageBtn} onClick={removeImageHandler}>Удалить</button>
                                </>
                            )
                        }

                        <input className={s.addImageButton} type={'file'} onChange={handleChangeFile}/>

                        <input value={imageTitle} onChange={e => setImageTitle(e.currentTarget.value)}
                               className={s.altImage} type="text" placeholder={'Название картинки'}/>

                        <button onClick={onSubmit}
                                className={s.addNewsButton}>{isEditing ? 'Сохранить' : 'Добавить новость'}</button>

                    </form>
                </div>

                <div className={s.addServicesWrapper}>
                    <h3 className={s.adminPanelSubtitle}>
                        Добавить услугу
                    </h3>
                    <form className={s.addServicesForm}>
                        <input value={titleServices} onChange={e => setTitleServices(e.currentTarget.value)}
                               className={s.changeTitleServices} type="text" placeholder={'Добавить заголовок'}/>
                        {/*<input value={tags} onChange={e => setTags(e.currentTarget.value)} className={s.changeTitleTags}
                               type="text" placeholder={'Добавить тег'}/>*/}
                        <textarea value={descriptionServices} onChange={e => setDescriptionServices(e.currentTarget.value)}
                                  className={s.changeTextServices} placeholder={'Добавить текст'}/>
                        <textarea value={descriptionModalServices} onChange={e => setDescriptionModalServices(e.currentTarget.value)}
                                  className={s.changeTextServices} placeholder={'Добавить текст для модально окна'}/>
                        <p>{imageTitle}</p>
                        {
                            imageUrl && (
                                <>
                                    <img className={s.previewImage} src={`http://localhost:3157${imageUrl}`}
                                         alt="uploaded"/>
                                    <button className={s.removeImageBtn} onClick={removeImageHandler}>Удалить</button>
                                </>
                            )
                        }

                        <input className={s.addImageButton} type={'file'} onChange={handleChangeFile}/>

                        <input value={imageTitle} onChange={e => setImageTitle(e.currentTarget.value)}
                               className={s.altImage} type="text" placeholder={'Название картинки'}/>

                        <button onClick={onSubmit}
                                className={s.addServicesButton}>{isEditing ? 'Сохранить' : 'Добавить услугу'}</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;