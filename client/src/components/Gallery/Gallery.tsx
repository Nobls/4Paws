import React, {useState} from 'react';
import s from './gallery.module.scss'
import {galleryFooter} from "../../data/data";


const Gallery = () => {

    const [modal, setModal] = useState(false)
    const [tempImage, setTempImage] = useState('')
    const [data, setData] = useState({img: '', i: 0})

    const getImg = (img: any, i: number) => {
        setTempImage(img)
        setModal(true)
        setData({img, i})
        console.log(img,i)

    }

    const imageAction = (action: string) => {
        let i = data.i
        if (action === 'next-image'){
            //setData({img: galleryFooter[i + 1] , i: i + 1})
        }
        console.log(tempImage)

    }


    return (
        <>
            {
                data.img &&
                <div className={modal ? `${s.modal} + ${s.modalOpen}` : `${s.modal}`}>
                    <button>Предыдущая</button>
                    <img className={s.modalImg} src={tempImage} alt="image"/>
                    <button onClick={()=>imageAction('next-image')}>Следующая</button>
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
                    galleryFooter.map((m, i) => {
                        return (
                            <div className={s.image} key={m.id} onClick={() => getImg(m.image, i)}>
                                <img src={m.image} alt={m.alt} style={{width: '100%'}}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Gallery;