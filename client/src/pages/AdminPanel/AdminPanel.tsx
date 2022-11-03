import React from 'react';
import s from './adminPanel.module.scss';

const AdminPanel = () => {
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
                        <input className={s.changeTitleNews} type="text" placeholder={'изменить заголовок'}/>
                        <textarea className={s.changeTextNews} placeholder={'изменить текст'}/>
                        <p className={s.titleImage}>image.jpg
                        </p>
                        <button className={s.addImageButton}>Добавить картинку</button>
                        <input className={s.altImage} type="text" placeholder={'название картинки'}/>

                        <button className={s.addNewsButton}>Добавить новость</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;