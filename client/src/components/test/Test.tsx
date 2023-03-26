import React from 'react';

type PropsType = {
    m?: any
}

export const Test = ({m}: PropsType) => {

    console.log(m)

    return (
        <div>
            <div>
            <h3>{m.title}</h3>
            <img src={m.productImage} alt={m.title} />
            <p>{m.description}</p>
            <p>Price: {m.price}</p>
            <p>Weight: {m.weight}</p>
        </div>
        </div>
    );
};
