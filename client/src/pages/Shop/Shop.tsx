import s from './shop.module.scss';
import Category from "../../components/category/Category";
import {useEffect, useState} from "react";

const Shop = () => {


    const [categoryDog, setCategoryDog] = useState(false);
    const [categoryCat, setCategoryCat] = useState(false);
    const [categoryBirds, setCategoryBirds] = useState(false);
    const [categoryRodents, setCategoryRodents] = useState(false);
    const [categoryFish, setCategoryFish] = useState(false);

    const closeCategoryHandler = () => {
        setCategoryDog(false)
        setCategoryCat(false)
        setCategoryBirds(false)
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
                            <Category title={'Собаки'} category={categoryDog} setCategory={setCategoryDog}/>
                        </div>

                        <div>
                            <Category title={'Кошки'} category={categoryCat} setCategory={setCategoryCat}/>
                        </div>

                        <div>
                            <Category title={'Птицы'} category={categoryBirds} setCategory={setCategoryBirds}/>
                        </div>

                        <div>
                            <Category title={'Грызуны'} category={categoryRodents} setCategory={setCategoryRodents}/>
                        </div>

                        <div>
                            <Category title={'Рыбки'} category={categoryFish} setCategory={setCategoryFish}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;