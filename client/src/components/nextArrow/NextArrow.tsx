import React from 'react';
import './nextArrow.scss'

type PropsType = {
    className: string
    style:object
    onClick: ()=> void
}

export const NextArrow = (props:PropsType) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        />
    );
};