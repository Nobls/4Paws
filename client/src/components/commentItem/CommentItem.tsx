import React from 'react';
import s from "./commentItem.module.scss";


type PropsType = {
    com: any
    userData: any
}

const CommentItem = ({userData, com}: PropsType) => {
    return (
        <>
            <div className={s.commentsItems}>
                <img className={s.commentsUserPhoto} src={`http://localhost:3157${userData.avatarUrl}`}
                     alt={'user avatar'}/>
                <div className={s.commentsWrapper}>
                    <div className={s.commentsInfo}>
                        <span className={s.commentsUser}>{userData.name}</span>
                        <span className={s.commentsDate}>{com.createdAt?.toLowerCase().toString().slice(0, 10)}</span>
                    </div>
                    <p className={s.commentsText}>
                        {com.comment}
                    </p>
                </div>
            </div>

        </>

    );
};

export default CommentItem;
