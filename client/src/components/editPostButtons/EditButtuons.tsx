import React from 'react';
import {User} from "../../redux/slices/posts";

type PropsType = {
    user: User
    _id?: string | undefined
    userData: any//???
    removeNewsHandle: ()=> void
}

const EditButtons = ({_id,user,userData, removeNewsHandle}: PropsType) => {
    console.log(userData)
    return (
        <>
            {
                userData?._id === user._id ? <div>
                    <button onClick={removeNewsHandle}>Удалить</button>
                    <button>Редактировать</button>
                </div> : <div></div>
            }
        </>
    );
};

export default EditButtons;