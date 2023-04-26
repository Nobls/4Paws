import React, {useEffect, useState} from 'react';
import s from './prductPage.module.scss'
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {getOneProduct} from "../../redux/slices/product";

export const ProductPage = () => {

    const {id} = useParams()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [dispatch])

    const product = useAppSelector((state) => state.product.product)

    const [productData, setProductData] = useState(product)

    useEffect(() => {
        setProductData(product)
    }, [product])

    return (
        <div>
            <div className={s.productPageWrapper}>
                <h3 className={s.productTitle}>{productData?.title}</h3>
                <div className={s.productInfoWrapper}>
                    <div className={s.productImageWrapper}>
                        <img className={s.productImage}
                             src="https://images.deal.by/363669748_w640_h640_acana-korm-acana.jpg" alt="title"/>
                    </div>
                    <div className={s.productInfo}>
                        <div className={s.productDescription}>Артикул: Добавить артикул!
                            <span>{productData?.code}</span>
                        </div>
                        <div className={s.productDescription}>Описание:
                            <span>{productData?.description}</span>
                        </div>
                        <div className={s.productDescription}>Страна производитель:
                            <span>{productData?.countryOfManufacture}</span>
                        </div>
                        <div className={s.productDescription}>Вес:
                            <span>{productData?.weight}</span>
                        </div>

                        <div className={s.productPrice}>Цена:
                            <span>{productData?.price}</span>
                        </div>

                        <div className={s.productOrderWrapper}>
                            <button className={s.productOrder}>В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
