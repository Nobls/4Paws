import React from 'react';
import {Banners} from "../../components/banners/Banners";
import {Advantage} from "../../components/advantage/Advantage";
import {LastNews} from "../../components/lastNews/LastNews";
import Reviews from "../../components/reviews/Reviews";
import Populars from "../../components/populars/Populars";
import s from './homepage.module.scss';
import {Link} from "react-router-dom";
import paw from "../../images/Vector2.png";
import OurTeam from "../../components/ ourTeam/OurTeam";
import OurPartners from "../../components/ ourPartners/OurPartners";

const Homepage = () => {

    return (
        <div>
            <div className={s.homepageBg}>
                <h1 className={s.homePageTitle}>
                    Tолько премиальный <br/> <span className={s.homePageSpan}>уход</span> и счастливые <br/> питомцы.
                </h1>
                    <Link className={s.contactUs} to={'/about'}>
                        <span>Связаться с нами</span>
                        <img src={paw} alt=""/>
                    </Link>
            </div>
            <div>
                <div className={s.advantageBg}>
                    <Advantage/>
                </div>
                <Banners/>
                <div className={s.popularsBg}>
                    <Populars/>
                    <LastNews/>
                </div>
                {/*<div className={s.lastNewsBg}>
                    <LastNews/>
                </div>*/}
                <div className={s.ourTeamBg}>
                    <OurTeam/>
                </div>
                <div className={s.ourPartnersBg}>
                    <OurPartners/>
                </div>
                <Reviews/>

            </div>
        </div>
    );
};

export default Homepage;