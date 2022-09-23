import React from 'react';
import s from './news.module.scss';
import {lastNews} from "../../data/data";
import {Link} from "react-router-dom";
import paw from "../../images/pawBig.png";

const News = () => {
    return (
        <div>
            <div className={s.newsBg}>
                {/*<h1 className={s.newsTitle}>Всегда на связи<br/>с нашими <span*/}
                {/*    className={s.newsSpan}>клиентами</span><br/>и их питомцами!</h1>*/}
            </div>

            {/*<div>*/}
            {/*    <h1>Новости</h1>*/}
            {/*</div>*/}

            <div className={s.newsWrapper}>

                <div className={s.newsItemWrapper}>
                    <div className={s.newsInfoImageBlock} style={{backgroundImage: `url(${lastNews[0].image})`}}>
                        <Link to={'/news'} className={s.newsTitle}>{lastNews[0].title}</Link>
                    </div>
                    <div className={s.newsInfo}>
                        <div className={s.newsInfoItem}>21.08.2022</div>
                        <div className={s.newsInfoItem}>Author</div>
                    </div>
                    <p className={s.newsText}>{lastNews[0].description.substring(0, 300) + '...'}</p>
                    <Link to={'/news'} className={s.newsButtonOpen}>
                        Узнать больше
                        <img src={paw} alt="paws"/>
                    </Link>
                </div>

                <div className={s.newsItemWrapper}>
                    <div className={s.newsInfoImageBlock} style={{backgroundImage: `url(${lastNews[1].image})`}}>
                        <Link to={'/news'} className={s.newsTitle}>{lastNews[1].title}</Link>
                    </div>
                    <div className={s.newsInfo}>
                        <div className={s.newsInfoItem}>21.08.2022</div>
                        <div className={s.newsInfoItem}>Author</div>
                    </div>
                    <p className={s.newsText}>{lastNews[1].description.substring(0, 300) + '...'}</p>
                    <Link to={'/news'} className={s.newsButtonOpen}>
                        Узнать больше
                        <img src={paw} alt="paws"/>
                    </Link>
                </div>

                <div className={s.newsItemWrapper}>
                    <div className={s.newsInfoImageBlock} style={{backgroundImage: `url(${lastNews[2].image})`}}>
                        <Link to={'/news'} className={s.newsTitle}>{lastNews[2].title}</Link>
                    </div>
                    <div className={s.newsInfo}>
                        <div className={s.newsInfoItem}>21.08.2022</div>
                        <div className={s.newsInfoItem}>Author</div>
                    </div>
                    <p className={s.newsText}>{lastNews[2].description.substring(0, 300) + '...'}</p>
                    <Link to={'/news'} className={s.newsButtonOpen}>
                        Узнать больше
                        <img src={paw} alt="paws"/>
                    </Link>
                </div>

                <div className={s.newsItemWrapper}>
                    <div className={s.newsInfoImageBlock} style={{backgroundImage: `url(${lastNews[3].image})`}}>
                        <Link to={'/news'} className={s.newsTitle}>{lastNews[3].title}</Link>
                    </div>
                    <div className={s.newsInfo}>
                        <div className={s.newsInfoItem}>21.08.2022</div>
                        <div className={s.newsInfoItem}>Author</div>
                    </div>
                    <p className={s.newsText}>{lastNews[3].description.substring(0, 300) + '...'}</p>
                    <Link to={'/news'} className={s.newsButtonOpen}>
                        Узнать больше
                        <img src={paw} alt="paws"/>
                    </Link>
                </div>

                <div className={s.newsItemWrapper}>
                    <div className={s.newsInfoImageBlock} style={{backgroundImage: `url(${lastNews[4].image})`}}>
                        <Link to={'/news'} className={s.newsTitle}>{lastNews[4].title}</Link>
                    </div>
                    <div className={s.newsInfo}>
                        <div className={s.newsInfoItem}>21.08.2022</div>
                        <div className={s.newsInfoItem}>Author</div>
                    </div>
                    <p className={s.newsText}>{lastNews[4].description.substring(0, 300) + '...'}</p>
                    <Link to={'/news'} className={s.newsButtonOpen}>
                        Узнать больше
                        <img src={paw} alt="paws"/>
                    </Link>
                </div>


                {/*<div className={s.newsItemWrapper}>*/}
                {/*    <img className={s.lastNewsImage} src={lastNews[0].image} alt={lastNews[0].alt}/>*/}
                {/*    <div className={s.newsInfo}>*/}
                {/*        /!*<div className={s.newsInfoItem}>Author</div>*!/*/}
                {/*        <div className={s.newsInfoItem}>21.08.2022</div>*/}
                {/*        <div className={s.newsInfoItem}>Author</div>*/}
                {/*        /!*<div className={s.newsInfoItem}>Categories</div>*!/*/}
                {/*        /!*<div className={s.newsInfoItem}>Tags</div>*!/*/}
                {/*    </div>*/}
                {/*    <Link to={'/news'} className={s.newsTitle}>{lastNews[0].title}</Link>*/}
                {/*    <p className={s.newsText}>{lastNews[0].description.substring(0, 300) + '...'}</p>*/}
                {/*    <Link to={'/news'} className={s.newsButtonOpen}>*/}
                {/*        Узнать больше*/}
                {/*        <img src={paw} alt="paws"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className={s.newsItemWrapper}>*/}
                {/*    <img className={s.lastNewsImage} src={lastNews[1].image} alt={lastNews[1].alt}/>*/}
                {/*    <div className={s.newsInfo}>*/}
                {/*        /!*<div className={s.newsInfoItem}>Author</div>*!/*/}
                {/*        <div className={s.newsInfoItem}>21.08.2022</div>*/}
                {/*        <div className={s.newsInfoItem}>Author</div>*/}
                {/*        /!*<div className={s.newsInfoItem}>Categories</div>*!/*/}
                {/*        /!*<div className={s.newsInfoItem}>Tags</div>*!/*/}
                {/*    </div>*/}
                {/*    <Link to={'/news'} className={s.newsTitle}>{lastNews[1].title}</Link>*/}
                {/*    <p className={s.newsText}>{lastNews[1].description.substring(0, 300) + '...'}</p>*/}
                {/*    <Link to={'/news'} className={s.newsButtonOpen}>*/}
                {/*        Узнать больше*/}
                {/*        <img src={paw} alt="paws"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className={s.newsItemWrapper}>*/}
                {/*    <img className={s.lastNewsImage} src={lastNews[2].image} alt={lastNews[2].alt}/>*/}
                {/*    <div className={s.newsInfo}>*/}
                {/*        /!*<div className={s.newsInfoItem}>Author</div>*!/*/}
                {/*        <div className={s.newsInfoItem}>21.08.2022</div>*/}
                {/*        <div className={s.newsInfoItem}>Author</div>*/}
                {/*        /!*<div className={s.newsInfoItem}>Categories</div>*!/*/}
                {/*        /!*<div className={s.newsInfoItem}>Tags</div>*!/*/}
                {/*    </div>*/}
                {/*    <Link to={'/news'} className={s.newsTitle}>{lastNews[2].title}</Link>*/}
                {/*    <p className={s.newsText}>{lastNews[2].description.substring(0, 300) + '...'}</p>*/}
                {/*    <Link to={'/news'} className={s.newsButtonOpen}>*/}
                {/*        Узнать больше*/}
                {/*        <img src={paw} alt="paws"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className={s.newsItemWrapper}>*/}
                {/*    <img className={s.lastNewsImage} src={lastNews[3].image} alt={lastNews[3].alt}/>*/}
                {/*    <div className={s.newsInfo}>*/}
                {/*        /!*<div className={s.newsInfoItem}>Author</div>*!/*/}
                {/*        <div className={s.newsInfoItem}>21.08.2022</div>*/}
                {/*        <div className={s.newsInfoItem}>Author</div>*/}
                {/*        /!*<div className={s.newsInfoItem}>Categories</div>*!/*/}
                {/*        /!*<div className={s.newsInfoItem}>Tags</div>*!/*/}
                {/*    </div>*/}
                {/*    <Link to={'/news'} className={s.newsTitle}>{lastNews[3].title}</Link>*/}
                {/*    <p className={s.newsText}>{lastNews[3].description.substring(0, 300) + '...'}</p>*/}
                {/*    <Link to={'/news'} className={s.newsButtonOpen}>*/}
                {/*        Узнать больше*/}
                {/*        <img src={paw} alt="paws"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                {/*<div className={s.newsItemWrapper}>*/}
                {/*    <img className={s.lastNewsImage} src={lastNews[4].image} alt={lastNews[4].alt}/>*/}
                {/*    <div className={s.newsInfo}>*/}
                {/*        /!*<div className={s.newsInfoItem}>Author</div>*!/*/}
                {/*        <div className={s.newsInfoItem}>21.08.2022</div>*/}
                {/*        <div className={s.newsInfoItem}>Author</div>*/}
                {/*        /!*<div className={s.newsInfoItem}>Categories</div>*!/*/}
                {/*        /!*<div className={s.newsInfoItem}>Tags</div>*!/*/}
                {/*    </div>*/}
                {/*    <Link to={'/news'} className={s.newsTitle}>{lastNews[4].title}</Link>*/}
                {/*    <p className={s.newsText}>{lastNews[4].description.substring(0, 300) + '...'}</p>*/}
                {/*    <Link to={'/news'} className={s.newsButtonOpen}>*/}
                {/*        Узнать больше*/}
                {/*        <img src={paw} alt="paws"/>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default News;