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
                <h3>{productData?.title}</h3>
                <div className={s.productInfoWrapper}>
                    <div><img src="" alt=""/></div>
                    <div className={s.productInfo}>
                    <span className={s.productDescription}>
                        {productData?.description}
                    </span>
                        <span className={s.productDescription}>
                        {productData?.countryOfManufacture}
                    </span>
                        <span className={s.productDescription}>
                        {productData?.weight}
                    </span>
                        <span className={s.productDescription}>

                    </span>
                    </div>
                </div>
                <div className={s.productOrderWrapper}>
                    <p className={s.productPrice}>{productData?.price}</p>
                    <button className={s.productOrder}>Order</button>
                </div>
            </div>
        </div>
    );
};
