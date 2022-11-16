import React from 'react';
import s from './lastNews.module.scss'
import {Link} from "react-router-dom";
import {lastNews} from "../../data/data";
import paw from "../../images/Vector2.png"
import {PostType} from "../../redux/slices/posts";

type PropsType = {
    post: PostType[]
}

export const LastNews = ({post}:PropsType) => {

    return (
        <div className={s.lastNewsBg}>

            <h3 className={s.title}>Последние новости</h3>

            <div className={s.container}>

                <div className={s.news1}>
                    <div className={s.newsItemWrapper}>
                        <Link to={`/news/${post[0]._id}`} className={s.newsButtonOpen}>
                            Открыть
                            <img src={paw} alt=""/>
                        </Link>
                        <div>21.08.2022</div>
                        <img className={s.lastNewsImageOne} src={`http://localhost:3157${post[0]?.imageUrl}`} alt={'imageNews'}/>
                        <h3 className={s.newsTitle}>{post[0]?.title}</h3>
                        <p className={s.newsText}>{post[0]?.text.substring(0, 100) + '...'}</p>
                    </div>
                </div>
                <div className={s.news2}>
                    <div className={s.newsItemWrapper}>
                        <Link to={`/news/${post[1]._id}`} className={s.newsButtonOpen}>
                            Открыть
                            <img src={paw} alt="paws"/>
                        </Link>
                        <div>21.08.2022</div>
                        <img className={s.lastNewsImageTwo} src={`http://localhost:3157${post[1]?.imageUrl}`} alt={lastNews[1].alt}/>
                        <h3 className={s.newsTitle}>{post[1]?.title}</h3>
                        <p className={s.newsText}>{post[1]?.text.substring(0, 100) + '...'}</p>
                    </div>
                </div>
                <div className={s.news3}>
                    <div className={s.newsItemWrapper}>
                        <Link to={`/news/${post[2]._id}`} className={s.newsButtonOpen}>
                            Открыть
                            <img src={paw} alt="paws"/>
                        </Link>
                        <div>21.08.2022</div>
                        <img className={s.lastNewsImageThree} src={`http://localhost:3157${post[2]?.imageUrl}`} alt={lastNews[2].alt}/>
                        <h3 className={s.newsTitle}>{post[2]?.title}</h3>
                        <p className={s.newsText}>{post[2]?.text.substring(0, 100) + '...'}</p>
                    </div>
                </div>
                <div className={s.news4}>
                    <div className={s.newsItemWrapper}>
                        <Link to={`/news/${post[3]._id}`} className={s.newsButtonOpen}>
                            Открыть
                            <img src={paw} alt="paws"/>
                        </Link>
                        <div>21.08.2022</div>
                        <img className={s.lastNewsImageFour} src={`http://localhost:3157${post[3]?.imageUrl}`} alt={lastNews[3].alt}/>
                        <h3 className={s.newsTitle}>{post[3]?.title}</h3>
                        <p className={s.newsText}>{post[3]?.text.substring(0, 100) + '...'}</p>
                    </div>
                </div>
                <div className={s.news5}>
                    <div className={s.newsItemWrapper}>
                        <Link to={`/news/${post[4]._id}`} className={s.newsButtonOpen}>
                            Открыть
                            <img src={paw} alt="paws"/>
                        </Link>
                        <div>21.08.2022</div>
                        <img className={s.lastNewsImageFour} src={`http://localhost:3157${post[4]?.imageUrl}`} alt={lastNews[4].alt}/>
                        <h3 className={s.newsTitle}>{post[4]?.title}</h3>
                        <p className={s.newsText}>{post[4]?.text.substring(0, 100) + '...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
