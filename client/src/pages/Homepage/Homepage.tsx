import React from 'react';
import {Banners} from "../../components/banners/Banners";
import {Advantage} from "../../components/advantage/Advantage";
import {LastNews} from "../../components/lastNews/LastNews";
import Reviews from "../../components/reviews/Reviews";
import Populars from "../../components/populars/Populars";
import s from './homepage.module.scss'
import {Link} from "react-router-dom";

const Homepage = () => {

    return (
        <div>
            <div className={s.homepageBg}>
                <h1 className={s.homePageTitle}>
                    Tолько премиальный <br/> <span className={s.homePageSpan}>уход</span> и счастливые <br/> питомцы.
                </h1>
                    <Link className={s.contactUs} to={'/about'}>
                        Связаться с нами
                    </Link>
            </div>
            <div>
                <Banners/>
                <Advantage/>
                <LastNews/>
                <Reviews/>
                <Populars/>
            </div>
        </div>
    );
};

export default Homepage;