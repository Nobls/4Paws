import React, {useEffect} from 'react';
import s from "./newsPost.module.scss";
import {lastNews, reviews} from "../../data/data";
import {Link} from "react-router-dom";
import paw from "../../images/pawBig.png";
import Sidebar from "../../components/sidebar/Sidebar";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";

const NewsPost = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div>
            <div className={s.newsPostLBg}>
                <h1 className={s.newsPostTitle}>Всегда на связи<br/>с нашими <span
                    className={s.newsPostSpan}>клиентами</span><br/>и их питомцами!</h1>
            </div>
            <div className={s.newsPostWrapper}>
                <div className={s.newsPostBlock}>
                    <div className={s.newsPostItemWrapper} key={lastNews[4].id}>
                        <div className={s.newsPostInfoImageBlock}
                             style={{backgroundImage: `url(${lastNews[4].image})`}}>
                        </div>
                        <div className={s.newsPostInfo}>
                            <div className={s.newsPostInfoItem}>{lastNews[4].date}</div>
                            <div className={s.newsPostInfoItem}>{lastNews[4].author}</div>
                            <div className={s.newsPostInfoItem}>{lastNews[4].categories}</div>
                            <div className={s.newsPostInfoItem}>{lastNews[4].tags}</div>
                        </div>
                        <Link to={'/news'} className={s.newsPostTitle}>{lastNews[4].title}</Link>
                        <p className={s.newsPostText}>{lastNews[4].description}</p>
                        <Link to={'/news'} className={s.newsPostButton}>
                            Назад
                            <img src={paw} alt="paws"/>
                        </Link>
                    </div>
                </div>
                <Sidebar/>
            </div>

            <div className={s.comments}>
                <h3 className={s.commentsTitle}>Комментарии</h3>
                <div className={s.commentsItems}>
                    <img className={s.commentsUserPhoto} src={reviews[0].image} alt={reviews[0].alt}/>
                    <div className={s.commentsWrapper}>
                        <div className={s.commentsInfo}>
                            <span className={s.commentsUser}>{reviews[0].userName}</span>
                            <span className={s.commentsDate}>{reviews[0].date}</span>
                        </div>
                        <p className={s.commentsText}>
                            {reviews[0].text}
                        </p>
                    </div>
                </div>
                <div className={s.commentsItems}>
                    <img className={s.commentsUserPhoto} src={reviews[1].image} alt={reviews[1].alt}/>
                    <div className={s.commentsWrapper}>
                        <div className={s.commentsInfo}>
                            <span className={s.commentsUser}>{reviews[1].userName}</span>
                            <span className={s.commentsDate}>{reviews[1].date}</span>
                        </div>
                        <p className={s.commentsText}>
                            {reviews[1].text}
                        </p>
                    </div>
                </div>
            </div>

            <div className={s.postComment}>
                <h3 className={s.postCommentTitle}>Оставить комментарий</h3>
                <form className={s.postCommentForm}>
                    <textarea className={s.postCommentTextarea} cols={30} rows={7}
                              placeholder={'Ваш комментарий'}></textarea>
                    <input className={s.postCommentInput} type="text" placeholder={'Ваше Имя'}/>
                    <input className={s.postCommentInput} type="text" placeholder={'Ваш e-mail'}/>
                    <div>
                        <ButtonStandart title={'Оставить комментарий'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsPost;