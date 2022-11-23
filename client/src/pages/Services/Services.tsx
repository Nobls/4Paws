import React, {useEffect} from 'react';
import s from "./services.module.scss";
import ChooseServices from "../../components/chooseServices/ChooseServices";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {ServicesCard} from "../../components/servicesCard/ServicesCard";
import {fetchServices} from "../../redux/slices/services";

const Services = () => {

    const dispatch = useAppDispatch()
    const {services} = useAppSelector((state)=> state.services)
    const userData = useAppSelector((state)=> state.auth.data)

    useEffect(()=>{
        dispatch(fetchServices())
    },[])

    return (
        <div>
            <div className={s.servicesBg}>
                <h1 className={s.servicesTitle}>Счастливая жизнь <br/> <span className={s.servicesSpan}>вашего</span>любимого<br/>питомца.
                </h1>
            </div>
            <div>
                <h3 className={s.servicesSubTitle}>Наши Услуги</h3>
                <div className={s.servicesItems}>
                    {
                        services.map((m, index) => {
                            return (
                                <ServicesCard
                                    key = {index}
                                    id={m._id}
                                    title={m.title}
                                    description={m.description}
                                    descriptionModal={m.descriptionModal}
                                    imageUrl={m.imageUrl}
                                    user={m.user}
                                    userData={userData}
                                />
                            )
                        })
                    }
                    {/*<div className={s.servicesFeedbackWrapper}>*/}
                    {/*    <h3 className={s.servicesFeedbackTitle}>Оставить отзыв</h3>*/}
                    {/*    <form className={s.servicesFeedbackFrom} action="">*/}
                    {/*        <textarea className={s.servicesFeedbackTextarea} name="Ваш отзыв" rows={5} placeholder={'Ваш отзыв'}></textarea>*/}
                    {/*        <button className={s.servicesFeedbackButton}>*/}
                    {/*            <span>Оставить отзыв</span>*/}
                    {/*            <img src={paw} alt="paw"/>*/}
                    {/*        </button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>
                <ChooseServices/>
            </div>
            {/*<Reviews/>*/}
        </div>
    );
};

export default Services;