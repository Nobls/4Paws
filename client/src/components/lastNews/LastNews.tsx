import React from 'react';
import s from './lastNews.module.scss'
import {Link} from "react-router-dom";
import {lastNews} from "../../data/data";
import paw from "../../images/pawBig.png"

export const LastNews = () => {

    return (
        <div className={s.lastNewsBg}>

            <h3 className={s.title}>Последние новости</h3>

            <div className={s.container}>

                <Link to={'/news'} className={s.news1}>
                    <div className={s.newsItemWrapper}>
                        <button>Открыть</button>
                        {/*<div>21.08.2022</div>*/}
                        <img className={s.lastNewsImageOne} src={lastNews[0].image} alt={lastNews[0].alt}/>
                        <h3 className={s.newsTitle}>{lastNews[0].title}</h3>
                        <p className={s.newsText}>{lastNews[0].description.substring(0, 100) + '...'}</p>
                    </div>
                </Link>
                <Link to={'/news'} className={s.news2}>
                    <div className={s.newsItemWrapper}>
                        <img className={s.lastNewsImageTwo} src={lastNews[1].image} alt={lastNews[1].alt}/>
                        <h3 className={s.newsTitle}>{lastNews[1].title}</h3>
                        <p className={s.newsText}>{lastNews[1].description.substring(0, 100) + '...'}</p>
                    </div>
                </Link>
                <Link to={'/news'} className={s.news3}>
                    <div className={s.newsItemWrapper}>
                        <img className={s.lastNewsImageThree} src={lastNews[2].image} alt={lastNews[2].alt}/>
                        <h3 className={s.newsTitle}>{lastNews[2].title}</h3>
                        <p className={s.newsText}>{lastNews[2].description.substring(0, 100) + '...'}</p>
                    </div>
                </Link>
                <Link to={'/news'} className={s.news4}>
                    <div className={s.newsItemWrapper}>
                        <img className={s.lastNewsImageFour} src={lastNews[3].image} alt={lastNews[3].alt}/>
                        <h3 className={s.newsTitle}>{lastNews[3].title}</h3>
                        <p className={s.newsText}>{lastNews[3].description.substring(0, 100) + '...'}</p>
                    </div>
                </Link>
                <Link to={'/news'} className={s.news5}>
                    <div className={s.newsItemWrapper}>
                        <img className={s.lastNewsImageFour} src={lastNews[4].image} alt={lastNews[4].alt}/>
                        <h3 className={s.newsTitle}>{lastNews[4].title}</h3>
                        <p className={s.newsText}>{lastNews[4].description.substring(0, 100) + '...'}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};
