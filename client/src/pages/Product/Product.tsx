import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {getAllDryFoodForDogs} from "../../redux/slices/category/categoryDog";

const Product = () => {

    const {dryFoodForDogsId} = useParams()

    const dispatch = useAppDispatch()

    const dryFoodDog = useAppSelector((state)=>state.dogCategory.dryFoodForDogs.product)

    console.log(dryFoodDog)

    useEffect(()=>{
        dispatch(getAllDryFoodForDogs(dryFoodForDogsId))
    },[dispatch])

    return (
        <div>
            <h1>
                Собаки, корм
            </h1>
            <div>
                <div>sidebar</div>
                <div>product cards</div>
            </div>
        </div>
    );
};

export default Product;