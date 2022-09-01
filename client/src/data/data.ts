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

import assurance from '../images/adventageImages/01.png'
import price from '../images/adventageImages/02.png'
import quality from '../images/adventageImages/03.png'
import news1 from '../images/lastNews/news1.jpg'
import news2 from '../images/lastNews/news2.jpeg'
import news3 from '../images/lastNews/news3.jpeg'
import news4 from '../images/lastNews/news4.jpeg'
import news5 from '../images/lastNews/news5.jpeg'
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
    link: string
    classname: string
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

export const lastNews: LastNewsType[] = [
    {
        id: 1,
        link: '',
        classname: 'news1',
        image: news1,
        alt: 'news1',
        title: 'Кот Степан собрал более $10 тысяч для помощи животным в Украине',
        description: 'Кот Степан, всемирная слава к которому пришла после того, как забавное видео с бокалом репостнула Бритни Спирс, собирает деньги на помощь животным, пострадавшим от военных действий в Украине. Сам кот недавно вместе с хозяевами бежал из Харькова во Францию.\n' +
            '\n' +
            '«Дорогие мои друзья, сердечно благодарю вас за отзывчивость и поддержку! Мы собрали $10 035. <…> Ваш вклад бесценен — благодаря вашей поддержке мы сможем обеспечить подходящий уход и лечение каждому животному в Украине. Большое спасибо!» — написано в аккаунте известного украинского кота. Сейчас на кота подписано более 1,2 млн человек. Информация о сборе средств появилась в аккаунте Степана четыре дня назад, деньги будут направлены на помощь пострадавшим от военных действий в Украине животным, которые не могут сами о себе позаботиться. Среди получателей — фонд «Счастливая лапка», организация UAAnimals, Николаевский зоопарк, благотворительное объединение «Плюшка» и другие.',
    },
    {
        id: 2,
        link: '',
        classname: 'news2',
        image: news2,
        alt: 'news2',
        title: 'В ветклинике появилась идеальная вакансия – ищут обнимателя котов',
        description: 'Основное требование к кандидатам на эту должность — любовь к животным и желание тратить на них свое время. В ветлечебницу приглашают любых посетителей, которые захотят побыть с котами. В стационаре там находятся около десятка пушистиков, которым не хватает человеческой ласки.\n' +
            '\n' +
            'Специалисты клиники объяснили, что кот, когда его гладят, перестает бояться и быстрее социализируется.',
    },
    {
        id: 3,
        link: '',
        classname: 'news3',
        image: news3,
        alt: 'news3',
        title: 'Хорошие песели и милые котейки\n',
        description: 'Pets Fest — это первый крупный фестиваль любителей домашних животных в Беларуси. Радостный лай и мяуканье наполнили парк Dreamland на этих выходных. Кто-то презентовал умения своих питомцев, а кто-то искал нового друга или, быть может, любовь. Погоня за фрисби, аджилити, прыжки в высоту и через препятствия, грациозные прогулки и просто обнимашки — занятий хватило на всех. Плюс полезности: мастер-классы от грумеров, лекции, встречи с ветеринарами и кинологами. Как это было — в нашем большом фоторепортаже. Жаль только, через снимки нельзя никого погладить.',
    },
    {
        id: 4,
        link: '',
        classname: 'news4',
        image: news4,
        alt: 'news4',
        title: 'Ми-ми-ми дня! У кота Пусика из Гатово уже больше 1,5 миллиона подписчиков\n',
        description: 'YouTube-канал дворового кота Пусика из Гатово перешагнул отметку в 1,5 миллиона подписчиков, сообщает belmir.by. А самое популярное видео — уже более 34 миллионов просмотров. Пусик теперь самая настоящая мировая звезда.\n' +
            '\n' +
            'Кот Пусик живет в семье из Гатово. Его подобрала в 2014 году на улице пара, Вячеслав и Юлия, оба — ребята с ограничением слуха. Они обратили внимание на то, что кот достаточно умный и очень любит играть. После чего ребята стали записывать видео с ним и выкладывать на канал.\n' +
            '\n' +
            'Самое популярное видео Пусика — это ролик о том, как он «заказывает» еду. Котик лапкой нажимает на звонок, ему приносят меню, а затем он выбирает из рисунков то, что хочет съесть.',
    },
    {
        id: 5,
        link: '',
        classname: 'news5',
        image: news5,
        alt: 'news5',
        title: 'Ученые из Нидерландов: животные могут испытывать эмоции\n',
        description: '\n' +
            ' 22 марта 2022 в 12:29\n' +
            'Источник: National Geographic. Фото: Александр Ружечка, носит иллюстративный характер\n' +
            '     \n' +
            'Если вы давно что-то подозревали о своей кошке или собаке, эта новость для вас. Животные могут испытывать эмоции — к таким выводам пришли специалисты из Лейденского и Утрехтского университетов (Нидерланды). Об этом пишет National Geographic со ссылкой на исследование.\n' +
            '\n' +
            'Само понятие «эмоция» исследователи делят на три компонента: физиологический, поведенческий и когнитивный. Первый определяет, как тело реагирует на воздействие, второй заставляет выражать эмоции, а третий — делать определенный выбор. Как оказалось, многие виды животных способны проявлять совокупность всех этих составляющих, что указывает на наличие у них эмоций.\n' +
            '\n' +
            'Отсюда вытекает и другой, не менее удивительный вывод: животные способны испытывать чувства. Ведь чувства ученые рассматривают как субъективную интерпретацию переживаемых эмоций. Простой пример — негативные эмоции, заставляющие чувствовать себя несчастным. При этом способность испытывать чувства открывает дорогу к сопереживанию. Но для этого необходимо присутствие когнитивных проявлений — способности воспринимать чувства и эмоции другого.\n' +
            '\n' +
            'Чтобы исследовать эмоции у животных, специалисты применяют современные методы. Один из них — тепловизионная камера: она способна измерять физиологическую реакцию на пугающие образы. Главная сложность в исследовании чувств и эмоций животных состоит в том, что им нельзя задавать вопросы, как людям. Тем не менее авторы исследования призывают с этической точки зрения рассматривать животных как существ, способных испытывать чувства. По крайней мере, пока не доказано обратное.\n' +
            '\n',
    }
]

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


