import React from 'react';
import s from "./commentItem.module.scss";
import {CommentsType} from "../../redux/slices/comment";


type PropsType = {
    m: any
    user?: any
}

const CommentItem = ({user, m}: PropsType) => {
    return (
        <>

            {/*{
                comments.map((m,index)=>{
                    return (
                        <div key={index} className={s.commentsItems}>
                            <img className={s.commentsUserPhoto} src={`http://localhost:3157${m.user.avatarUrl}`}
                                 alt={'user avatar'}/>
                            <div className={s.commentsWrapper}>
                                <div className={s.commentsInfo}>
                                    <span className={s.commentsUser}>{m.user.fullName}</span>
                                    <span className={s.commentsDate}>{m.createdAt?.toLowerCase().toString().slice(0, 10)}</span>
                                </div>
                                <p className={s.commentsText}>
                                    {m.comment}
                                </p>
                            </div>
                        </div>
                    )
                })
            }*/}

            <div className={s.commentsItems}>
                <img className={s.commentsUserPhoto} src={`http://localhost:3157${m.user.avatarUrl}`}
                     alt={'user avatar'}/>
                <div className={s.commentsWrapper}>
                    <div className={s.commentsInfo}>
                        <span className={s.commentsUser}>{m.user.name}</span>
                        <span className={s.commentsDate}>{m.createdAt?.toLowerCase().toString().slice(0, 10)}</span>
                    </div>
                    <p className={s.commentsText}>
                        {m.comment}
                    </p>
                </div>
            </div>

        </>

    );
};

export default CommentItem;
