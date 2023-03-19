import React, {useState} from 'react';
import s from "./reviews.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from "react-slick";
import {PrevArrow} from "../prevArrow/PrevArrow";
import {NextArrow} from "../nextArrow/NextArrow";
import {createReview, ReviewsType} from "../../redux/slices/reviews";
import {useAppDispatch} from "../../redux/hook/hook";
import ButtonStandart from "../buttonStandart/ButtonStandart";

type PropsType = {
    reviews: ReviewsType[]
    user: any
}

const Reviews = ({reviews, user}: PropsType) => {

    function slickNext() {
        return function () {
        };
    }

    function slickPrev() {
        return function () {
        };
    }

    const settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow className={''} onClick={slickNext()} style={{color: '#eb5837'}}/>,
        prevArrow: <PrevArrow className={''} onClick={slickPrev()} style={{color: '#eb5837'}}/>

    };
    const dispatch = useAppDispatch()
    const [review, setReview] = useState('')

    const handleSubmit = () => {
        try {
            const userId = user._id
            dispatch(createReview({userId, review}))
            setReview('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={s.reviewWrapper}>

            <h3 className={s.reviewTitle}>Отзывы</h3>

            <Slider {...settings}>
                {
                    reviews.map((m, index) => {
                            return (
                                <div className={s.reviewInner} key={index}>
                                    <div className={s.reviewElements}>
                                        <div>
                                            <img className={s.reviewUserImage}
                                                 src={`http://localhost:3157${m.user.avatarUrl}`} alt={'User Avatar'}/>
                                        </div>
                                        <div className={s.reviewUser}>
                                            <div className={s.reviewUserName}>
                                                {m.user.fullName}
                                            </div>
                                            <div className={s.reviewDate}>
                                                {m.createdAt?.toLowerCase().toString().slice(0, 10)}
                                            </div>
                                            <p className={s.reviewText}>{m.review}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </Slider>

            <div className={s.reviewFormWrapper}>
                <h3 className={s.reviewFormTitle}>Оставить отзыв</h3>
                <form className={s.reviewForm}>
                    <textarea
                        value={review}
                        cols={30}
                        rows={7}
                        placeholder={'Ваш отзыв'}
                        className={s.reviewFormTextarea}
                        onChange={event => setReview(event.currentTarget.value)}
                    >

                    </textarea>
                    <div>
                        <ButtonStandart title={'Добавить отзыв'} onclick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reviews;