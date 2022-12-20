import React from 'react';
import s from './loading.module.scss'

export const Loading = () => {
    return (
        <div className={s.loadingContainer}>
            <div className={s.followTheLeaderLine}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};