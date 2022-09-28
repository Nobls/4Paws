import React, {MouseEventHandler} from 'react';
import s from './aboutUs.module.scss';
import paw from '../../images/Vector2.png';
import {Link} from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import Gallery from "../../components/Gallery/Gallery";


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',

    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];


const AboutUs = () => {
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
                <Reviews/>
            </div>

            <h2>Галерея</h2>
            <div className={s.aboutUsGalleryWrapper}>
                <ImageGallery
                    items={images}
                    thumbnailPosition={"left"}
                    renderLeftNav={(onClick, disabled) => (<LeftNav onClick={onClick} disabled={disabled} />)}
                    renderRightNav={(onClick, disabled) => (<RightNav onClick={onClick} disabled={disabled} />)}

                />
            </div>
            <Gallery/>
        </div>
    );
};

export default AboutUs;


type PropsType = {
    onClick: MouseEventHandler<HTMLElement>
    disabled: boolean
}

export const LeftNav = ({onClick,disabled}:PropsType) => {
    return (
        <div className={s.aboutUsArrowLeft} onClick={onClick}>
            <svg width="70px" height="70px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(3.000000, 6.500000)" fill="#eb5837">
                        <path d="M8.85852597,10.910103 C9.09252108,10.7838647 9.23840087,10.5438206 9.23840087,10.2827368 L9.23840087,6.21728876 L17.2657057,6.21728876 C17.6710362,6.21728876 18,5.89595483 18,5.50002553 C18,5.10409622 17.6710362,4.7827623 17.2657057,4.7827623 L9.23840087,4.7827623 L9.23840087,0.717314292 C9.23840087,0.455274124 9.09252108,0.215230029 8.85852597,0.0899480509 C8.62453087,-0.037246629 8.33864564,-0.0286394702 8.112483,0.110031421 L0.342670655,4.89274266 C0.12923579,5.02471909 0,5.25328698 0,5.50002553 C0,5.74676408 0.12923579,5.97533197 0.342670655,6.1073084 L8.112483,10.8900196 C8.2319282,10.9627023 8.36801741,11 8.50410661,11 C8.62550993,11 8.7478923,10.9693968 8.85852597,10.910103"></path>
                    </g>
            </svg>
        </div>
    );
};

export const RightNav = ({onClick,disabled}:PropsType) => {
    return (
        <div className={s.aboutUsArrowRight} onClick={onClick}>
            <svg width="70px" height="70px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Arrow---Right-3" transform="translate(3.000000, 6.500000)" fill="#eb5837">
                        <path d="M9.14147403,0.0898969919 C8.90747892,0.216135321 8.76159913,0.456179416 8.76159913,0.717263233 L8.76159913,4.78271124 L0.734294262,4.78271124 C0.328963829,4.78271124 0,5.10404517 0,5.49997447 C0,5.89590378 0.328963829,6.2172377 0.734294262,6.2172377 L8.76159913,6.2172377 L8.76159913,10.2826857 C8.76159913,10.5447259 8.90747892,10.78477 9.14147403,10.9100519 C9.37546913,11.0372466 9.66135436,11.0286395 9.887517,10.8899686 L17.6573293,6.10725734 C17.8707642,5.97528091 18,5.74671302 18,5.49997447 C18,5.25323592 17.8707642,5.02466803 17.6573293,4.8926916 L9.887517,0.109980362 C9.7680718,0.0372976881 9.63198259,0 9.49589339,0 C9.37449007,0 9.2521077,0.0306032313 9.14147403,0.0898969919"></path>
                    </g>
            </svg>
        </div>
    );
};
