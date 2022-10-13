import React from 'react';
import s from './yourOrders.module.scss'

const YourOrders = () => {
    return (
        <div className={s.yourOrdersContainer}>
            <div className={s.yourOrdersWrapper}>
                <div>
                    <p>1.</p>
                </div>

                <div>
                    <p>Наполнитель для туалета: “Чистая задница 3000”, 5кг.</p>
                </div>

                <div>
                    <input type="number"/>
                </div>

                <div>
                    15 руб.
                </div>

                <div>
                    <button>x</button>
                </div>
            </div>
        </div>

    );
};

export default YourOrders;