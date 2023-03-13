import React from 'react';
import s from "./reviews.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import {PrevArrow} from "../prevArrow/PrevArrow";
import {NextArrow} from "../nextArrow/NextArrow";
import {ReviewsType} from "../../redux/slices/reviews";

type PropsType = {
    reviews: ReviewsType[]
    userData?: any
}

const Reviews = ({reviews, userData}: PropsType) => {

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
        nextArrow: <NextArrow className={''} onClick={slickNext()} style={{color: '#eb5837'}}/>,
        prevArrow: <PrevArrow className={''} onClick={slickPrev()} style={{color: '#eb5837'}}/>

    };

    return (
        <div className={s.reviewWrapper}>

            <h3 className={s.reviewTitle}>Отзывы</h3>

            <Slider {...settings}>
                {
                    reviews.map((m, index) => {
                            return (
                                <div className={s.reviewInner} key={index}>
                                    <div className={s.reviewElements}>
                                        <div>
                                            {/*<img className={s.reviewUserImage} src={`http://localhost:3157${m.user.avatarUrl}`} alt={'User Avatar'}/>*/}
                                        </div>
                                        <div className={s.reviewUser}>
                                            <div className={s.reviewUserName}>
                                                {/*{m.user.fullName}*/}
                                            </div>
                                            <div className={s.reviewDate}>
                                                {m.dateReview.toLowerCase().toString().slice(0, 10)}
                                            </div>
                                            <p className={s.reviewText}>{m.review}</p>
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