import React, {useState} from 'react';
import s from './category.module.scss';
import CategoryList from "../categoryList/CategoryList";

type PropsType = {
    category: boolean,
    setCategory: any,
}


const Category = ({category, setCategory}:PropsType) => {



    const categoryHandler = () => {
        setCategory(!category)
    }

    return (
        <div className={s.categoryWrapper} onClick={categoryHandler}>
            <div className={s.categoryTitle}>
                <p>Для собак</p>
            </div>
            <div className={s.categoryImage}>
                <img src="/" alt="dog"/>
            </div>
            <div>
                {
                    category && (
                        <CategoryList/>
                    )
                }
            </div>
        </div>
    );
};

export default Category;