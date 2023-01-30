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
                        Консервы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Витамины и добавки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Домики и лежанки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Игрушки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Переноски, будки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Гигиена и косметика
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Одежда и обувь
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Посуда
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Амуниция
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Туалеты, пеленки
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListDog;