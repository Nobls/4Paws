import React, {useEffect} from "react";
import s from './news.module.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {fetchNews} from "../../redux/slices/posts";
import Post from "../../components/post/Post";

const News = () => {

    const dispatch = useAppDispatch()
    const {post} = useAppSelector((state) => state.news)
    const userData = useAppSelector((state) => state.auth.data)


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        dispatch(fetchNews())
    }, [])


    return (
        <div>
            <div className={s.newsLBg}>
                <h1 className={s.newsTitle}>Самые главные<br/>и актуальные новости</h1>
            </div>

            <div className={s.newsWrapper}>
                <div className={s.newsBlock}>
                    {
                        post.map(m => {
                            return (
                                <Post
                                    key={m._id}
                                    id={m._id}
                                    title={m.title}
                                    text={m.text}
                                    tags={m.tags}
                                    user={m.user}
                                    imageUrl={m.imageUrl}
                                    userData={userData}
                                />
                            )
                        })
                    }
                </div>
                <Sidebar/>
            </div>
        </div>
    );
};

export default News;