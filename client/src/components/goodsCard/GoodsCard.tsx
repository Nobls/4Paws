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
                    {/*добавить в data поля "тип корма (сухой и т.д.)", "вес" и "страна производитель"*/}
                    <span className={s.goodsPriceItem}>{price} руб.</span>
                </div>
            </div>
            <p className={s.goodsDescription}>{descriptions}</p>
            <button className={s.goodsButton}>Добавить в корзину</button>
        </div>
    );
};

export default GoodsCard;