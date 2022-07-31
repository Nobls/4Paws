import React from 'react';
import {reviews} from "../../data/data";
import s from "../reviews/reviews.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "@ant-design/react-slick";

const Reviews = () => {

    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                                            <img src={m.image} alt={m.alt}/>
                                        </div>
                                        <div className={s.reviewUser}>
                                            <div>
                                                {m.userName}
                                            </div>
                                            <div>
                                                {m.date}
                                            </div>
                                        </div>
                                        <div className={s.reviewRating}>
                                            {m.rating}
                                        </div>
                                    </div>
                                    <p>{m.text}</p>
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