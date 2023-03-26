import React from 'react';
import s from './goodsCard.module.scss'
//import {PopularsGoodsType} from "../../data/data";
import {Link} from "react-router-dom";
import ButtonStandart from "../buttonStandart/ButtonStandart";


type PopularsGoodsType = {
    id?: number
    title?: string
    image?: any
    alt?: string
    weight?: string
    type?: string
    country?: string
    compound?: string
    price?: number
    descriptions?: string
}


const GoodsCard = ({title,image,alt, weight, type, country, price,descriptions}:PopularsGoodsType) => {
    return (
        <div className={s.goodsCardWrapper}>
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
                    <ButtonStandart title={'Добавить в корзину'}/>
                </div>
            </div>
            {/*<p className={s.goodsDescription}>{descriptions}</p>*/}

        </div>
    );
};

export default GoodsCard;