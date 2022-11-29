import React from 'react';
import s from './shopCategory.module.scss';
import {Link} from "react-router-dom";

const ShopCategory = () => {
    return (
        <Link to={'/'} className={s.shopCategoryCardWrapper}>
            <div className={s.shopCategoryCardLink}>
                <p className={s.shopCategoryCardTitle}>
                    lol
                </p>
            </div>
        </Link>
    );
};

export default ShopCategory;