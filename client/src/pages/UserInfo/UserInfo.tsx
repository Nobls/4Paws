import React from 'react';
import s from "./userInfo.module.scss";

const UserInfo = () => {
    return (
        <div className={s.userInfo}>
            <h3 className={s.userInfoTitle}>Информация о Вас</h3>
            <div className={s.userInformationBlock}>
                <div className={s.userInformationWrapper}>
                    <div className={s.userInformationItems}>
                        <label>Имя<input type="text"/></label>
                        <label>Фамилия<input type="text"/></label>
                        <label>Отчество<input type="text"/></label>
                    </div>
                    <div className={s.userInformationItems}>
                        <label>Город<input type="text"/></label>
                        <label>Улица<input type="text"/></label>
                    </div>
                    <div className={s.userInformationHomeItems}>
                        <label>Дом<input className={s.registrationHomeInfo} type="text"/></label>
                        <label>Корпус<input className={s.registrationHomeInfo} type="text"/></label>
                        <label>Квартира<input className={s.registrationHomeInfo} type="text"/></label>
                    </div>
                </div>

                <div className={s.userInformationPhoto}>
                    <img src="/" alt="photo"/>
                    <button>Загрузить фото</button>
                </div>
            </div>

            <div className={s.buttonWrapper}>
                <button>Мой питомец</button>
                <button>Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default UserInfo;