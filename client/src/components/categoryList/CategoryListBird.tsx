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
                    <Link className={s.listItemLink} to={`/shop/bird/dryFoodForBirds/${data[0].dryFoodForBirds._id}`}>
                        Сухие корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/bird/vitaminsForBirds/${data[0].vitaminsForBirds._id}`}>
                        Витамины и добавки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/bird/birdcageForBirds/${data[0].birdcageForBirds._id}`}>
                        Клетки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/bird/bathForBirds/${data[0].bathForBirds._id}`}>
                        Купалки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/bird/toysForBirds/${data[0].toysForBirds._id}`}>
                        Игрушки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink}
                          to={`/shop/bird/fillersAndPadsForBirds/${data[0].fillersAndPadsForBirds._id}`}>
                        Наполнители и подстилки
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink}
                          to={`/shop/bird/accessoriesForBirds/${data[0].accessoriesForBirds._id}`}>
                        Аксессуары
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/bird/dishesForBirds/${data[0].dishesForBirds._id}`}>
                        Посуда
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListDog;