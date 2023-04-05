import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {useParams} from "react-router-dom";
import {Loading} from "../../components/loading/Loading";
import s from "./product.module.scss";
import GoodsCard from "../../components/goodsCard/GoodsCard";
import {
    getAllAccessoriesForRodents, getAllBathingForRodents, getAllCellsForRodents, getAllDishesForRodents,
    getAllDryFoodForRodents, getAllExtenderForRodents, getAllToysForRodents,
    getAllVitaminsForRodents
} from "../../redux/slices/category/categoryRodent";

const ProductsRodent = () => {

    const dispatch = useAppDispatch()

    const {
        dryFoodForRodentsId,
        vitaminsForRodentsId,
        accessoriesForRodentsId,
        cellsForRodentsId,
        bathingForRodentsId,
        toysForRodentsId,
        extenderForRodentsId,
        dishesForRodentsId,
    } = useParams<{

        dryFoodForRodentsId: string,
        vitaminsForRodentsId: string,
        accessoriesForRodentsId: string,
        cellsForRodentsId: string,
        bathingForRodentsId: string,
        toysForRodentsId: string,
        extenderForRodentsId: string,
        dishesForRodentsId: string,

    }>
    ();

    const {products, loading, error} = useAppSelector((state) => state.rodentCategory);

    console.log(products)

    useEffect(() => {

        if (dryFoodForRodentsId || vitaminsForRodentsId || accessoriesForRodentsId || cellsForRodentsId
            || bathingForRodentsId || toysForRodentsId || extenderForRodentsId || dishesForRodentsId
        ) {

            if (dryFoodForRodentsId != null) {
                dispatch(getAllDryFoodForRodents(dryFoodForRodentsId));
            }
            if (vitaminsForRodentsId != null) {
                dispatch(getAllVitaminsForRodents(vitaminsForRodentsId));
            }
            if (accessoriesForRodentsId != null) {
                dispatch(getAllAccessoriesForRodents(accessoriesForRodentsId));
            }
            if (cellsForRodentsId != null) {
                dispatch(getAllCellsForRodents(cellsForRodentsId));
            }
            if (bathingForRodentsId != null) {
                dispatch(getAllBathingForRodents(bathingForRodentsId));
            }
            if (toysForRodentsId != null) {
                dispatch(getAllToysForRodents(toysForRodentsId));
            }
            if (extenderForRodentsId != null) {
                dispatch(getAllExtenderForRodents(extenderForRodentsId));
            }
            if (dishesForRodentsId != null) {
                dispatch(getAllDishesForRodents(dishesForRodentsId));
            }

        }

    }, [
        dispatch,
        dryFoodForRodentsId, vitaminsForRodentsId, accessoriesForRodentsId, cellsForRodentsId, bathingForRodentsId,
        toysForRodentsId, extenderForRodentsId, dishesForRodentsId
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
                Грызуны, корм
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

export default ProductsRodent;