import React from 'react';
import s from './search.module.scss'

type PropsType = {
    search: boolean
    setSearch: any
}

export const Search = ({search, setSearch}: PropsType) => {

    const closeHandler = () => {
        setSearch(!search)
    }

    return (
        <form action="" className={s.searchWrapper}>

                <input className={s.input} type="text" placeholder={'Найти на сайте'} autoFocus required/>
                <button className={s.closeButton} onClick={closeHandler}>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"
                         aria-labelledby="closeIconTitle" stroke="#eb5837" fill="#eb5837" color="#eb5837"><title id="closeIconTitle">Close</title>
                        <path
                            d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                    </svg>
                </button>

        </form>

    );
};

