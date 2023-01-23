import React from 'react';
import s from './category.module.scss';
import CategoryList from "../categoryList/CategoryList";

type PropsType = {
    title?: string
    icon?: any
    category: boolean,
    setCategory: any,
}


const Category = ({title, category, setCategory}:PropsType) => {



    const categoryHandler = () => {
        setCategory(!category)
    }

    return (
        <div className={s.categoryWrapper} onClick={categoryHandler}>
            <div className={s.categoryTitle}>
                <p>{title}</p>
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