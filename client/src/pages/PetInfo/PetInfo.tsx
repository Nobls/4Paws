import React from 'react';
import s from './petInfo.module.scss';
import petPhoto from '../../images/pet.png';
//import paw from "../../images/Vector2.png";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";


const PetInfo = () => {

    const buttonTitleRegister = 'Сохранить';
    const buttonTitleSavePhoto = 'Добавить фото';

    return (
        <div className={s.petInfoBg}>
            <h1>Электронная карта питомца</h1>
            <div className={s.petInfoWrapper}>
                <div className={s.petInfoItems}>
                    <label>
                        <span>Кличка</span>
                        <input type="text"/>
                    </label>
                    <label><span>Порода</span><input type="text"/></label>
                    <div className={s.petInfoAgeBlockItems}>
                        <label className={s.petInfoAgeBlockItemsWrapper}>
                            <span className={s.petInfoAgeBlockItemTitle}>Возраст</span>
                            <input className={s.petInfoAgeBlockItemInput} type="text"/>
                        </label>
                        <label className={s.petInfoAgeBlockItemsWrapper}>
                            <span className={s.petInfoSexBlockItemTitle}>Пол</span>
                            <select className={s.petInfoSexBlockItemInput} name="pet">
                                <option value="m">М</option>
                                <option value="w">Ж</option>
                            </select>
                        </label>
                    </div>
                    <label className={s.electronicCardWrapper}>
                        <input className={s.electronicCardInput} type="checkbox"/>
                        <span className={s.electronicCardTitle}>Завести электронную карту</span>
                    </label>
                </div>

                <div className={s.petPhotoWrapper}>
                    <img src={petPhoto} alt="pet"/>
                    <div className={s.buttonWrapper}>
                        {/*<button className={s.downloadPhoto}>*/}
                        {/*    <span className={s.downloadPhotoTitle}>Добавить фото</span>*/}
                        {/*    <img src={paw} alt="paw"/>*/}
                        {/*</button>*/}
                        <ButtonStandart title={buttonTitleSavePhoto}/>
                    </div>
                    <div className={s.buttonWrapper}>
                        <ButtonStandart title={buttonTitleRegister}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetInfo;