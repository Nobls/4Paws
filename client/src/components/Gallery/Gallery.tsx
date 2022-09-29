import React, {useState} from 'react';
import s from './gallery.module.scss'
import {gallery, galleryFooter} from "../../data/data";


const Gallery = () => {

    const [modal, setModal] = useState(false)
    const [data, setData] = useState({img: '', i: 0})

    const getImg = (img: any, i: number) => {
        setModal(true)
        setData({img, i})
        console.log(img, i)

    }

    const imageAction = (action: string) => {
        let i = data.i
        if (action === 'next-image') {
            setData({img: gallery[i + 1], i: i + 1})
        }
        if (action === 'prev-image') {
            setData({img: gallery[i - 1], i: i - 1})
        }
        if (!action) {
            setData({img: '', i: 0})
        }

    }


    return (
        <>
            {
                data.img &&
                <div className={modal ? `${s.modal} + ${s.modalOpen}` : `${s.modal}`}>
                    <div className={s.arrowPrev} onClick={() => imageAction('prev-image')}>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                             viewBox="0 0 24 24"
                             aria-labelledby="backAltIconTitle" stroke="#eb5837"
                             stroke-linejoin="miter" fill="none" color="#2329D6">
                            <path d="M4 12l15-9v18z"/>
                        </svg>
                    </div>
                    <img className={s.modalImg} src={data.img} alt="image"/>
                    <div className={s.arrowNext} onClick={() => imageAction('next-image')}>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"
                             aria-labelledby="playIconTitle" stroke="#eb5837"
                             stroke-width="1" stroke-linecap="square" stroke-linejoin="miter"
                             fill="none" color="#2329D6">
                            <path d="M20 12L5 21V3z"/>
                        </svg>
                    </div>
                    <div className={s.closeImg} onClick={() => setModal(false)}>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                             viewBox="0 0 24 24"
                             aria-labelledby="closeIconTitle" stroke="#eb5837">
                            <path
                                d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                        </svg>
                    </div>
                </div>
            }
            {/*<div className={modal ? `${s.modal} + ${s.modalOpen}` : `${s.modal}`}>
                <img className={s.modalImg} src={tempImage} alt="image"/>
                <div className={s.closeImg} onClick={()=>setModal(false)}>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24"
                         aria-labelledby="closeIconTitle" stroke="#eb5837">
                        <path d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                    </svg>
                </div>
            </div>*/}
            <div className={s.gallery}>
                {/*{
                    galleryFooter.map(m=>{
                        return (
                            <div className={s.image} key={m.id} onClick={()=> getImg(m.image)}>
                                <img src={m.image} alt={m.alt} style={{width:'100%'}}/>
                            </div>
                        )
                    })
                }*/}
                {
                    gallery.map((image, i) => {
                        return (
                            <div className={s.image} key={i} onClick={() => getImg(image, i)}>
                                <img src={image} alt='image gallery' style={{width: '100%'}}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Gallery;