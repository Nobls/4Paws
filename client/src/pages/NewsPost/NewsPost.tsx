import React, {useEffect, useState} from 'react';
import s from "./newsPost.module.scss";
import {reviews} from "../../data/data";
import {useParams} from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import axios from "../../axios/axios";
import Post from "../../components/post/Post";

const NewsPost = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    const {_id} = useParams()
    console.log(data)

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    useEffect(() => {
        axios.get(`news/${_id}`).then(res => {
            setData(res.data)
            setLoading(false)
            console.log(data)
        }).catch(err => {
            console.warn(err)
        })
    }, [])

    if (loading) {
        return <div>Загрузка</div>
    }

    return (
        <div>
            <div className={s.newsPostLBg}>
                <h1 className={s.newsPostTitle}>Всегда на связи<br/>с нашими <span
                    className={s.newsPostSpan}>клиентами</span><br/>и их питомцами!</h1>
            </div>
            <div className={s.newsPostWrapper}>
                <div className={s.newsBlock}>
                    <Post
                        _id={data._id}
                        title={data.title}
                        text={data.text}
                        tags={data.tags}
                        user={data.user}
                        imageUrl={data.imageUrl}
                        fullPost={true}
                    />
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