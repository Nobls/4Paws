import React from 'react';
import s from './categoryList.module.scss';
import {Link} from "react-router-dom";

type PropsType = {
    data: any,
}

const CategoryListCat = ({data}:PropsType) => {
    return (
        <div className={s.categoryListWrapper}>
            <ul className={s.listItems}>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/dryFoodForCats/${data[0].dryFoodForCats._id}`}>
                        Сухие корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/preservesForCats/${data[0].preservesForCats._id}`}>
                        Консервы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/vitaminsForCats/${data[0].vitaminsForCats._id}`}>
                        Витамины и добавки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/homeForCats/${data[0].homeForCats._id}`}>
                        Наполнители
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/toysForCats/${data[0].toysForCats._id}`}>
                        Игрушки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/carryingForCats/${data[0].carryingForCats._id}`}>
                        Переноски
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/cosmeticsForCats/${data[0].cosmeticsForCats._id}`}>
                        Гигиена и косметика
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/scratchingPostsForCats/${data[0].scratchingPostsForCats._id}`}>
                        Когтеточки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/dishesForCats/${data[0].dishesForCats._id}`}>
                        Домики и лежаки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/ammunitionForCats/${data[0].ammunitionForCats._id}`}>
                        Амуниция
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/cat/toiletsForCats/${data[0].toiletsForCats._id}`}>
                        Туалеты
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListCat;