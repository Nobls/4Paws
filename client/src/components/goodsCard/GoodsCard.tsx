import React from 'react';
import s from './goodsCard.module.scss'
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
                    <img className={s.goodsImage} src={`http://localhost:3157${productImage}`} alt={title}/>
                </div>
                <div className={s.goodsPriceItems}>
                    <span className={s.goodsPriceItem}>Бренд: {brand}</span>
                    <span className={s.goodsPriceItem}>Тип: {category}</span>
                    <span className={s.goodsPriceItem}>Вес: {weight}</span>
                    <span className={s.goodsPriceItem}>Количество: {quantity}</span>
                    <span className={s.goodsPriceItem}>Страна производитель: {countryOfManufacture}</span>
                </div>
            </div>
            <div className={s.goodsButtonPriceBlock}>
                <p>{price} руб.</p>
                <div className={s.goodsButtonWrapper}>
                    <ButtonStandart title={'Добавить в корзину'}/>
                </div>
            </div>
        </Link>
    );
};

export default GoodsCard;