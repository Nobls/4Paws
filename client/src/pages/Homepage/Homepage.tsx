import React from 'react';
import {Banners} from "../../components/banners/Banners";
import {Advantage} from "../../components/advantage/Advantage";
import {LastNews} from "../../components/lastNews/LastNews";
import Reviews from "../../components/reviews/Reviews";
import Populars from "../../components/populars/Populars";
import s from './homepage.module.scss'

const Homepage = () => {

    return (
        <div className={s.homepageBg}>
            <Banners/>
            <Advantage/>
            <LastNews/>
            <Reviews/>
            <Populars/>
        </div>
    );
};

export default Homepage;