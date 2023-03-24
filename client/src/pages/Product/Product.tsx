import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hook/hook";
import {getAllDryFoodForDogs} from "../../redux/slices/category/categoryDog";

const Product = () => {

    const {id} = useParams()
    console.log(id)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getAllDryFoodForDogs(id))
    },[])

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