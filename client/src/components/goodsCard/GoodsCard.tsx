import React from 'react';
import s from './goodsCard.module.scss'
import {PopularsGoodsType} from "../../data/data";
import paw from "../../images/Vector2.png";
import {Link} from "react-router-dom";

const GoodsCard = ({title,image,alt, weight, type, country, price,descriptions}:PopularsGoodsType) => {
    return (
        <div className={s.cardWrapper}>
            <Link className={s.goodsTitleWrapper} to={"/"}>
                <h4 className={s.goodsTitle}>{title}</h4>
            </Link>

            <div className={s.goodsInner}>
                <div>
                    <img className={s.goodsImage} src={image} alt={alt}/>
                </div>
                <div className={s.goodsPriceItems}>
                    <span className={s.goodsPriceItem}>вес: {weight}</span>
                    <span className={s.goodsPriceItem}>тип: {type}</span>
                    <span className={s.goodsPriceItem}>страна производитель: {country}</span>

                    <span className={s.goodsPriceItem}>описание: {descriptions}</span>
                </div>
            </div>
            <div className={s.goodsButtonPriceBlock}>
                <p>{price} руб.</p>
                <div className={s.goodsButtonWrapper}>
                    <button className={s.addToBasket}>
                        <span>Добавить в корзину</span>
                        <img src={paw} alt=""/>
                    </button>
                </div>
            </div>
            {/*<p className={s.goodsDescription}>{descriptions}</p>*/}

        </div>
    );
};

export default GoodsCard;