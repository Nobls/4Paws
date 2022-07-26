import icon1 from '../images/bannerImages/1.png'
import icon2 from '../images/bannerImages/2.png'
import icon3 from '../images/bannerImages/3.png'
import icon4 from '../images/bannerImages/4.png'
import icon5 from '../images/bannerImages/5.png'
import icon6 from '../images/bannerImages/6.png'
import assurance from '../images/advantageIcon/assurance.svg'
import price from '../images/advantageIcon/price.svg'
import quality from '../images/advantageIcon/quality1.svg'
import time from '../images/advantageIcon/time1.svg'
import newsOne from '../images/lastNews/news1.jpg'
import newsTwo from '../images/lastNews/news2.jpeg'
import newsThree from '../images/lastNews/news3.jpg'
import newsFour from '../images/lastNews/news4.jpg'

export type BannerType = {
    id: number
    image: any
    alt: string
}

export type AdvantageType = {
    id: number
    icon: any
    alt: string
    title: string
}

export type LastNewsType = {
    id: number
    image: any
    alt: string
    title: string
    description: string
}


export const banner: BannerType[] = [
    {
        id: 1,
        image: icon1,
        alt: 'icon1'

    },

    {
        id: 2,
        image: icon2,
        alt: 'icon2'
    },

    {
        id: 3,
        image: icon3,
        alt: 'icon3'
    },

    {
        id: 4,
        image: icon4,
        alt: 'icon4'
    },

    {
        id: 5,
        image: icon5,
        alt: 'icon5'
    },

    {
        id: 6,
        image: icon6,
        alt: 'icon6'
    },
];

export const advantage: AdvantageType[] = [
    {
        id: 1,
        icon: assurance,
        alt: 'assurance',
        title: 'Уверенность',
    },

    {
        id: 2,
        icon: price,
        alt: 'price',
        title: 'Удобная цена',
    },

    {
        id: 3,
        icon: quality,
        alt: 'quality',
        title: 'Качество',
    },

    {
        id: 4,
        icon: time,
        alt: 'time',
        title: 'Удобное время',
    },
]

// export const lastNews: LastNewsType[] = [
//     {
//
//         id: 1,
//         image: news1,
//         alt: 'news1',
//         title: 'Новость 1',
//         description: 'Описание новости 1',
//     },
//
//     {
//         id: 2,
//         image: news2,
//         alt: 'news2',
//         title: 'Новость 2',
//         description: 'Описание новости 2',
//     },
//
//     {
//         id: 3,
//         image: news3,
//         alt: 'news3',
//         title: 'Новость 3',
//         description: 'Описание новости 3',
//     },
//
//     {
//         id: 4,
//         image: news4,
//         alt: 'news4',
//         title: 'Новость 4',
//         description: 'Описание новости 4',
//     }
// ]

export const news1: LastNewsType = {
    id: 1,
    image: newsOne,
    alt: 'news1',
    title: 'Новость 1',
    description: 'Описание новости 1',
}

export const news2: LastNewsType = {
    id: 2,
    image: newsTwo,
    alt: 'news2',
    title: 'Новость 2',
    description: 'Описание новости 2',
}

export const news3: LastNewsType = {
    id: 3,
    image: newsThree,
    alt: 'news3',
    title: 'Новость 3',
    description: 'Описание новости 3',
}

export const news4: LastNewsType = {
    id: 4,
    image: newsFour,
    alt: 'news4',
    title: 'Новость 4',
    description: 'Описание новости 4',
}


