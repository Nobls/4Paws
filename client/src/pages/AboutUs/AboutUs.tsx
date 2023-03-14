import React, {useEffect, useState} from 'react';
import s from './aboutUs.module.scss';
import paw from '../../images/Vector2.png';
import {Link, useParams} from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Gallery from "../../components/Gallery/Gallery";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {createReview, fetchReviews} from "../../redux/slices/reviews";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";
import {createComment} from "../../redux/slices/comment";


const AboutUs = () => {

    const dispatch = useAppDispatch()

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    const [review, setReview] = useState('')

    const {reviews} = useAppSelector((state)=> state.reviews)


    const params = useParams()

    const handleSubmit = () => {
        try {
        const userId = params.id
            dispatch(createReview({userId, review}))
            setReview('')
        } catch(error){
            console.log(error)
        }
    }


    useEffect(()=>{
        dispatch(fetchReviews())
    },[dispatch])

    return (
        <div>
            <div className={s.aboutUsBg}>
                <h1 className={s.aboutUsTitle}>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. <br/> Doloremque, minima.</h1>
                <Link className={s.aboutUsButton} to={'/'}>
                    <span>Связаться с нами</span>
                    <img src={paw} alt=""/>
                </Link>
            </div>
            <h2>Информация</h2>
            <div className={s.aboutUsInfoWrapper}>
                <div className={s.aboutUsInfo}>
                    <h6>ООО "Revertagroup"</h6>

                    <h6>Юридический адрес:</h6>
                    <p>
                        г. Минск, ул. Ложинская, д. 14, помещение № 2
                        т/ф: (017) 111-11-33
                    </p>

                    <h6>Почтовый адрес:</h6>
                    <p>
                        220033, г. Минск, ул. Ложинская, 14
                    </p>

                    <h6>Банковские реквизиты:</h6>
                    <p>
                        р/с BY59PJCH30130152712000000923 код PJHBBY3X
                        в «Приорбанк» ОАО ЦБУ 113.
                    </p>
                    <p>
                        УНП 101582489, ОКПО 37608340
                        Адрес банка: 220030, г. Минск, ул. Комсомольская, 13.
                    </p>
                </div>
            </div>

            <div>
                <Reviews reviews={reviews}/>
            </div>

            <div className={s.reviewWrapper}>
                <h3 className={s.reviewTitle}>Оставить отзыв</h3>
                <form className={s.reviewForm}>
                    <textarea
                        value={review}
                        cols={30}
                        rows={7}
                        placeholder={'Ваш отзыв'}
                        className={s.reviewTextarea}
                        onChange={event => setReview(event.currentTarget.value)}
                    >

                    </textarea>
                    <div>
                        <ButtonStandart title={'Добавить отзыв'} onclick={handleSubmit}/>
                    </div>
                </form>
            </div>

            <h2>Галерея</h2>
            <Gallery/>
        </div>
    );
};

export default AboutUs;