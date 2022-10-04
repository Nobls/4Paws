import React from 'react';
import {reviews} from "../../data/data";
import s from "./reviews.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import {PrevArrow} from "../prevArrow/PrevArrow";
import {NextArrow} from "../nextArrow/NextArrow";

const Reviews = () => {

    function slickNext() {
        return function () {
        };
    }

    function slickPrev() {
        return function () {
        };
    }

    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow className={''} onClick={slickNext()} style={ {color:'#eb5837'} } />,
        prevArrow: <PrevArrow className={''} onClick={slickPrev()} style={ {color:'#eb5837'} }/>

    };

    return (
        <div className={s.reviewWrapper}>

            <h3 className={s.reviewTitle}>Отзывы</h3>

            <Slider {...settings}>
                {
                    reviews.map(m => {
                            return (
                                <div className={s.reviewInner} key={m.id}>
                                    <div className={s.reviewElements}>
                                        <div>
                                            <img className={s.reviewUserImage} src={m.image} alt={m.alt}/>
                                        </div>
                                        <div className={s.reviewUser}>
                                            <div className={s.reviewUserName}>
                                                {m.userName}
                                            </div>
                                            <div className={s.reviewDate}>
                                                {m.date}
                                            </div>
                                            <p className={s.reviewText}>{m.text}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </Slider>
        </div>
    );
};

export default Reviews;