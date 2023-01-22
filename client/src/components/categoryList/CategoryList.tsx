import React from 'react';
import s from './categoryList.module.scss';

const CategoryList = () => {
    return (
        <div className={s.categoryListWrapper}>
            <ul className={s.listItems}>
                <li className={s.listItem}>Корм</li>
                <li className={s.listItem}>Наполнители</li>
                <li className={s.listItem}>Аксессуары</li>
            </ul>
        </div>
    );
};

export default CategoryList;