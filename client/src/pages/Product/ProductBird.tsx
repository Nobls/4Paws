import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {useParams} from "react-router-dom";
import {Loading} from "../../components/loading/Loading";
import {
    getAllAccessoriesForBirds,
    getAllBathForBirds,
    getAllBirdcageForBirds,
    getAllDishesForBirds,
    getAllDryFoodForBirds,
    getAllFillersAndPadsForBirds,
    getAllToysForBirds,
    getAllVitaminsForBirds,
    getCategoryDryFoodForBird,
    getCategoryVitaminsForBird
} from "../../redux/slices/category/categoryBird";
import s from "./product.module.scss";
import GoodsCard from "../../components/goodsCard/GoodsCard";

const ProductsBird = () => {

    const dispatch = useAppDispatch()

    const {
        dryFoodForBirdsId,
        vitaminsForBirdsId,
        birdcageForBirdsId,
        bathForBirdsId,
        toysForBirdsId,
        fillersAndPadsForBirdsId,
        accessoriesForBirdsId,
        dishesForBirdsId,
    } = useParams<{

        dryFoodForBirdsId: string,
        vitaminsForBirdsId: string,
        birdcageForBirdsId: string,
        bathForBirdsId: string,
        toysForBirdsId: string,
        fillersAndPadsForBirdsId: string,
        accessoriesForBirdsId: string,
        dishesForBirdsId: string,

    }>
    ();

    const {products, loading, error, category} = useAppSelector((state) => state.birdCategory);

    useEffect(() => {

        if (dryFoodForBirdsId || vitaminsForBirdsId || birdcageForBirdsId ||
            bathForBirdsId || toysForBirdsId || fillersAndPadsForBirdsId ||
            accessoriesForBirdsId || dishesForBirdsId)
        {

            if (dryFoodForBirdsId != null) {
                dispatch(getAllDryFoodForBirds(dryFoodForBirdsId));
                dispatch(getCategoryDryFoodForBird(dryFoodForBirdsId));
            }
            if (vitaminsForBirdsId != null) {
                dispatch(getAllVitaminsForBirds(vitaminsForBirdsId));
                dispatch(getCategoryVitaminsForBird(vitaminsForBirdsId));
            }
            if (birdcageForBirdsId != null) {
                dispatch(getAllBirdcageForBirds(birdcageForBirdsId));
            }
            if (bathForBirdsId != null) {
                dispatch(getAllBathForBirds(bathForBirdsId));
            }
            if (toysForBirdsId != null) {
                dispatch(getAllToysForBirds(toysForBirdsId));
            }
            if (fillersAndPadsForBirdsId != null) {
                dispatch(getAllFillersAndPadsForBirds(fillersAndPadsForBirdsId));
            }
            if (accessoriesForBirdsId != null) {
                dispatch(getAllAccessoriesForBirds(accessoriesForBirdsId));
            }
            if (dishesForBirdsId != null) {
                dispatch(getAllDishesForBirds(dishesForBirdsId));
            }
        }

    }, [
        dispatch,
        dryFoodForBirdsId,
        vitaminsForBirdsId,
        birdcageForBirdsId,
        bathForBirdsId,
        toysForBirdsId,
        fillersAndPadsForBirdsId,
        accessoriesForBirdsId,
        dishesForBirdsId
    ])

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>{error}</div>;
    }



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

export default ProductsBird;