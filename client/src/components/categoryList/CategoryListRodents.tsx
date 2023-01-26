import React from 'react';
import s from './categoryList.module.scss';
import {Link} from "react-router-dom";

const CategoryListDog = () => {
    return (
        <div className={s.categoryListWrapper}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Сухие корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Витамины и добавки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Аксессуары
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Клетки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Купалки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Игрушки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Наполнители и сено
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Посуда
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListDog;