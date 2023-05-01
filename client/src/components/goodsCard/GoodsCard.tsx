import React from 'react';
import s from './goodsCard.module.scss'
//import {PopularsGoodsType} from "../../data/data";
import {Link} from "react-router-dom";
import ButtonStandart from "../buttonStandart/ButtonStandart";


type PopularsGoodsType = {
    _id?: string
    title: string,
    productImage: string,
    weight: string,
    quantity: string,
    category: string,
    countryOfManufacture: string,
    description: string,
    price: string,
    brand: string,
    tags: string,
    alt?: string
}


const GoodsCard = ({
                       title,
                       brand,
                       countryOfManufacture,
                       tags,
                       quantity,
                       weight,
                       description,
                       price,
                       productImage,
                       category,
                       _id
                   }: PopularsGoodsType) => {

    return (
        <Link className={s.goodsCardWrapper} to={`/shop/product/${_id}`}>
            <div className={s.goodsTitleWrapper}>
                <h4 className={s.goodsTitle}>{title}</h4>
            </div>

            <div className={s.goodsInner}>
                <div>
                    <img className={s.goodsImage} src={productImage} alt={title}/>
                </div>
                <div className={s.goodsPriceItems}>
                    <span className={s.goodsPriceItem}>вес: {weight}</span>
                    <span className={s.goodsPriceItem}>тип: {category}</span>
                    <span className={s.goodsPriceItem}>страна производитель: {countryOfManufacture}</span>

                    <span className={s.goodsPriceItem}>описание: {description}</span>
                </div>
            </div>
            <div className={s.goodsButtonPriceBlock}>
                <p>{price} руб.</p>
                <div className={s.goodsButtonWrapper}>
                    <ButtonStandart title={'Добавить в корзину'}/>
                </div>
            </div>
            {/*<p className={s.goodsDescription}>{descriptions}</p>*/}
        </Link>
    );
};

export default GoodsCard;