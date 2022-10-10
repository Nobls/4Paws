import React from 'react';
import s from "./userInfo.module.scss";
import userPhoto from "../../images/user.png";
import {Link} from "react-router-dom";
import LowercaseButton from "../../components/lowercaseButton/LowercaseButton";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";

const UserInfo = () => {
    return (
        <div className={s.userInfo}>
            <h3 className={s.userInfoTitle}>Информация о пользователе</h3>
            <div className={s.userInfoBlock}>
                <div className={s.userInfoWrapper}>
                    <div className={s.userInfoItems}>
                        <label className={s.userInfoItem}><span>Имя</span><input type="text"
                                                                                 className={s.userInfoItemInput}/></label>
                        <label className={s.userInfoItem}><span>Фамилия</span><input type="text"
                                                                                     className={s.userInfoItemInput}/></label>
                        <label className={s.userInfoItem}><span>Отчество</span><input type="text"
                                                                                      className={s.userInfoItemInput}/></label>
                    </div>
                    <div className={s.userInfoItems}>
                        <label className={s.userInfoItem}><span>Город</span><input type="text"
                                                                                   className={s.userInfoItemInput}/></label>
                        <label className={s.userInfoItem}><span>Улица</span><input type="text"
                                                                                   className={s.userInfoItemInput}/></label>
                    </div>
                    <div className={s.userInfoHomeItems}>
                        <label className={s.userInfoHomeItem}><span>Дом</span><input className={s.userInfoHomeInput}
                                                                                     type="text"/></label>
                        <label className={s.userInfoHomeItem}><span>Корпус</span><input className={s.userInfoHomeInput}
                                                                                        type="text"/></label>
                        <label className={s.userInfoHomeItem}><span>Квартира</span><input
                            className={s.userInfoHomeInput} type="text"/></label>
                    </div>
                </div>

                <div className={s.userInfoPhoto}>
                    <img className={s.userPhoto} src={userPhoto} alt="photo"/>
                    <div className={s.buttonWrapper}>
                        <LowercaseButton title={'Добавить фото'}/>
                    </div>
                    <ButtonStandart title={'Зарегистрироваться'}/>
                    <Link to={"/petInfo"}>!goToPetInfo</Link>
                    <Link to={"/usersAccount"}>!goToUsersAccount</Link>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;