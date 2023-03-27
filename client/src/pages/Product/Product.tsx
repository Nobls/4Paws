import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {getAllDryFoodForDogs, getAllPreservesForDogs} from "../../redux/slices/category/categoryDog";
import s from './product.module.scss'
import {Test} from "../../components/test/Test";

const Product = () => {

    const dispatch = useAppDispatch()

    const {dryFoodDogId, preservesForDogsId} = useParams<{ dryFoodDogId: string,  preservesForDogsId: string  }>();
    //console.log(dryFoodDogId)
    //console.log(preservesForDogsId)

    const {products,loading,error} = useAppSelector((state) => state.dogCategory);

    console.log(products)

    useEffect(() => {
        if (dryFoodDogId || preservesForDogsId) {
            if (dryFoodDogId != null) {
                dispatch(getAllDryFoodForDogs(dryFoodDogId));
            }
            if (preservesForDogsId != null) {
                dispatch(getAllPreservesForDogs(preservesForDogsId));
            }
        }
    }, [dispatch, dryFoodDogId])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div>
            <h1>
                Собаки, корм
            </h1>
            <div>
                <div>sidebar</div>
                <div>product cards</div>
                <div className={s.productsWrapper}>
                    {products?.product && products.product.map((m, index) => {
                        console.log(products)
                        return (
                            <div key={index}>
                                <h3>{m.title}</h3>
                                <img src={m.productImage} alt={m.title}/>
                                <p>{m.description}</p>
                                <p>Price: {m.price}</p>
                                <p>Weight: {m.weight}</p>
                            </div>
                        )
                    })}
                    <Test products={products}/>
                </div>
            </div>
        </div>
    );
};

export default Product;