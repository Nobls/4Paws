import React from 'react';
import s from "./userInfo.module.scss";
import userPhoto from "../../images/user.png";

const UserInfo = () => {
    return (
        <div className={s.userInfo}>
            <h3 className={s.userInfoTitle}>Информация о Вас</h3>
            <div className={s.userInfoBlock}>
                <div className={s.userInfoWrapper}>
                    <div className={s.userInfoItems}>
                        <label className={s.userInfoItem}><span>Имя</span><input type="text" className={s.userInfoItemInput}/></label>
                        <label className={s.userInfoItem}><span>Фамилия</span><input type="text" className={s.userInfoItemInput}/></label>
                        <label className={s.userInfoItem}><span>Отчество</span><input type="text" className={s.userInfoItemInput}/></label>
                    </div>
                    <div className={s.userInfoItems}>
                        <label className={s.userInfoItem}><span>Город</span><input type="text" className={s.userInfoItemInput}/></label>
                        <label className={s.userInfoItem}><span>Улица</span><input type="text" className={s.userInfoItemInput}/></label>
                    </div>
                    <div className={s.userInfoHomeItems}>
                        <label className={s.userInfoHomeItem}><span>Дом</span><input className={s.userInfoHomeInput} type="text"/></label>
                        <label className={s.userInfoHomeItem}><span>Корпус</span><input className={s.userInfoHomeInput} type="text"/></label>
                        <label className={s.userInfoHomeItem}><span>Квартира</span><input className={s.userInfoHomeInput} type="text"/></label>
                    </div>
                </div>

                <div className={s.userInfoPhoto}>
                    <img src={userPhoto} alt="photo"/>
                    <button className={s.downloadPhoto}>Загрузить фото</button>
                    <div className={s.buttonWrapper}>
                        <button className={s.addAnimal}>Мой питомец</button>
                        <button className={s.register}>Зарегистрироваться</button>
                    </div>
                </div>
            </div>

            {/*<div className={s.buttonWrapper}>*/}
            {/*    <button>Мой питомец</button>*/}
            {/*    <button>Зарегистрироваться</button>*/}
            {/*</div>*/}
        </div>
    );
};

export default UserInfo;