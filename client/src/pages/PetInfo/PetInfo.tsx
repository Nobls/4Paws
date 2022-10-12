import React, {useEffect} from 'react';
import s from './petInfo.module.scss';
import petPhoto from '../../images/pet.png';
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import LowercaseButton from "../../components/lowercaseButton/LowercaseButton";


const PetInfo = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const buttonTitleRegister = 'Сохранить';

    const addText2 = () => {
        console.log('Add Text2')
    }

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
                            <input className={s.petInfoAgeBlockItemInput} type="number"/>
                        </label>
                        <label className={s.petInfoAgeBlockItemsWrapper}>
                            <span className={s.petInfoSexBlockItemTitle}>Пол</span>
                            <select className={s.petInfoSexBlockItemInput} name="pet">
                                <option value="m">М</option>
                                <option value="w">Ж</option>
                            </select>
                        </label>
                    </div>
                    <div className={s.electronicCardWrapper}>
                        <label className={s.electronicCardLabel}>
                            <input className={s.electronicCardInput} type="checkbox"/>
                            <span className={s.electronicCardTitle}>Завести электронную карту</span>
                        </label>
                    </div>

                </div>

                <div className={s.petPhotoWrapper}>
                    <img className={s.petPhoto} src={petPhoto} alt="pet"/>
                    <div className={s.buttonWrapper}>
                        <LowercaseButton title={'Добавить фото'}/>
                    </div>
                    <ButtonStandart title={buttonTitleRegister} onclick={addText2}/>
                </div>
            </div>
        </div>
    );
};

export default PetInfo;