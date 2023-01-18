// import React, {useState} from 'react';
import s from './shop.module.scss';
// import ShopSidebar from "../../components/shopSidebar/ShopSidebar";
// import ShopCategory from "../../components/shopCategory/ShopCategory";
// import dogCard from '../../images/shopPetCard/dog001.png';
// import catCard from '../../images/shopPetCard/cat002.png';
// import {Link} from "react-router-dom";
// import dogEat from '../../images/user.png';


const Shop = () => {

    // const [menu, setMenu] = useState(false);
    //
    // const changeMenu = () => {
    //     setMenu(!menu);
    //     console.log(menu)
    // }


    return (
        <div className={s.shopBg}>
            <div className={s.shopContainer}>
                <div className={s.shopWrapper}>

                    {/*<div className={s.shopPetsCardWrapperDog} style= {menu ? {backgroundColor: 'coral'} : {backgroundImage: `url(${dogCard})`}} onClick={changeMenu}>*/}

                    {/*    <div className={menu ? `${s.shopDogsActive}` : `${s.shopDogs}`}>*/}
                    {/*        <p className={s.shopPetsTitle}>Для собак</p>*/}
                    {/*    </div>*/}

                    {/*    <div className={menu ? `${s.dogEatActive} ${s.shopDogsActive}` : `${s.dogEat} ${s.shopDogs}`}>*/}
                    {/*        <div className={s.dogItems}>*/}
                    {/*            <Link className={s.dogItem} to={'/'}>*/}
                    {/*                <img className={s.shopCategoryIcon} src={dogEat} alt="dogEat"/>*/}
                    {/*                <p className={s.dogItemTitle}>Корма</p>*/}
                    {/*            </Link>*/}
                    {/*            <Link className={s.dogItem} to={'/'}>*/}
                    {/*                <img className={s.shopCategoryIcon} src={dogEat} alt="dogEat"/>*/}
                    {/*                <p className={s.dogItemTitle}>Наполнители</p>*/}
                    {/*            </Link>*/}
                    {/*            <Link className={s.dogItem} to={'/'}>*/}
                    {/*                <img className={s.shopCategoryIcon} src={dogEat} alt="dogEat"/>*/}
                    {/*                <p className={s.dogItemTitle}>Аксессуары</p>*/}
                    {/*            </Link>*/}
                    {/*            <Link className={s.dogItem} to={'/'}>*/}
                    {/*                <img className={s.shopCategoryIcon} src={dogEat} alt="dogEat"/>*/}
                    {/*                <p className={s.dogItemTitle}>Аксессуары</p>*/}
                    {/*            </Link>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className={s.shopPetsCardWrapperCat} style={{backgroundColor: `brown`}}>*/}
                    {/*    <p className={s.shopPetsTitle}>Для котов</p>*/}
                    {/*</div>*/}

                    {/*<div className={s.shopPetsCardWrapper} style={{backgroundColor: 'yellow'}}>*/}
                    {/*    <p className={s.shopPetsTitle}>Для <br/>грызунов</p>*/}
                    {/*</div>*/}

                    {/*<div className={s.shopPetsCardWrapper} style={{backgroundColor: 'blue'}}>*/}
                    {/*    <p className={s.shopPetsTitle}>Для птиц</p>*/}
                    {/*</div>*/}

                    {/*<div className={s.shopPetsCardWrapper} style={{backgroundColor: 'green'}}>*/}
                    {/*    <p className={s.shopPetsTitle}>Для рыб</p>*/}
                    {/*</div>*/}



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



                    {/* Нужно делать 2 компоненты-карточки.
                    Через UseState на onclick вешаем тернарку, либо загружается компонента 1 либо компонента 2.
                     Компоненте 1 передаётся title для кого
                     Компоненте 2 передаётся список категорий товаров.
                     При нажатии на компоненту 2 открывается новая страница - список товаров*/}





                </div>
            </div>
        </div>
    );
};

export default Shop;