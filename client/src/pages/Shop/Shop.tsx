import React, {useState} from 'react';
import s from './shop.module.scss';
// import ShopSidebar from "../../components/shopSidebar/ShopSidebar";
// import ShopCategory from "../../components/shopCategory/ShopCategory";
import dogCard from '../../images/shopPetCard/dog001.png';
import catCard from '../../images/shopPetCard/cat002.png';


const Shop = () => {

    const [menu, setMenu] = useState(false);

    const changeMenu = () => {
        setMenu(!menu);
        console.log(menu)
    }



    return (
        <div className={s.shopBg}>
            <div className={s.shopContainer}>
                <div className={s.shopWrapper}>

                    <div className={s.shopPetsCardWrapperDog} style= {menu ? {backgroundColor: 'coral'} : {backgroundImage: `url(${dogCard})`}} onClick={changeMenu}>

                        <div className={menu ? `${s.shopDogsActive}` : `${s.shopDogs}`}>
                            <p className={s.shopPetsTitle}>Для собак</p>
                        </div>

                        <div className={menu ? `${s.dogEatActive} ${s.shopDogsActive}` : `${s.dogEat} ${s.shopDogs}`}>
                            <p>ЫЫЫыыыыы!!!</p>
                            <p>ЫЫЫыыыыы!!!</p>
                            <p>ЫЫЫыыыыы!!!</p>
                            <p>ЫЫЫыыыыы!!!</p>
                        </div>
                    </div>


                    <div className={s.shopPetsCardWrapperCat} style={{backgroundColor: `brown`}}>
                        <p className={s.shopPetsTitle}>Для котов</p>
                    </div>

                    <div className={s.shopPetsCardWrapper} style={{backgroundColor: 'yellow'}}>
                        <p className={s.shopPetsTitle}>Для <br/>грызунов</p>
                    </div>

                    <div className={s.shopPetsCardWrapper} style={{backgroundColor: 'blue'}}>
                        <p className={s.shopPetsTitle}>Для птиц</p>
                    </div>

                    <div className={s.shopPetsCardWrapper} style={{backgroundColor: 'green'}}>
                        <p className={s.shopPetsTitle}>Для рыб</p>
                    </div>


                    {/*<div className={s.shopSidebar}>*/}
                    {/*    <ShopSidebar/>*/}
                    {/*</div>*/}

                    {/*<div className={s.shopCategoryWrapper}>*/}

                    {/*    <div className={s.shopCategoryTitle}>*/}
                    {/*        <h2>Для собак</h2>*/}
                    {/*    </div>*/}

                    {/*    <div className={s.shopCategory}>*/}
                    {/*        <ShopCategory/>*/}
                    {/*        <ShopCategory/>*/}
                    {/*        <ShopCategory/>*/}
                    {/*        <ShopCategory/>*/}
                    {/*        <ShopCategory/>*/}
                    {/*        <ShopCategory/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
};

export default Shop;