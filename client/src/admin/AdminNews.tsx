import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "../axios/axios";
import s from "../pages/AdminPanel/adminPanel.module.scss";
import {fetchCreatePost, fetchUpdatePost} from "../redux/slices/posts";
import {useAppDispatch} from "../redux/hook/hook";


export const AdminNews = () => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {id} = useParams()

    const isEditing = !!(id)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tags, setTags] = useState('')
    const [imageTitle, setImageTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')

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
            setLoading(!loading)
            const fields = {
                title,
                text,
                imageUrl,
                tags,
            }
            const updateFields = {
                title,
                text,
                imageUrl,
                tags,
                id: id,// для обновления нужно передать id
            }

            isEditing
                /*? await axios.patch(`/news/${id}`, fields)
                : await axios.post('/news', fields)*/
                ? dispatch(fetchUpdatePost(updateFields))
                : dispatch(fetchCreatePost(fields))

            /*const _id = isEditing ? id : data._id*/

            navigate(`/news`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={s.addPostWrapper}>
            <h3 className={s.adminPanelSubtitle}>
                Добавить новость
            </h3>
            <form className={s.addPostForm}>
                <input value={title || ''} onChange={e => setTitle(e.currentTarget.value)}
                       className={s.changeTitleNews} type="text" placeholder={'Добавить заголовок'}/>
                <input value={tags || ''} onChange={e => setTags(e.currentTarget.value)} className={s.changeTitleTags}
                       type="text" placeholder={'Добавить тег'}/>
                <textarea value={text || ''} onChange={e => setText(e.currentTarget.value)}
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

                <input value={imageTitle || ''} onChange={e => setImageTitle(e.currentTarget.value)}
                       className={s.altImage} type="text" placeholder={'Название картинки'}/>

                <button onClick={onSubmit}
                        className={s.addNewsButton}>{isEditing ? 'Сохранить' : 'Добавить новость'}</button>

            </form>
        </div>
    );
};

