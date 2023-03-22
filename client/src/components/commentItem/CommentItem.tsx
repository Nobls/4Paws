import React from 'react';
import s from "./commentItem.module.scss";


type PropsType = {
    m: any
}

const CommentItem = ({m}: PropsType) => {


    return (
        <div className={s.commentsItems}>
            <img className={s.commentsUserPhoto} src={`http://localhost:3157${m.user.avatarUrl}`}
                 alt={'user avatar'}/>
            <div className={s.commentsWrapper}>
                <div className={s.commentsInfo}>
                    <span className={s.commentsUser}>{m.user.fullName}</span>
                    <span className={s.commentsDate}>{m.createdAt.toLowerCase().toString().slice(0, 10)}</span>
                </div>
                <p className={s.commentsText}>
                    {m.comment}
                </p>
            </div>
        </div>
    );
};

export default CommentItem;
