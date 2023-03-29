import React from 'react';
import s from './populars.module.scss';
import {popularsGoods} from "../../data/data";
import GoodsCard from "../goodsCard/GoodsCard";

const Populars = () => {
    return (
        <div className={s.popularsContainer}>
            <h3 className={s.popularsTile}>Популярные товары</h3>
            <div className={s.wrapper}>
                {/*{
                    popularsGoods.map(m => {
                        return (
                            <GoodsCard key={m.id}
                                       title={m.title}
                                       productImage={m.productImage}
                                       alt={m.alt}
                                       weight={m.weight}
                                       category={m.category}
                                       countryOfManufacture={m.countryOfManufacture}
                                       compound={m.compound}
                                       price={m.price}
                                       descriptions={m.descriptions}
                            />
                        );
                    })
                }*/}
            </div>
        </div>
    );
};

export default Populars;