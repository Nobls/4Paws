import React from 'react';
//import {CategoryDog} from "../../redux/slices/category/categoryDog";

type PropsType = {
    m?: any
    products?: any
}

export const Test = ({products}: PropsType) => {



    return (
        <div>
            {/*{
                products?.product && products.product.map((m, index) => {
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
                })
            }*/}
            {/*<div>
            <h3>{m.title}</h3>
            <img src={m.productImage} alt={m.title} />
            <p>{m.description}</p>
            <p>Price: {m.price}</p>
            <p>Weight: {m.weight}</p>*/}
        </div>

    );
};
