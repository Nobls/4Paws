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
            <Gallery/>
        </div>
    );
};

export default AboutUs;