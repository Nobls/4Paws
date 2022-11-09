import React, {ChangeEvent, MutableRefObject, useRef, useState} from 'react';
import s from './adminPanel.module.scss';
import {useAppSelector} from "../../redux/hook/hook";
import {selectedIsAuth} from "../../redux/slices/auth";
import {Navigate} from "react-router-dom";
import axios from "../../axios/axios";

const AdminPanel = () => {

    const isAuth = useAppSelector(selectedIsAuth)

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [tags, setTags] = useState('')
    const [imageTitle, setImageTitle] = useState('')
    const [file, setFile] = useState<any>('')
    //const inputFileRef = useRef<HTMLInputElement>(null) /*as MutableRefObject<HTMLInputElement>*/ // при начальном значении null нужна другая типизация

    //console.log(file)
    if (!window.localStorage.getItem('token') && !isAuth) {
        return <Navigate to={'/'}/>
    }

    /*const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {

        try {
            if (event.target.files !== null){
                console.log(event.target.files[0])
                const formData = new FormData()
                const file = event.target.files[0]
                console.log(file)
                formData.append('image', file)
                const {data} = await axios.post('upload', formData)
                console.log(data)
            }
        } catch (err) {
            console.warn(err)
            alert('Ошибка при загрузке изображения!')
        }
    }*/

    /*const onClickRef = ()=> {
        if (inputFileRef.current !== null){
            inputFileRef.current.click()
        }
    }*/
    const onChangeFix = async (event: ChangeEvent<HTMLInputElement>)=>{
        if (event.target.files !== null){
            setFile(event.target.files)
            console.log(file)
            try {
                const formData = new FormData()
                formData.append('image', file)
                const {data} = await axios.post('/upload', formData)
                console.log(data)
            }catch (err){
                console.log(err)
            }
        }
    }

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
                               className={s.changeTitleNews} type="text" placeholder={'изменить заголовок'}/>
                        <input value={tags} onChange={e => setTags(e.currentTarget.value)} className={s.changeTitleTags}
                               type="text" placeholder={'изменить тег'}/>
                        <textarea value={text} onChange={e => setText(e.currentTarget.value)}
                                  className={s.changeTextNews} placeholder={'изменить текст'}/>
                        <p className={s.titleImage}>image.jpg
                        </p>
                        {/*<input ref={inputFileRef} type={'file'} onChange={handleChangeFile} hidden accept=".jpg, .jpeg, .png"/>*/}
                        <input  type={'file'} onChange={onChangeFix} accept=".jpg, .jpeg, .png"/>
                        <button  className={s.addImageButton}>Добавить
                            картинку
                        </button>
                        <input value={imageTitle} onChange={e => setImageTitle(e.currentTarget.value)}
                               className={s.altImage} type="text" placeholder={'название картинки'}/>

                        <button className={s.addNewsButton}>Добавить новость</button>
                        {/*<div>Курсинг — это полевые испытания с приманкой, имитирующие преследование и поимку зверя в
                            поле, что позволяет собакам демонстрировать свои рабочие качества. Проще говоря, это бега за
                            механическим зайцем. Трассы бывают ломаные и прямые. Собак оценивают по пяти критериям:
                            скорость, энтузиазм, интеллект, маневренность и выносливость. В идеале животное должно
                            поймать приманку. Наш фотограф отправился на мероприятие и сделал подборку азартных собак.
                        </div>*/}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;