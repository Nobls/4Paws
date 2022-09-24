import React from 'react';
import s from './news.module.scss';
import {lastNews} from "../../data/data";
import {Link} from "react-router-dom";
import paw from "../../images/pawBig.png";

const News = () => {
    return (
        <div>
            <div className={s.newsLBg}>
                <h1 className={s.newsTitle}>Всегда на связи<br/>с нашими <span
                    className={s.newsSpan}>клиентами</span><br/>и их питомцами!</h1>
            </div>

            <div className={s.newsWrapper}>
                <div className={s.newsBlock}>
                    {
                        lastNews.map(m => {
                            return (
                                <div className={s.newsItemWrapper} key={m.id}>
                                    <div className={s.newsInfoImageBlock} style={{backgroundImage: `url(${m.image})`}}>
                                    </div>
                                    <div className={s.newsInfo}>
                                        <div className={s.newsInfoItem}>21.08.2022</div>
                                        <div className={s.newsInfoItem}>Author</div>
                                        <div className={s.newsInfoItem}>Categories</div>
                                        <div className={s.newsInfoItem}>Tags</div>
                                    </div>
                                    <Link to={'/news'} className={s.newsTitle}>{m.title}</Link>
                                    <p className={s.newsText}>{m.description.substring(0, 300) + '...'}</p>
                                    <Link to={'/news'} className={s.newsButtonOpen}>
                                        Узнать больше
                                        <img src={paw} alt="paws"/>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={s.newsSideBar}>
                    <div className={s.newsCategories}>
                        <h4 className={s.newsSideBarTitle}>Категории</h4>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>

                    <div className={s.recentNews}>
                        <h4 className={s.newsSideBarTitle}>Последние новости</h4>

                        <div className={s.recentNewsWrapper}>
                            <div className={s.recentNewsImage} style={{backgroundImage: `url(${lastNews[0].image})`}}>
                            </div>
                            <div className={s.recentNewsInner}>
                                <Link to={'/news'} className={s.recentNewsTitle}>{lastNews[0].title}</Link>
                                <div className={s.recentNewsDate}>21.08.2022</div>
                            </div>
                        </div>
                        <div className={s.recentNewsWrapper}>
                            <div className={s.recentNewsImage} style={{backgroundImage: `url(${lastNews[1].image})`}}>
                            </div>
                            <div className={s.recentNewsInner}>
                                <Link to={'/news'} className={s.recentNewsTitle}>{lastNews[1].title}</Link>
                                <div className={s.recentNewsDate}>21.08.2022</div>
                            </div>
                        </div>
                        <div className={s.recentNewsWrapper}>
                            <div className={s.recentNewsImage} style={{backgroundImage: `url(${lastNews[2].image})`}}>
                            </div>
                            <div className={s.recentNewsInner}>
                                <Link to={'/news'} className={s.recentNewsTitle}>{lastNews[2].title}</Link>
                                <div className={s.recentNewsDate}>21.08.2022</div>
                            </div>
                        </div>
                    </div>

                    <div className={s.newsTags}>
                        <h4 className={s.newsSideBarTitle}>Теги</h4>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;