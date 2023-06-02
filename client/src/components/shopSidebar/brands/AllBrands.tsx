import React, {ChangeEvent, useState} from 'react';
import s from '../shopSidebar.module.scss';


export const AllBrands = () => {

    let [paddock, setPaddock] = useState(true)

    const paddockHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let changeCheckboxPaddock = e.target.checked;
        setPaddock(!changeCheckboxPaddock)
        paddock = changeCheckboxPaddock
    }

    return (
        <div  className={s.brandListActive}>
            <form action="" className={s.productForm}>
                <label className={s.productLabel}>
                    <label className={s.productCheck}>
                        <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                        <span className={s.productCheckBox}>
                                    </span>
                    </label>
                    <span className={s.productLabelTitle}>Vercele-Laga</span>
                </label>

                <label className={s.productLabel}>
                    <label className={s.productCheck}>
                        <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                        <span className={s.productCheckBox}>
                                    </span>
                    </label>
                    <span className={s.productLabelTitle}>Vercele-Laga</span>
                </label>

                <label className={s.productLabel}>
                    <label className={s.productCheck}>
                        <input className={s.productCheckInput} type="checkbox" onChange={paddockHandler}/>
                        <span className={s.productCheckBox}>
                                    </span>
                    </label>
                    <span className={s.productLabelTitle}>Vercele-Laga</span>
                </label>
            </form>
        </div>
    );
};