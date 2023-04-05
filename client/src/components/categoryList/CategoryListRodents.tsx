import React from 'react';
import s from './categoryList.module.scss';
import {Link} from "react-router-dom";

type PropsType = {
    data: any
}

const CategoryListRodents = ({data}: PropsType) => {
    return (
        <div className={s.categoryListWrapper}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/dryFoodForRodents/${data[0].dryFoodForRodents._id}`}>
                        Сухие корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/vitaminsForRodents/${data[0].vitaminsForRodents._id}`}>
                        Витамины и добавки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/accessoriesForRodents/${data[0].accessoriesForRodents._id}`}>
                        Аксессуары
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/cellsForRodents/${data[0].cellsForRodents._id}`}>
                        Клетки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/bathingForRodents/${data[0].bathingForRodents._id}`}>
                        Купалки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/toysForRodents/${data[0].toysForRodents._id}`}>
                        Игрушки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/extenderForRodents/${data[0].extenderForRodents._id}`}>
                        Наполнители и сено
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/rodent/dishesForRodents/${data[0].dishesForRodents._id}`}>
                        Посуда
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListRodents;