import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import s from './product.module.scss'
import GoodsCard from "../../components/goodsCard/GoodsCard";
import {Loading} from "../../components/loading/Loading";
import {
    getAllDryFoodForCats,
    getAllPreservesForCats,
    getAllVitaminsForCats,
    getAllHomeForCats,
    getAllToysForCats,
    getAllCarryingForCats,
    getAllCosmeticsForCats,
    getAllScratchingPostsForCats,
    getAllDishesForCats,
    getAllAmmunitionForCats,
    getAllToiletsForCats,
    getCategoryDryFoodForCats, getCategoryPreservesForCats,
} from "../../redux/slices/category/categoryCat";

const ProductsCat = () => {

    const dispatch = useAppDispatch()

    const {
        dryFoodForCatsId, preservesForCatsId, vitaminsForCatsId, homeForCatsId, toysForCatsId, carryingForCatsId,
        cosmeticsForCatsId, scratchingPostsForCatsId, dishesForCatsId, ammunitionForCatsId, toiletsForCatsId
    } = useParams<{

        dryFoodForCatsId: string,
        preservesForCatsId: string,
        vitaminsForCatsId: string,
        homeForCatsId: string,
        toysForCatsId: string,
        carryingForCatsId: string,
        cosmeticsForCatsId: string,
        scratchingPostsForCatsId: string,
        dishesForCatsId: string,
        ammunitionForCatsId: string,
        toiletsForCatsId: string,
    }>
    ();

    const {products, loading, error, category} = useAppSelector((state) => state.catCategory);

    console.log(products)

    useEffect(() => {

        if (dryFoodForCatsId || preservesForCatsId || vitaminsForCatsId || homeForCatsId || toysForCatsId || carryingForCatsId
            || cosmeticsForCatsId || scratchingPostsForCatsId || dishesForCatsId || ammunitionForCatsId || toiletsForCatsId) {

            if (dryFoodForCatsId != null) {
                dispatch(getAllDryFoodForCats(dryFoodForCatsId));
                dispatch(getCategoryDryFoodForCats(dryFoodForCatsId));
            }
            if (preservesForCatsId != null) {
                dispatch(getAllPreservesForCats(preservesForCatsId));
                dispatch(getCategoryPreservesForCats(preservesForCatsId));
            }
            if (vitaminsForCatsId != null) {
                dispatch(getAllVitaminsForCats(vitaminsForCatsId));
            }
            if (homeForCatsId != null) {
                dispatch(getAllHomeForCats(homeForCatsId));
            }
            if (toysForCatsId != null) {
                dispatch(getAllToysForCats(toysForCatsId));
            }
            if (carryingForCatsId != null) {
                dispatch(getAllCarryingForCats(carryingForCatsId));
            }
            if (cosmeticsForCatsId != null) {
                dispatch(getAllCosmeticsForCats(cosmeticsForCatsId));
            }
            if (scratchingPostsForCatsId != null) {
                dispatch(getAllScratchingPostsForCats(scratchingPostsForCatsId));
            }
            if (dishesForCatsId != null) {
                dispatch(getAllDishesForCats(dishesForCatsId));
            }
            if (ammunitionForCatsId != null) {
                dispatch(getAllAmmunitionForCats(ammunitionForCatsId));
            }
            if (toiletsForCatsId != null) {
                dispatch(getAllToiletsForCats(toiletsForCatsId));
            }

        }

    }, [dispatch, dryFoodForCatsId, preservesForCatsId, vitaminsForCatsId, homeForCatsId,
        toysForCatsId, carryingForCatsId, cosmeticsForCatsId, scratchingPostsForCatsId, dishesForCatsId, ammunitionForCatsId,
        toiletsForCatsId])

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

export default ProductsCat;