import s from './shop.module.scss';
import React, {useEffect, useState} from "react";
import CategoryListDog from "../../components/categoryList/CategoryListDog";
import CategoryListCat from "../../components/categoryList/CategoryListCat";
import CategoryListBird from "../../components/categoryList/CategoryListBird";
import CategoryListRodents from "../../components/categoryList/CategoryListRodents";
import CategoryListFish from "../../components/categoryList/CategoryListFish";
import iconDog from '../../images/icons/dog.svg'
import iconCat from '../../images/icons/cat.svg'
import iconBird from '../../images/icons/bird.svg'
import iconRodents from '../../images/icons/rodent.svg'
import iconFish from '../../images/icons/fish.svg'

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
        window.addEventListener('onmousedown', closeCategoryHandler)
        return ()=> window.removeEventListener('onmousedown', closeCategoryHandler)
    },[closeCategoryHandler])

    return (
        <div className={s.shop}>
            <div>
                <div>
                    <div onClick={closeCategoryHandler}>
                        <h1 className={s.shopTitle}>Выберете товары для вашего питомца</h1>
                    </div>
                    <div className={s.shopCategoryWrapper}>
                        <div className={s.category}>
                            <div className={s.categoryWrapper} onClick={categoryDogHandler}>
                                <div >
                                    <p className={s.categoryTitle}>Собаки</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img className={s.categoryIcon} src={iconDog} alt="dog"/>
                                </div>
                            </div>
                            <div>
                                {
                                    categoryDog && (
                                        <CategoryListDog/>
                                    )
                                }
                            </div>
                        </div>

                        <div className={s.category}>
                            <div className={s.categoryWrapper} onClick={categoryCatHandler}>
                                <div >
                                    <p className={s.categoryTitle}>Коты</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img className={s.categoryIcon} src={iconCat} alt="cat"/>
                                </div>
                            </div>
                            <div className={s.categoryList}>
                                {
                                    categoryCat && (
                                        <CategoryListCat/>
                                    )
                                }
                            </div>
                        </div>

                        <div className={s.category}>
                            <div className={s.categoryWrapper} onClick={categoryBirdHandler}>
                                <div >
                                    <p className={s.categoryTitle}>Птицы</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img className={s.categoryIcon} src={iconBird} alt="bird"/>
                                </div>
                            </div>
                            <div>
                                {
                                    categoryBird && (
                                        <CategoryListBird/>
                                    )
                                }
                            </div>
                        </div>

                        <div className={s.category}>
                            <div className={s.categoryWrapper} onClick={categoryRodentsHandler}>
                                <div >
                                    <p className={s.categoryTitle}>Грызуны</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img className={s.categoryIcon} src={iconRodents} alt="rodents"/>
                                </div>
                            </div>
                            <div>
                                {
                                    categoryRodents && (
                                        <CategoryListRodents/>
                                    )
                                }
                            </div>
                        </div>

                        <div className={s.category}>
                            <div className={s.categoryWrapper} onClick={categoryFishHandler}>
                                <div >
                                    <p className={s.categoryTitle}>Рыбки</p>
                                </div>
                                <div className={s.categoryImage}>
                                    <img className={s.categoryIcon} src={iconFish} alt="fish"/>
                                </div>
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
    );
};

export default Shop;