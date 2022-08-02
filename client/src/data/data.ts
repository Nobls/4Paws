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
import reviewsImage from '../images/logo.png'
import imageGoods1 from '../images/popularsGoods/image1.jpg'
import imageGoods2 from '../images/popularsGoods/image2.jpg'
import imageGoods3 from '../images/popularsGoods/image3.png'
import imageGoods4 from '../images/popularsGoods/image4.jpeg'
import imageGoods5 from '../images/popularsGoods/image5.jpeg'
import imageGoods6 from '../images/popularsGoods/image6.jpg'

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

export type PopularsGoodsType = {
    id?: number
    title: string
    image: any
    alt: string
    price: PopularsGoodsPriceType
    descriptions: string
}
export type PopularsGoodsPriceType = {
    g100: number
    g400: number
    g1000: number
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

export const reviews = [
    {
        id: 1,
        userName: 'Name',
        date: '12.30',
        image: reviewsImage,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
    {
        id: 2,
        userName: 'Name',
        date: '12.30',
        image: reviewsImage,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 5,
    },
    {
        id: 3,
        userName: 'Name',
        date: '12.30',
        image: reviewsImage,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
    {
        id: 4,
        userName: 'Name',
        date: '12.30',
        image: reviewsImage,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 4,
    },
    {
        id: 5,
        userName: 'Name',
        date: '12.30',
        image: reviewsImage,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
    {
        id: 6,
        userName: 'Name',
        date: '12.30',
        image: reviewsImage,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
]

export const popularsGoods: PopularsGoodsType[] = [
    {
        id: 1,
        title: 'Brit',
        image: imageGoods1,
        alt:'image',
        price: {
            g100: 100,
            g400: 300,
            g1000: 1000,
        },
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, suscipit.',
    },
    {
        id: 2,
        title: 'Brit',
        image: imageGoods2,
        alt:'image',
            price: {
            g100: 100,
            g400: 300,
            g1000: 1000,
        },
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, suscipit.',
    },
    {
        id: 3,
        title: 'Brit',
        image: imageGoods3,
        alt:'image',
        price: {
            g100: 100,
            g400: 300,
            g1000: 1000,
        },
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, suscipit.',
    },
    {
        id: 4,
        title: 'Brit',
        image: imageGoods4,
        alt:'image',
        price: {
            g100: 100,
            g400: 300,
            g1000: 1000,
        },
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, suscipit.',
    },
    {
        id: 5,
        title: 'Brit',
        image: imageGoods5,
        alt:'image',
        price: {
            g100: 100,
            g400: 300,
            g1000: 1000,
        },
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, suscipit.',
    },
    {
        id: 6,
        title: 'Brit',
        image: imageGoods6,
        alt:'image',
        price: {
            g100: 100,
            g400: 300,
            g1000: 1000,
        },
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, suscipit.',
    },
]


