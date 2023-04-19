import React from 'react';
import s from './product.module.scss'
import GoodsCard from "../../components/goodsCard/GoodsCard";

const OneProduct = () => {

    return (
        <div>
            <h1>
                Выбранный продукт
            </h1>
            <div>
                <div>sidebar</div>
                <div>product cards</div>
                <div className={s.productsWrapper}>
                    {/*<GoodsCard title={} productImage={} weight={} quantity={} category={} countryOfManufacture={} description={} price={} brand={} tags={}*/}
                </div>
            </div>
        </div>
    );
};

export default OneProduct;