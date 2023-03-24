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
import axios from "../../axios/axios";

const Shop = () => {

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categoryHandler = (category: string | null) => {
        setActiveCategory(category === activeCategory ? null : category);
    }

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        axios.get('/shop/dog/category').then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            console.warn(err)
        })
    }, [])

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={s.shop}>
            <div>
                <div>
                    <h1 className={s.shopTitle}>Выберете товары для вашего питомца</h1>
                </div>
                <div className={s.shopCategoryWrapper}>
                    <div className={s.category}>
                        <div className={s.categoryWrapper} onClick={() => categoryHandler('dog')}>
                            <div>
                                <p className={s.categoryTitle}>Собаки</p>
                            </div>
                            <div className={s.categoryImage}>
                                <img className={s.categoryIcon} src={iconDog} alt="dog"/>
                            </div>
                        </div>
                        <div className={s.categoryList}>
                            {
                                activeCategory === 'dog' && (
                                    <CategoryListDog data={data}/>
                                )
                            }
                        </div>
                    </div>

                    <div className={s.category}>
                        <div className={s.categoryWrapper} onClick={() => categoryHandler('cat')}>
                            <div>
                                <p className={s.categoryTitle}>Коты</p>
                            </div>
                            <div className={s.categoryImage}>
                                <img className={s.categoryIcon} src={iconCat} alt="cat"/>
                            </div>
                        </div>
                        <div className={s.categoryList}>
                            {
                                activeCategory === 'cat' && (
                                    <CategoryListCat/>
                                )
                            }
                        </div>
                    </div>

                    <div className={s.category}>
                        <div className={s.categoryWrapper} onClick={() => categoryHandler('bird')}>
                            <div>
                                <p className={s.categoryTitle}>Птицы</p>
                            </div>
                            <div className={s.categoryImage}>
                                <img className={s.categoryIcon} src={iconBird} alt="bird"/>
                            </div>
                        </div>
                        <div>
                            {
                                activeCategory === 'bird' && (
                                    <CategoryListBird/>
                                )
                            }
                        </div>
                    </div>

                    <div className={s.category}>
                        <div className={s.categoryWrapper} onClick={() => categoryHandler('rodents')}>
                            <div>
                                <p className={s.categoryTitle}>Грызуны</p>
                            </div>
                            <div className={s.categoryImage}>
                                <img className={s.categoryIcon} src={iconRodents} alt="rodents"/>
                            </div>
                        </div>
                        <div>
                            {
                                activeCategory === 'rodents' && (
                                    <CategoryListRodents/>
                                )
                            }
                        </div>
                    </div>

                    <div className={s.category}>
                        <div className={s.categoryWrapper} onClick={() => categoryHandler('fish')}>
                            <div>
                                <p className={s.categoryTitle}>Рыбки</p>
                            </div>
                            <div className={s.categoryImage}>
                                <img className={s.categoryIcon} src={iconFish} alt="fish"/>
                            </div>
                        </div>
                        <div>
                            {
                                activeCategory === 'fish' && (
                                    <CategoryListFish/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;