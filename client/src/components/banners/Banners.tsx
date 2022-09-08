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
                                        {/*<source media="(max-width:800px)" srcSet={m.image800}/>*/}
                                        {/*<source media="(max-width:1280px)" srcSet={m.image1280}/>*/}
                                        {/*<source media="(max-width:1366px)" srcSet={m.image1366}/>*/}
                                        {/*<source media="(max-width:1440px)" srcSet={m.image1440}/>*/}
                                        {/*<source media="(max-width:1536px)" srcSet={m.image1536}/>*/}
                                        {/*<source media="(max-width:1680px)" srcSet={m.image1680}/>*/}
                                        {/*<source media="(max-width:1920px)" srcSet={m.image1920}/>*/}
                                        {/*<source media="(max-width:2560px)" srcSet={m.image2560}/>*/}
                                        <img className={s.bannerImage} src={m.image} alt={m.alt}/>
                                    </picture>
                                </Link>
                            </div>
                        )

                    })





                    // banner.map(m => {
                    //         return (
                    //             <div className={s.bannerWrapper} key={m.id}>
                    //                 <Link to={'/'}>
                    //                     <img className={s.bannerImage} src={m.image} alt={m.alt}/>
                    //                 </Link>
                    //             </div>
                    //         )
                    //     }
                    // )
                }
            </Slider>
        </>
    );
};

