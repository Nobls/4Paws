import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {useParams} from "react-router-dom";
import {getAllPreservesForCats} from "../../redux/slices/category/categoryCat";
import {Loading} from "../../components/loading/Loading";
import {getAllDryFoodForBirds} from "../../redux/slices/category/categoryBird";

const ProductsBird = () => {

     const dispatch = useAppDispatch()

     const {
         dryFoodForBirdsId, vitaminsForBirdsId,
     } = useParams<{

         dryFoodForBirdsId: string,
         vitaminsForBirdsId: string,
     }>
     ();

     const {products, loading, error} = useAppSelector((state) => state.birdCategory);

     console.log(products)

     useEffect(() => {

         if (dryFoodForBirdsId || vitaminsForBirdsId
             ) {

             if (dryFoodForBirdsId != null) {
                 dispatch(getAllDryFoodForBirds(dryFoodForBirdsId));
             }
             if (vitaminsForBirdsId != null) {
                 dispatch(getAllPreservesForCats(vitaminsForBirdsId));
             }
         }

     }, [dispatch, dryFoodForBirdsId, vitaminsForBirdsId, ])

     if (loading) {
         return <Loading/>;
     }

     if (error) {
         return <div>{error}</div>;
     }

     return (
         <div>

         </div>
     );
 };

 export default ProductsBird;