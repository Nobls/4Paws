import React from 'react';
import s from './categoryList.module.scss';
import {Link} from "react-router-dom";

type PropsType = {
    data: any
}

const CategoryListDog = ({data}: PropsType) => {

    console.log(data)

    return (
        <div className={s.categoryListWrapper}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/dryFoodDog/${data.dryFoodForDogs}`}>
                        Сухие корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/preservesForDogs/${data}`}>
                        Консервы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/vitaminsForDogs/${data}`}>
                        Витамины и добавки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/homeForDogs/:homeForDogsId`}>
                        Домики и лежанки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/toysForDogs/:toysForDogsId`}>
                        Игрушки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/carryingForDogs/:carryingForDogsId`}>
                        Переноски, будки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`'/shop/dog/cosmeticsForDogs/:cosmeticsForDogsId`}>
                        Гигиена и косметика
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/clothesForDogs/:clothesForDogsId`}>
                        Одежда и обувь
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/dishesForDogs/:dishesForDogsId`}>
                        Посуда
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/ammunitionForDogs/:ammunitionForDogsId`}>
                        Амуниция
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/toiletsForDogs/:toiletsForDogsId`}>
                        Туалеты, пеленки
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListDog;