import React from 'react';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import {banner} from "../../data/data";
import s from './banners.module.scss'
import {Link} from "react-router-dom";
import Slider from "react-slick";



export const Banners = () => {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    banner.map(m => {
                            return (
                                <div className={s.bannerWrapper} key={m.id}>
                                    <Link to={'/shop'}>
                                        <img className={s.bannerImage} src={m.image} alt={m.alt}/>
                                    </Link>
                                </div>
                            )
                        }
                    )
                }
            </Slider>
        </div>
    );
};

