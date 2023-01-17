import React, {useEffect, useState} from 'react';
import s from "./newsPost.module.scss";
import {reviews} from "../../data/data";
import {useParams} from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import axios from "../../axios/axios";
import Post from "../../components/post/Post";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {createComment, getComments} from "../../redux/slices/comment";
import CommentItem from "../../components/commentItem/CommentItem";

const NewsPost = () => {

    const dispatch = useAppDispatch()

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    const [comment, setComment] = useState('')

    const {comments} = useAppSelector((state) => state.comments)

    const userData = useAppSelector((state)=> state.auth.data)

    const params = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    useEffect(() => {
        axios.get(`news/${params.id}`).then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            console.warn(err)
        })
    }, [])

    const handleSubmit = () => {
        try {
            const postId = params.id
            dispatch(createComment({postId, comment}))
            setComment('')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        try {
            dispatch(getComments(params.id))
        } catch (error) {
            console.log(error)
        }
    }, [])

    if (loading) {
        return <div>Загрузка...</div>
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
                        id={data.id}
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
                {
                    comments.map((com,index)=> {
                        return (
                            <CommentItem key={index} com={com} userData={userData}/>
                        )
                    })
                }
            </div>

            <div className={s.postComment}>
                <h3 className={s.postCommentTitle}>Оставить комментарий</h3>
                <form className={s.postCommentForm} onSubmit={(e) => e.preventDefault()}>
                    <textarea value={comment}
                              className={s.postCommentTextarea}
                              cols={30}
                              rows={7}
                              placeholder={'Ваш комментарий'}
                              onChange={e => setComment(e.currentTarget.value)}
                    >

                    </textarea>
                    {/*<input className={s.postCommentInput} type="text" placeholder={'Ваше Имя'}/>
                    <input className={s.postCommentInput} type="text" placeholder={'Ваш e-mail'}/>*/}
                    <div>
                        <ButtonStandart title={'Оставить комментарий'} onclick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsPost;