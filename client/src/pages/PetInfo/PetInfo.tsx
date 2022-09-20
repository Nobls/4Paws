import React from 'react';
import s from './petInfo.module.scss';
import petPhoto from '../../images/pet.png';
import paw from "../../images/Vector2.png";

const PetInfo = () => {
    return (
        <div className={s.petInfoBg}>
            <div className={s.petInfoWrapper}>
                <div className={s.petInfoItems}>
                    <label><span>Кличка</span><input type="text"/></label>
                    <div>
                        <label><span>Возраст</span><input type="text"/></label>
                        <label>
                            <span>Пол</span>
                            <select name="pet">
                                <option value="m">M</option>
                                <option value="w">Ж</option>
                            </select>
                        </label>
                    </div>
                    <label><span>Порода</span><input type="text"/></label>
                    <label><input type="checkbox"/><span>Электронная медицинская карта</span></label>
                </div>

                <div>
                    <img src={petPhoto} alt="pet"/>
                    <div className={s.buttonWrapper}>
                        <button className={s.downloadPhoto}>
                            <span className={s.downloadPhotoTitle}>Добавить фото</span>
                            <img src={paw} alt="paw"/>
                        </button>
                    </div>

                    <div className={s.buttonWrapper}>
                        <button className={s.buttonRegister}>
                            <span>Зарегистрировать</span>
                            <img src={paw} alt="paw"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetInfo;