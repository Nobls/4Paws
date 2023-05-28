import React, {useEffect, useState} from 'react';
import s from './prductPage.module.scss'
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {getOneProduct} from "../../redux/slices/product";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";

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
                             src={`http://localhost:3157${productData?.productImage}`} alt={productData?.title}/>
                    </div>
                    <div className={s.productInfo}>
                        <div className={s.productDescription}>Артикул: Добавить артикул!
                            <span>{productData?.code}</span>
                        </div>
                        <div className={s.productDescription}>Категория: сухой корм для собак
                            <span>{productData?.category}</span>
                        </div>
                        <div className={s.productDescription}>Бренд: Acana
                            <span>{productData?.brand}</span>
                        </div>
                        <div className={s.productDescription}>Описание:
                            <span>{productData?.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Blanditiis consequuntur dicta in iure necessitatibus provident, soluta? Blanditiis ducimus ipsam
                                libero officiis quam quidem repellat velit vitae voluptate. Aspernatur, impedit, incidunt.</span>
                        </div>
                        <div className={s.productDescription}>Страна производитель:
                            <span>{productData?.countryOfManufacture}</span>
                        </div>
                        <div className={s.productDescription}>Вес:
                            <span>{productData?.weight} гр.</span>
                        </div>

                        <div className={s.productPrice}>Цена:
                            <span>{productData?.price} руб.</span>
                        </div>

                        <div className={s.productOrderWrapper}>
                            {/*<button className={s.productOrder}>В корзину</button>*/}
                            <ButtonStandart title={'В корзину'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
