import React from 'react';
import s from './shop.module.scss';
import ShopSidebar from "../../components/shopSidebar/ShopSidebar";
import ShopCategory from "../../components/shopCategory/ShopCategory";

const Shop = () => {
    return (
        <div className={s.shopBg}>
            <div className={s.shopContainer}>
                <div className={s.shopWrapper}>

                    <div className={s.shopSidebar}>
                        <ShopSidebar/>
                    </div>

                    <div className={s.shopCategoryWrapper}>

                        <div className={s.shopCategoryTitle}>
                            <h2>Для собак</h2>
                        </div>

                        <div className={s.shopCategory}>
                            <ShopCategory/>
                            <ShopCategory/>
                            <ShopCategory/>
                            <ShopCategory/>
                            <ShopCategory/>
                            <ShopCategory/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;