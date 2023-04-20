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
                    <Link className={s.listItemLink} to={`/shop/fish/aquariums/${data[0].aquariums._id}`}>
                        Аквариумы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/fish/livingInhabitants/${data[0].livingInhabitants._id}`}>
                        Живые обитатели
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/fish/aquariumsAndPedestals/${data[0].aquariumsAndPedestals._id}`}>
                        Аквариумы и тумбы
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/fish/fishFood/${data[0].fishFood._id}`}>
                        Корма
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/fish/decorations/${data[0].decorations._id}`}>
                        Декорации
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/fish/equipment/${data[0].equipment._id}`}>
                        Оборудование
                    </Link>
                </li>
                <li className={s.listItem}>
                    <Link className={s.listItemLink} to={`/shop/fish/chemistryForFish/${data[0].chemistryAndMedicines._id}`}>
                        Химия и лекарства
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CategoryListDog;