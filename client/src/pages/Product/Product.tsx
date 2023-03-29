import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {getAllDryFoodForDogs, getAllPreservesForDogs} from "../../redux/slices/category/categoryDog";
import s from './product.module.scss'
import GoodsCard from "../../components/goodsCard/GoodsCard";
import {Loading} from "../../components/loading/Loading";

const ProductsDog = () => {

    const dispatch = useAppDispatch()

    const {dryFoodDogId, preservesForDogsId} = useParams<{ dryFoodDogId: string, preservesForDogsId: string }>();

    const {products, loading, error} = useAppSelector((state) => state.dogCategory);

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
    }, [dispatch, dryFoodDogId, preservesForDogsId])

    if (loading) {
        return <Loading/>;
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
                    {
                        products.map((m) => {
                            return (
                                /*<div key={m._id}>
                                    <h3>{m.title}</h3>
                                    <img src={m.productImage} alt={m.title}/>
                                    <p>{m.description}</p>
                                    <p>Price: {m.price}</p>
                                    <p>Weight: {m.weight}</p>
                                </div>*/

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
                            )
                        })}
                </div>
            </div>
        </div>
    );
};

export default ProductsDog;