import React from 'react';
import {User} from "../../redux/slices/posts";
import s from './editButton.module.scss'

type PropsType = {
    user: User
    _id?: string | undefined
    userData: any//???
    removeNewsHandle?: ()=> void
    titleButton: string
}

const EditButtons = ({_id,user,userData, removeNewsHandle, titleButton}: PropsType) => {
    return (
        <>
            {
                userData?._id === user._id ? <div>
                    <button className={s.editBtn} onClick={removeNewsHandle}>{titleButton}</button>
                </div> : <div></div>
            }
        </>
    );
};

export default EditButtons;