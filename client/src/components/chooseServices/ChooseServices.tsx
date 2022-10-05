import React from 'react';
import s from './chooseServices.module.scss'
import ButtonStandart from "../buttonStandart/ButtonStandart";

const ChooseServices = () => {
    return (
        <div className={s.chooseServicesContainer}>
            <h3 className={s.chooseServicesTitle}>Выбор Услуг</h3>
            <div className={s.chooseServicesWrapper}>
                <div className={s.chooseServicesItems}>
                    <form className={s.chooseServicesForm}>
                        <label> Выгул собак <input type="checkbox"/></label>
                        <label> Уборка лотка <input type="checkbox"/></label>
                        <label> Кормление собак <input type="checkbox"/></label>
                        <label> Кормление котов <input type="checkbox"/></label>
                    </form>

                    <form className={s.chooseServicesForm}>
                        <label> Выгул собак <input type="checkbox"/></label>
                        <label> Уборка лотка <input type="checkbox"/></label>
                        <label> Кормление собак <input type="checkbox"/></label>
                        <label> Кормление котов <input type="checkbox"/></label>
                    </form>
                </div>
                <div className={s.chooseServicesButton}>
                    <ButtonStandart title={'Заказать'}/>
                </div>
            </div>
        </div>
    );
};

export default ChooseServices;