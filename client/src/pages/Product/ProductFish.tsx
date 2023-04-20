import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import s from "./product.module.scss";
import GoodsCard from "../../components/goodsCard/GoodsCard";
import {useParams} from "react-router-dom";
import {Loading} from "../../components/loading/Loading";
import {
    getAllAquariums,
    getAllAquariumsAndPedestals,
    getAllChemistryForFish,
    getAllDecorations,
    getAllEquipment,
    getAllFishFood,
    getAllLivingInhabitants
} from "../../redux/slices/category/categoryFish";

export const ProductFish = () => {

    const dispatch = useAppDispatch()

    const {
        aquariumId,
        livingInhabitantsId,
        aquariumsAndPedestalsId,
        fishFoodId,
        decorationsId,
        equipmentId,
        chemistryForFishId,
    } = useParams<{

        aquariumId: string,
        livingInhabitantsId: string,
        aquariumsAndPedestalsId: string,
        fishFoodId: string,
        decorationsId: string,
        equipmentId: string,
        chemistryForFishId: string,
    }>
    ();

    const {products, loading, error} = useAppSelector((state) => state.fishCategory);

    useEffect(() => {

        if (aquariumId || livingInhabitantsId || aquariumsAndPedestalsId || fishFoodId
            || decorationsId || equipmentId || chemistryForFishId
        ) {

            if (aquariumId != null) {
                dispatch(getAllAquariums(aquariumId));
            }
            if (livingInhabitantsId != null) {
                dispatch(getAllLivingInhabitants(livingInhabitantsId));
            }
            if (aquariumsAndPedestalsId != null) {
                dispatch(getAllAquariumsAndPedestals(aquariumsAndPedestalsId));
            }
            if (fishFoodId != null) {
                dispatch(getAllFishFood(fishFoodId));
            }
            if (decorationsId != null) {
                dispatch(getAllDecorations(decorationsId));
            }
            if (equipmentId != null) {
                dispatch(getAllEquipment(equipmentId));
            }
            if (chemistryForFishId != null) {
                dispatch(getAllChemistryForFish(chemistryForFishId));
            }
        }

    }, [
        dispatch,
        aquariumId,
        livingInhabitantsId,
        aquariumsAndPedestalsId,
        fishFoodId,
        decorationsId,
        equipmentId,
        chemistryForFishId,
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
                Рыбы, корм
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
