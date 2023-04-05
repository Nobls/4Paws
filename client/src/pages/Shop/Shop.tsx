import s from './shop.module.scss';
import React, {useState} from "react";
import iconDog from '../../images/icons/dog.svg';
import iconCat from '../../images/icons/cat.svg';
import iconBird from '../../images/icons/bird.svg';
import iconRodent from '../../images/icons/rodent.svg';
import ShopDog from "./ShopDog";
import ShopCat from "./ShopCat";
import ShopBird from "./ShopBird";
import ShopRodent from "./ShopRodent";

const Shop = () => {

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categoryHandler = (category: string | null) => {
        setActiveCategory(category === activeCategory ? null : category);
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
                                <ShopDog/>
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
                                    // <CategoryListCat data={data}/>
                                <ShopCat/>
                                )
                            }
                        </div>
                    </div>



                    {/*<div className={s.category}>*/}
                    {/*    <div className={s.categoryWrapper} onClick={() => categoryHandler('cat')}>*/}
                    {/*        <div>*/}
                    {/*            <p className={s.categoryTitle}>Коты</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={s.categoryImage}>*/}
                    {/*            <img className={s.categoryIcon} src={iconCat} alt="cat"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={s.categoryList}>*/}
                    {/*        {*/}
                    {/*            activeCategory === 'cat' && (*/}
                    {/*                <CategoryListCat data={data}/>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*</div>*/}

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
                                    <ShopBird/>
                                )
                            }
                        </div>
                    </div>

                    <div className={s.category}>
                        <div className={s.categoryWrapper} onClick={() => categoryHandler('rodent')}>
                            <div>
                                <p className={s.categoryTitle}>Грызуны</p>
                            </div>
                            <div className={s.categoryImage}>
                                <img className={s.categoryIcon} src={iconRodent} alt="rodent"/>
                            </div>
                        </div>
                        <div className={s.categoryList}>
                            {
                                activeCategory === 'rodent' && (
                                    // <CategoryListCat data={data}/>
                                    <ShopRodent/>
                                )
                            }
                        </div>
                    </div>

                    {/*<div className={s.category}>*/}
                    {/*    <div className={s.categoryWrapper} onClick={() => categoryHandler('rodents')}>*/}
                    {/*        <div>*/}
                    {/*            <p className={s.categoryTitle}>Грызуны</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={s.categoryImage}>*/}
                    {/*            <img className={s.categoryIcon} src={iconRodents} alt="rodents"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        {*/}
                    {/*            activeCategory === 'rodents' && (*/}
                    {/*                <CategoryListRodents/>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={s.category}>*/}
                    {/*    <div className={s.categoryWrapper} onClick={() => categoryHandler('fish')}>*/}
                    {/*        <div>*/}
                    {/*            <p className={s.categoryTitle}>Рыбки</p>*/}
                    {/*        </div>*/}
                    {/*        <div className={s.categoryImage}>*/}
                    {/*            <img className={s.categoryIcon} src={iconFish} alt="fish"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        {*/}
                    {/*            activeCategory === 'fish' && (*/}
                    {/*                <CategoryListFish/>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Shop;