import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {
    getAllCarryingForDogs,
    getAllCosmeticsForDogs,
    getAllDryFoodForDogs,
    getAllHomeForDogs,
    getAllPreservesForDogs,
    getAllToysForDogs,
    getAllVitaminsForDogs,
    getAllClothesForDogs,
    getAllDishesForDogs,
    getAllAmmunitionForDogs,
    getAllToiletsForDogs,
    getCategoryDryFoodForDogs,
    getCategoryPreservesForDogs,
    getCategoryVitaminsForDogs,
    getCategoryHomeForDogs,
    getCategoryToysForDogs, getCategoryCarryingForDogs, getCategoryCosmeticsForDogs
} from "../../redux/slices/category/categoryDog";
import s from './product.module.scss'
import GoodsCard from "../../components/goodsCard/GoodsCard";
import {Loading} from "../../components/loading/Loading";


const ProductsDog = () => {

    const dispatch = useAppDispatch()

    const {
        dryFoodDogId, preservesForDogsId, vitaminsForDogsId, homeForDogsId, toysForDogsId, carryingForDogsId,
        cosmeticsForDogsId, clothesForDogsId, dishesForDogsId, ammunitionForDogsId, toiletsForDogsId
    } = useParams<{
        dryFoodDogId: string,
        preservesForDogsId: string,
        vitaminsForDogsId: string,
        homeForDogsId: string,
        toysForDogsId: string,
        carryingForDogsId: string,
        cosmeticsForDogsId: string,
        clothesForDogsId: string,
        dishesForDogsId: string,
        ammunitionForDogsId: string,
        toiletsForDogsId: string,
    }>
    ();

    const {products, loading, error, category} = useAppSelector((state) => state.dogCategory);

    console.log(category)

    useEffect(() => {
        if (dryFoodDogId || preservesForDogsId || vitaminsForDogsId || homeForDogsId || toysForDogsId || carryingForDogsId ||
            cosmeticsForDogsId || clothesForDogsId || dishesForDogsId || ammunitionForDogsId || toiletsForDogsId) {
            if (dryFoodDogId != null) {
                dispatch(getAllDryFoodForDogs(dryFoodDogId));
                dispatch((getCategoryDryFoodForDogs(dryFoodDogId)))
            }
            if (preservesForDogsId != null) {
                dispatch(getAllPreservesForDogs(preservesForDogsId));
                dispatch((getCategoryPreservesForDogs(preservesForDogsId)))
            }
            if (vitaminsForDogsId != null) {
                dispatch(getAllVitaminsForDogs(vitaminsForDogsId));
                dispatch((getCategoryVitaminsForDogs(vitaminsForDogsId)))
            }
            if (homeForDogsId != null) {
                dispatch(getAllHomeForDogs(homeForDogsId));
                dispatch(getCategoryHomeForDogs(homeForDogsId));
            }
            if (toysForDogsId != null) {
                dispatch(getAllToysForDogs(toysForDogsId));
                dispatch(getCategoryToysForDogs(toysForDogsId));
            }

            if (carryingForDogsId != null) {
                dispatch(getAllCarryingForDogs(carryingForDogsId));
                dispatch(getCategoryCarryingForDogs(carryingForDogsId));
            }
            if (cosmeticsForDogsId != null) {
                dispatch(getAllCosmeticsForDogs(cosmeticsForDogsId));
                dispatch(getCategoryCosmeticsForDogs(cosmeticsForDogsId));
            }
            if (clothesForDogsId != null) {
                dispatch(getAllClothesForDogs(clothesForDogsId));
            }
            if (dishesForDogsId != null) {
                dispatch(getAllDishesForDogs(dishesForDogsId));
            }
            if (ammunitionForDogsId != null) {
                dispatch(getAllAmmunitionForDogs(ammunitionForDogsId));
            }
            if (toiletsForDogsId != null) {
                dispatch(getAllToiletsForDogs(toiletsForDogsId));
            }
        }
    }, [dispatch, dryFoodDogId, preservesForDogsId, vitaminsForDogsId, homeForDogsId,
        toysForDogsId, carryingForDogsId, cosmeticsForDogsId, clothesForDogsId, dishesForDogsId,
        ammunitionForDogsId, toiletsForDogsId,
    ])

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    console.log(category)

    return (
        <div>
            <h1>
                {category?.category}
            </h1>
            <div>
                <div>sidebar</div>
                <div>product cards</div>
                <div className={s.productsWrapper}>

                    {

                        products.map((m) => {
                            return (
                                    <>
                                        {products.map((m) => {
                                            return (
                                                <h3>{m.category}</h3>
                                            )

                                        })}
                                        <GoodsCard
                                            key={m._id}
                                            title={m.title}
                                            productImage={m.productImage}
                                            weight={m.weight}
                                            quantity={m.quantity}
                                            category={m.category}
                                            countryOfManufacture={m.countryOfManufacture}
                                            description={m.description}
                                            price={m.price}
                                            brand={m.brand}
                                            tags={m.tags}
                                            _id={m._id}
                                        />
                                    </>

                            )
                        })}
                </div>

            </div>
        </div>
    );
};

export default ProductsDog;