import React from 'react';
import './prevArrow.scss'

type PropsType = {
    className: string
    style:object
    onClick: ()=> void
}

export const PrevArrow = (props:PropsType) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        />
    );
};