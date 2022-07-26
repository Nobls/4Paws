import React from 'react';
import s from './lastNews.module.scss'
import {news1, news2, news3, news4} from "../../data/data";
import {Link} from "react-router-dom";

export const LastNews = () => {
    return (
        <div className={s.lastNewsBg}>

            <h3 className={s.title}>Последние новости</h3>

            <div className={s.lastNewsContainer}>
                <Link to={'/news'} className={s.news1}>
                    <div>
                        <img className={s.lastNewsImageOne} src={news1.image} alt={news1.alt}/>
                        <h3>{news1.title}</h3>
                        <p>{news1.description}</p>
                    </div>
                </Link>
                <Link to={'/news'} className={s.news2}>
                    <div>
                        <img className={s.lastNewsImageTwo} src={news2.image} alt={news2.alt}/>
                        <h3>{news2.title}</h3>
                        <p>{news2.description}</p>
                    </div>
                </Link>
                <Link to={'/news'} className={s.news3}>
                    <div>
                        <img className={s.lastNewsImageThree} src={news3.image} alt={news3.alt}/>
                        <h3>{news3.title}</h3>
                        <p>{news3.description}</p>
                    </div>
                </Link>
                <Link to={'/news'} className={s.news4}>
                    <div>
                        <img className={s.lastNewsImageFour} src={news4.image} alt={news4.alt}/>
                        <h3>{news4.title}</h3>
                        <p>{news4.description}</p>
                    </div>
                </Link>


            </div>
        </div>
    );
};

