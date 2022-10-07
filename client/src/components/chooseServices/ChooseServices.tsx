import React, {useState} from 'react';
import s from './chooseServices.module.scss'
import ButtonStandart from "../buttonStandart/ButtonStandart";
import dogPhoto from '../../images/other/dog.png'
import CustomCheckbox from "../customCheckbox/CustomCheckbox";

const ChooseServices = () => {

    const [checked, setChecked] = useState(false)

    return (
        <div className={s.chooseServicesContainer}>
            <h3 className={s.chooseServicesTitle}>Выбор Услуг</h3>
            <div className={s.chooseServicesWrapper}>
                <form className={s.dateWrapper}>
                    <p className={s.dateText}>Дата</p>
                    <label>C <input className={s.dateFrom} type="date"/> По <input className={s.dateTo}
                                                                                   type="date"/></label>
                </form>
                <div className={s.chooseServicesItems}>
                    <div className={s.chooseServicesForm}>
                        <form className={s.labelWrapper}>
                            <label className={s.label}>
                                <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                <span className={s.labelTitle}>Выгул</span>
                            </label>
                            <label className={checked ? `${s.labelAmountActive}` : `${s.labelAmountDisabled}`}> количество раз
                                <select className={s.servicesSelect} name={'amount'}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select></label>
                        </form>
                        <form className={s.labelWrapper}>
                            <label className={s.label}>
                                <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                <span className={s.labelTitle}>Кормление</span>
                            </label>
                            <label className={checked ? `${s.labelAmountActive}` : `${s.labelAmountDisabled}`}> количество раз
                                <select className={s.servicesSelect} name={'amount'}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select></label>

                        </form>
                        <div className={s.labelWrapper}>
                            <label className={s.label}>
                                <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                <span className={s.labelTitle}>Уборка</span>
                            </label>
                            <label className={checked ? `${s.labelAmountActive}` : `${s.labelAmountDisabled}`}> количество раз
                                <select className={s.servicesSelect} name={'amount'}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select></label>

                        </div>
                        <div className={s.labelWrapper}>
                            <label className={s.label}>
                                <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                <span className={s.labelTitle}>Сопровождение на груминг</span>
                            </label>
                        </div>
                        <div className={s.veterinarian}>
                            <div className={s.labelWrapper}>
                                <label className={s.label}>
                                    <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                    <span className={s.labelTitle}>Сопровождение к ветеринару</span>
                                </label>
                            </div>
                            <div className={s.veterinarianWrapper}>
                                <div className={s.labelWrapper}>
                                    <label className={s.label}>
                                        <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                        <span className={s.labelTitle}>Операция</span>
                                    </label>
                                </div>
                                <div className={s.labelWrapper}>
                                    <label className={s.label}>
                                        <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                        <span className={s.labelTitle}>Прививка</span>
                                    </label>
                                </div>
                                <div className={s.labelWrapper}>
                                    <label className={s.label}>
                                        <CustomCheckbox checked={checked} setChecked={setChecked}/>
                                        <span className={s.labelTitle}>Другие процедуры</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={s.chooseServicesPetCard}>
                        <div className={s.petCardWrapper}>
                            <img className={s.petPhoto} src={dogPhoto} alt='pet'/>
                            <div className={s.petInfo}>
                                <div className={s.petName}>Ева</div>
                                <div className={s.petBreed}>Хаски</div>
                            </div>
                        </div>
                        <div className={s.petCardWrapper}>
                            <img className={s.petPhoto} src={dogPhoto} alt='pet'/>
                            <div className={s.petInfo}>
                                <div className={s.petName}>Ева</div>
                                <div className={s.petBreed}>Хаски</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={s.servicesCommentWrapper}>
                    <textarea className={s.servicesComment} cols={25} rows={5}
                              placeholder={'Комментарий'}>
                    </textarea>
                    <div className={s.chooseServicesButton}>
                        <ButtonStandart title={'Заказать'}/>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ChooseServices;