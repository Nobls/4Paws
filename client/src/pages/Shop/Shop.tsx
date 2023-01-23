import s from './shop.module.scss';
import React, {useEffect, useState} from "react";
import CategoryListDog from "../../components/categoryList/CategoryListDog";
import CategoryListCat from "../../components/categoryList/CategoryListCat";
import CategoryListBird from "../../components/categoryList/CategoryListBird";
import CategoryListRodents from "../../components/categoryList/CategoryListRodents";
import CategoryListFish from "../../components/categoryList/CategoryListFish";

const Shop = () => {


    const [categoryDog, setCategoryDog] = useState(false);
    const [categoryCat, setCategoryCat] = useState(false);
    const [categoryBird, setCategoryBird] = useState(false);
    const [categoryRodents, setCategoryRodents] = useState(false);
    const [categoryFish, setCategoryFish] = useState(false);

    const categoryDogHandler = () => {
        setCategoryDog(!categoryDog)
    }
    const categoryCatHandler = () => {
        setCategoryCat(!categoryCat)
    }
    const categoryBirdHandler = () => {
        setCategoryBird(!categoryBird)
    }
    const categoryRodentsHandler = () => {
        setCategoryRodents(!categoryRodents)
    }
    const categoryFishHandler = () => {
        setCategoryFish(!categoryFish)
    }

    const closeCategoryHandler = () => {
        setCategoryDog(false)
        setCategoryCat(false)
        setCategoryBird(false)
        setCategoryRodents(false)
        setCategoryFish(false)
    }

    useEffect(()=>{
        window.addEventListener('mousedown', closeCategoryHandler)
        return ()=> window.removeEventListener('click', closeCategoryHandler)
    },[closeCategoryHandler])

    return (
        <div className={s.shop}>
            <div>
                <div>
                    <div onClick={closeCategoryHandler}>
                        <h1 className={s.shopTitle}>Выберете товары для вашего питомца</h1>
                    </div>
                    <div className={s.shopCategoryWrapper}>
                        <div>
                            <div className={s.categoryWrapper} onClick={categoryDogHandler}>
                                <div className={s.categoryTitle}>
                                    <p>Собаки</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img src="/" alt="dog"/>
                                </div>
                                <div>
                                    {
                                        categoryDog && (
                                            <CategoryListDog/>
                                        )
                                    }
                                </div>
                            </div>

                        </div>

                        <div>
                            <div className={s.categoryWrapper} onClick={categoryCatHandler}>
                                <div className={s.categoryTitle}>
                                    <p>Коты</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img src="/" alt="cat"/>
                                </div>
                                <div>
                                    {
                                        categoryCat && (
                                            <CategoryListCat/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={s.categoryWrapper} onClick={categoryBirdHandler}>
                                <div className={s.categoryTitle}>
                                    <p>Птицы</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img src="/" alt="bird"/>
                                </div>
                                <div>
                                    {
                                        categoryBird && (
                                            <CategoryListBird/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={s.categoryWrapper} onClick={categoryRodentsHandler}>
                                <div className={s.categoryTitle}>
                                    <p>Грызуны</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img src="/" alt="rodents"/>
                                </div>
                                <div>
                                    {
                                        categoryRodents && (
                                            <CategoryListRodents/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={s.categoryWrapper} onClick={categoryFishHandler}>
                                <div className={s.categoryTitle}>
                                    <p>Рыбки</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img src="/" alt="fish"/>
                                </div>
                                <div>
                                    {
                                        categoryFish && (
                                            <CategoryListFish/>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;