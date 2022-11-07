import React from 'react';
import {User} from "../../redux/slices/posts";

type PropsType = {
    userData?: any
    _id?: string | undefined
    fullName? : string
    user: User
}

const EditButtons = ({_id, fullName, user}:PropsType) => {
    console.log(fullName)
    return (
        <div>
            {
                user.fullName === fullName ?
                    <div>
                    <button>Удалить</button>
                    <button>Редактировать</button>
                </div>  : <div>нет доступа</div>//не работает через id нужно разобраться!!!
            }

            {/*<button>Удалить</button>
            <button>Редактировать</button>*/}
        </div>
    );
};

export default EditButtons;