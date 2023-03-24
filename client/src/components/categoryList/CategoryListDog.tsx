import React from 'react';
import s from './categoryList.module.scss';
import {Link} from "react-router-dom";

type PropsType = {
    data: any
}

const CategoryListDog = ({data}: PropsType) => {

    return (
        <div className={s.categoryListWrapper}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/dryFoodDog/${data[0].dryFoodForDogs._id}`}>
                        Сухие корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/preservesForDogs/${data[0].preservesForDogs._id}`}>
                        Консервы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/vitaminsForDogs/${data[0].vitaminsForDogs._id}`}>
                        Витамины и добавки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/homeForDogs/${data[0].homeForDogs._id}`}>
                        Домики и лежанки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/toysForDogs/${data[0].toysForDogs._id}`}>
                        Игрушки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/carryingForDogs/${data[0].carryingForDogs._id}`}>
                        Переноски, будки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`'/shop/dog/cosmeticsForDogs/${data[0].cosmeticsForDogs._id}`}>
                        Гигиена и косметика
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/clothesForDogs/${data[0].clothesForDogs._id}`}>
                        Одежда и обувь
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/dishesForDogs/${data[0].dishesForDogs._id}`}>
                        Посуда
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/ammunitionForDogs/${data[0].ammunitionForDogs._id}`}>
                        Амуниция
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/dog/toiletsForDogs/${data[0].toiletsForDogs._id}`}>
                        Туалеты, пеленки
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListDog;