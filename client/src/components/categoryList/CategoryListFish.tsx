import React from 'react';
import s from './categoryList.module.scss';
import {Link} from "react-router-dom";

type PropsType = {
    data: any
}

const CategoryListDog = ({data}:PropsType) => {
    return (
        <div className={s.categoryListWrapper}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Аквариумы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Живые обитатели
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Аквариумы и тумбы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Декорации
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Оборудование
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={'/'}>
                        Химия и лекарства
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListDog;