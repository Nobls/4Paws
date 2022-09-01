import banner1_1920 from '../images/bannerImages/banner1-1920x600.png'
import banner1_800 from '../images/bannerImages/banner1-800x600.png'
import banner1_1280 from '../images/bannerImages/banner1-1280x600.png'
import banner1_1366 from '../images/bannerImages/banner1-1366x600.png'
import banner1_1440 from '../images/bannerImages/banner1-1440x600.png'
import banner1_1536 from '../images/bannerImages/banner1-1536x600.png'
import banner1_1680 from '../images/bannerImages/banner1-1680x600.png'
import banner1_2560 from '../images/bannerImages/banner1-2560x600.png'

import banner2_1920 from '../images/bannerImages/banner2-1920x600.png'
import banner2_800 from '../images/bannerImages/banner2-800x600.png'
import banner2_1280 from '../images/bannerImages/banner2-1280x600.png'
import banner2_1366 from '../images/bannerImages/banner2-1366x600.png'
import banner2_1440 from '../images/bannerImages/banner2-1440x600.png'
import banner2_1536 from '../images/bannerImages/banner2-1536x600.png'
import banner2_1680 from '../images/bannerImages/banner2-1680x600.png'
import banner2_2560 from '../images/bannerImages/banner2-2560x600.png'

import banner3_1920 from '../images/bannerImages/banner3-1920x600.png'
import banner3_800 from '../images/bannerImages/banner3-800x600.png'
import banner3_1280 from '../images/bannerImages/banner3-1280x600.png'
import banner3_1366 from '../images/bannerImages/banner3-1366x600.png'
import banner3_1440 from '../images/bannerImages/banner3-1440x600.png'
import banner3_1536 from '../images/bannerImages/banner3-1536x600.png'
import banner3_1680 from '../images/bannerImages/banner3-1680x600.png'
import banner3_2560 from '../images/bannerImages/banner3-2560x600.png'


// import banner2 from '../images/bannerImages/banner2.png'
// import banner3 from '../images/bannerImages/banner3.png'
// import banner4 from '../images/bannerImages/banner4.png'
// import banner11 from '../images/bannerImages/1.png'
// import banner12 from '../images/bannerImages/2.png'
// import banner13 from '../images/bannerImages/3.png'
// import banner14 from '../images/bannerImages/4.png'

import assurance from '../images/adventageImages/01.png'
import price from '../images/adventageImages/02.png'
import quality from '../images/adventageImages/03.png'
import newsOne from '../images/lastNews/news1.jpg'
import newsTwo from '../images/lastNews/news2.jpeg'
import newsThree from '../images/lastNews/news3.jpg'
import newsFour from '../images/lastNews/news4.jpg'
import reviewsImage from '../images/LogoPF.png'
import imageGoods1 from '../images/popularsGoods/image1.jpg'
import imageGoods2 from '../images/popularsGoods/image2.jpg'
import imageGoods3 from '../images/popularsGoods/image3.png'
import imageGoods4 from '../images/popularsGoods/image4.jpeg'
import imageGoods5 from '../images/popularsGoods/image5.jpeg'
import imageGoods6 from '../images/popularsGoods/image6.jpg'
import photoGallery1 from '../images/galleryFooter/01.jpg'
import photoGallery2 from '../images/galleryFooter/02.jpg'
import photoGallery3 from '../images/galleryFooter/03.jpg'
import photoGallery4 from '../images/galleryFooter/04.jpg'
import photoGallery5 from '../images/galleryFooter/05.jpg'
import photoGallery6 from '../images/galleryFooter/06.jpg'
import ourTeamPeople1 from '../images/ourTeam/people1.png'
import ourTeamPeople2 from '../images/ourTeam/people2.png'
import ourTeamPeople3 from '../images/ourTeam/people3.png'
import ourTeamPeople4 from '../images/ourTeam/people4.png'

export type BannerType = {
    id: number
    image1920: any
    image800: any
    image1280: any
    image1366: any
    image1440: any
    image1536: any
    image1680: any
    image2560: any
    alt: string
}
export type AdvantageType = {
    id: number
    icon: any
    alt: string
    title: string
    description: string
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
export type GalleryFooterType = {
    id: number
    image: any
    alt: string
}
export type OurTeamType = {
    id: number
    image: any
    alt: string
    name: string
    description: string
}


export const banner: BannerType[] = [
    {
        id: 1,
        image1920: banner1_1920,
        image800: banner1_800,
        image1280: banner1_1280,
        image1366: banner1_1366,
        image1440: banner1_1440,
        image1536: banner1_1536,
        image1680: banner1_1680,
        image2560: banner1_2560,
        alt: 'banner1'
    },
    {
        id: 2,
        image1920: banner2_1920,
        image800: banner2_800,
        image1280: banner2_1280,
        image1366: banner2_1366,
        image1440: banner2_1440,
        image1536: banner2_1536,
        image1680: banner2_1680,
        image2560: banner2_2560,
        alt: 'banner2'
    },
    {
        id: 3,
        image1920: banner3_1920,
        image800: banner3_800,
        image1280: banner3_1280,
        image1366: banner3_1366,
        image1440: banner3_1440,
        image1536: banner3_1536,
        image1680: banner3_1680,
        image2560: banner3_2560,
        alt: 'banner3'

    },

    // {
    //     id: 2,
    //     image: banner2,
    //     image1: banner12,
    //     alt: 'banner2'
    // },
    //
    // {
    //     id: 3,
    //     image: banner3,
    //     image1: banner13,
    //     alt: 'banner3'
    // },
    //
    // {
    //     id: 4,
    //     image: banner4,
    //     image1: banner14,
    //     alt: 'banner4'
    // },

    /*{
        id: 5,
        image: icon5,
        alt: 'icon5'
    },

    {
        id: 6,
        image: icon2,
        alt: 'icon6'
    },*/
];

export const advantage: AdvantageType[] = [
    {
        id: 1,
        icon: assurance,
        alt: 'assurance',
        title: 'Уверенность',
        description: 'Воспользовавшись нашими услугами вы всегда сможете наблюдать за своим питомцем удаленно.',
    },

    {
        id: 2,
        icon: price,
        alt: 'price',
        title: 'Удобная цена',
        description: 'Гибкая ценовая политика позволяет подобрать пакеты услуг наиболее подходящие для вас.',
    },

    {
        id: 3,
        icon: quality,
        alt: 'quality',
        title: 'Качество',
        description: 'Мы постоянно следим за уровнем подготовки наших специалистов чтобы качество наших услуг всегда было на высоком уровне.',
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
        alt: 'image',
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
        alt: 'image',
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
        alt: 'image',
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
        alt: 'image',
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
        alt: 'image',
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
        alt: 'image',
        price: {
            g100: 100,
            g400: 300,
            g1000: 1000,
        },
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, suscipit.',
    },
]

export const galleryFooter: GalleryFooterType[] = [
    {
        id: 1,
        image: photoGallery1,
        alt: 'photoGallery',
    },
    {
        id: 2,
        image: photoGallery2,
        alt: 'photoGallery',
    },
    {
        id: 3,
        image: photoGallery3,
        alt: 'photoGallery',
    },
    {
        id: 4,
        image: photoGallery4,
        alt: 'photoGallery',
    },
    {
        id: 5,
        image: photoGallery5,
        alt: 'photoGallery',
    },
    {
        id: 6,
        image: photoGallery6,
        alt: 'photoGallery',
    },
]

export const ourTeam: OurTeamType[] = [
    {
        id: 1,
        image: ourTeamPeople1,
        alt: 'people1',
        name: 'Захаревич А.И.',
        description: 'Кинолог. Стаж более 10 лет.'
    },
    {
        id: 2,
        image: ourTeamPeople2,
        alt: 'people1',
        name: 'Клюшко В.Г.',
        description: 'Кинолог. Стаж более 6 лет.'
    },
    {
        id: 3,
        image: ourTeamPeople3,
        alt: 'people1',
        name: 'Бобрик А.В.',
        description: 'Ветеринар, кинолог. Стаж более 14 лет.'
    },
    {
        id: 4,
        image: ourTeamPeople4,
        alt: 'people1',
        name: 'Ждан Е.Д.',
        description: 'Ветеринар. Стаж более 3 лет. Call-центр'
    },
    {
        id: 5,
        image: ourTeamPeople3,
        alt: 'people1',
        name: 'Бобрик А.В.',
        description: 'Ветеринар, кинолог. Стаж более 14 лет.'
    },
    {
        id: 6,
        image: ourTeamPeople3,
        alt: 'people1',
        name: 'Бобрик А.В.',
        description: 'Ветеринар, кинолог. Стаж более 14 лет.'
    },
]


