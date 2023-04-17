import React, {useEffect} from 'react';
import s from './prductPage.module.scss'
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hook/hook";
import {getOneProduct} from "../../redux/slices/category/categoryDog";

export const ProductPage = () => {

    const {id} = useParams()

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getOneProduct(id))
    },[dispatch])

    return (
        <div className={s.productPageWrapper}>
            <h3>Title</h3>
            <div className={s.productInfoWrapper}>
                <div><img src="" alt=""/></div>
                <div className={s.productInfo}>
                    <span className={s.productDescription}>
                    </span>
                    <span className={s.productDescription}>

                    </span>
                    <span className={s.productDescription}>

                    </span>
                    <span className={s.productDescription}>

                    </span>
                </div>
            </div>
            <div className={s.productOrderWrapper}>
                <p className={s.productPrice}>Price</p>
                <button className={s.productOrder}>Order</button>
            </div>
        </div>
    );
};
