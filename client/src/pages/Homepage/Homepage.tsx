import React from 'react';
import {Banners} from "../../components/banners/Banners";
import {Advantage} from "../../components/advantage/Advantage";
import {LastNews} from "../../components/lastNews/LastNews";

const Homepage = () => {

    return (
        <div>
            <Banners/>
            <Advantage/>
            <LastNews/>
        </div>
    );
};

export default Homepage;