import React from 'react';
import s from './goodsCard.module.scss'
import {PopularsGoodsType} from "../../data/data";

const GoodsCard = ({title,image,alt,price,descriptions}:PopularsGoodsType) => {
    return (
        <div className={s.cardWrapper}>
            <h4 className={s.goodsTitle}>{title}</h4>
            <div className={s.goodsInner}>
                <div>
                    <img className={s.goodsImage} src={image} alt={alt}/>
                </div>
                <div className={s.goodsPriceItems}>
                    <span className={s.goodsPriceItem}>100гр: {price.g100}</span>
                    <span className={s.goodsPriceItem}>400гр: {price.g400}</span>
                    <span className={s.goodsPriceItem}>1000гр: {price.g1000}</span>
                </div>
            </div>
            <p className={s.goodsDescription}>{descriptions}</p>
            <button className={s.goodsButton}>Добавить в корзину</button>
        </div>
    );
};

export default GoodsCard;