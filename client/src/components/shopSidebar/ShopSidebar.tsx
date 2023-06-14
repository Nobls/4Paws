import React, {ChangeEvent, useState} from 'react';
import s from './shopSidebar.module.scss';
import {AllBrands} from "./brands/AllBrands";

const ShopSidebar = () => {

    let [paddock, setPaddock] = useState(true)

    const [brand, setBrand] = useState(false)

    const paddockHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let changeCheckboxPaddock = e.target.checked;
        setPaddock(!changeCheckboxPaddock)
        paddock = changeCheckboxPaddock
    }

    const showBrand = (e:any)=>{
        setBrand(!brand)
        e.preventDefault()
    }

    return (
        <div className={s.sideBarWrapper}>
            <form action="" className={s.productForm}>
                <label className={s.productLabel}>
                    <label className={s.productCheck}>
                        <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                        <span className={s.productCheckBox}>
                                    </span>
                    </label>
                    <span className={s.productLabelTitle}>Акции и скидки</span>
                </label>

                <label className={s.productLabel}>
                    <label className={s.productCheck}>
                        <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                        <span className={s.productCheckBox}>
                                    </span>
                    </label>
                    <span className={s.productLabelTitle}>Есть в наличии</span>
                </label>

                <h3 className={s.brandTitle}>Бренд</h3>

                <div>
                    <div className={s.brands}>
                        <form action="" className={s.productForm}>
                            <label className={s.productLabel}>
                                <label className={s.productCheck}>
                                    <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                                    <span className={s.productCheckBox}>
                                    </span>
                                </label>
                                <span className={s.productLabelTitle}>Acana</span>
                            </label>
                            <label className={s.productLabel}>
                                <label className={s.productCheck}>
                                    <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                                    <span className={s.productCheckBox}>
                                    </span>
                                </label>
                                <span className={s.productLabelTitle}>Brit</span>
                            </label>
                            <label className={s.productLabel}>
                                <label className={s.productCheck}>
                                    <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                                    <span className={s.productCheckBox}>
                                    </span>
                                </label>
                                <span className={s.productLabelTitle}>Gemon</span>
                            </label>
                        </form>
                    </div>
                    {brand && <AllBrands/>}
                </div>

                <button onClick={showBrand} >Показать еще</button>

                <h3 className={s.brandTitle}>Возраст питомца</h3>
                <div className={s.petsAge}>
                    <form action="" className={s.productForm}>
                        <label className={s.productLabel}>
                            <label className={s.productCheck}>
                                <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                                <span className={s.productCheckBox}>
                                    </span>
                            </label>
                            <span className={s.productLabelTitle}>Для всех возрастов</span>
                        </label>
                        <label className={s.productLabel}>
                            <label className={s.productCheck}>
                                <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                                <span className={s.productCheckBox}>
                                    </span>
                            </label>
                            <span className={s.productLabelTitle}>До года</span>
                        </label>
                        <label className={s.productLabel}>
                            <label className={s.productCheck}>
                                <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                                <span className={s.productCheckBox}>
                                    </span>
                            </label>
                            <span className={s.productLabelTitle}>Старше года</span>
                        </label>
                        <label className={s.productLabel}>
                            <label className={s.productCheck}>
                                <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                                <span className={s.productCheckBox}>
                                    </span>
                            </label>
                            <span className={s.productLabelTitle}>Старше 10 лет</span>
                        </label>
                    </form>
                </div>




            </form>
        </div>
    );
};

export default ShopSidebar;