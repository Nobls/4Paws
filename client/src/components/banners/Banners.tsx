import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import {banner} from "../../data/data";
import s from './banners.module.scss'
import {Link} from "react-router-dom";


export const Banners = () => {

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: `slick-dots ${s.dots}`,
    };

    return (
        <>
            <Slider className={s.bannerContainer} {...settings}>
                {
                    banner.map(m => {
                        return (
                            <div className={s.bannerWrapper} key={m.id}>
                                <Link to={'/'}>
                                    <picture>
                                        <img className={s.bannerImage} src={m.image} alt={m.alt}/>
                                    </picture>
                                </Link>
                            </div>
                        )

                    })
                }
            </Slider>
        </>
    );
};

