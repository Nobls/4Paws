import React, {useEffect, useState} from 'react';
import s from './modalServices.module.scss'
import ButtonStandart from "../buttonStandart/ButtonStandart";
import {Link, useParams} from "react-router-dom";
import axios from "../../axios/axios";
import {Loading} from "../loading/Loading";

export const ModalServices = () => {
    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    const {id} = useParams()

    useEffect(() => {
        axios.get(`services/${id}`).then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            console.warn(err)
        })
    }, [id])

    if (loading) {
        return <Loading/>
    }

    return (
        <div className={`${s.modal} ${s.active}`}>
            <div className={s.modalContent}>
                <h3 className={s.modalTitle}>{data.title}</h3>
                <div className={s.modalContentInner}>
                    <img className={s.modalImg} src={`http://localhost:3157${data.imageUrl}`} alt={data.imageUrl}/>
                    <p className={s.modalDescription}>{data.descriptionModal}</p>
                </div>

                <div>
                    <form className={s.dateWrapper}>
                        <p className={s.dateText}>Дата</p>
                        <label>C <input className={s.dateFrom} type="date"/> По <input className={s.dateTo}
                                                                                       type="date"/>
                        </label>
                    </form>
                </div>

                <div className={s.orderService}>
                    {/*<Link to={`/services`}>*/}
                        <ButtonStandart title={'Заказать услугу'}/>
                        {/*временно на этой кнопке закрытие модалки*/}
                    {/*</Link>*/}
                </div>

                <div className={s.closeModal}>
                    <Link to={'/services'}>
                        <button className={s.buttonClose}>
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                 viewBox="0 0 24 24"
                                 aria-labelledby="closeIconTitle" stroke="#ffffff" strokeWidth={3}>
                                <path
                                    d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};