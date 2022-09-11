import banner1 from '../images/bannerImages/b1.png'
import banner2 from '../images/bannerImages/b2.png'
import assurance from '../images/adventageImages/01.png'
import price from '../images/adventageImages/02.png'
import quality from '../images/adventageImages/03.png'
import news1 from '../images/lastNews/news1.jpg'
import news2 from '../images/lastNews/news2.jpeg'
import news3 from '../images/lastNews/news3.jpeg'
import news4 from '../images/lastNews/news4.jpeg'
import news5 from '../images/lastNews/news5.jpeg'
import reviewsImage1 from '../images/reviews/user1.jpg'
import reviewsImage2 from '../images/reviews/user2.jpeg'
import reviewsImage3 from '../images/reviews/user3.jpg'
import reviewsImage4 from '../images/reviews/user4.jpg'
import reviewsImage5 from '../images/reviews/user5.jpg'
import reviewsImage6 from '../images/reviews/user6.jpeg'
import imageGoods1 from '../images/popularsGoods/ACANABOUNTIFULCATCHCat.png'
import imageGoods2 from '../images/popularsGoods/ACANAINDOORENTREECat.png'
import imageGoods3 from '../images/popularsGoods/FarminaN&DCatQuinoaSkin&Coat.png'
import imageGoods4 from '../images/popularsGoods/FarminaN&DGFAdultMini.png'
import imageGoods5 from '../images/popularsGoods/GOSBIExclusiveGrainFree.png'
import imageGoods6 from '../images/popularsGoods/RoyalCaninMalteseAdult.png'
import photoGallery1 from '../images/galleryFooter/01.jpg'
import photoGallery2 from '../images/galleryFooter/02.jpg'
import photoGallery3 from '../images/galleryFooter/03.jpg'
import photoGallery4 from '../images/galleryFooter/04.jpg'
import photoGallery5 from '../images/galleryFooter/05.jpg'
import photoGallery6 from '../images/galleryFooter/06.jpg'
import ourTeamPeople1 from '../images/ourTeam/people01.jpg'
import ourTeamPeople2 from '../images/ourTeam/people02.jpg'
import ourTeamPeople3 from '../images/ourTeam/people03.jpg'
import ourTeamPeople4 from '../images/ourTeam/people04.jpg'
import ourTeamPeople5 from '../images/ourTeam/people05.jpg'
import ourTeamPeople6 from '../images/ourTeam/people06.jpg'
import ourTeamPeople7 from '../images/ourTeam/people07.jpg'
import ourTeamPeople8 from '../images/ourTeam/people08.jpeg'

import ourPartners4Paws from '../images/ourPartners/4paws.png'
import ourPartnersAv from '../images/ourPartners/av.png'
import ourPartnersDv from '../images/ourPartners/dv.png'
import ourPartnersLs from '../images/ourPartners/ls.png'
import ourPartnersGarfield from '../images/ourPartners/garfield.png'
import ourPartnersGh from '../images/ourPartners/gh.png'
import ourPartnersGroomIt from '../images/ourPartners/groomIt.png'
import ourPartnersManifik from '../images/ourPartners/manifik.png'
import ourPartnersMilord from '../images/ourPartners/milord.png'
import ourPartnersStrelka from '../images/ourPartners/strelka.png'
import ourPartnersVd from '../images/ourPartners/vd.png'
import ourPartnersVm from '../images/ourPartners/vm.png'
import ourPartnersVp from '../images/ourPartners/vp.png'
import ourPartnersZoo from '../images/ourPartners/zoo.png'
import ourPartnersZooFauna from '../images/ourPartners/zooFauna.png'
import ourPartnersZooQI from '../images/ourPartners/zooQI.png'
import ourPartnersZoobazar from '../images/ourPartners/zoobazar.png'

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
    weight: string
    type: string
    country: string
    compound: string
    price: number
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
export type OurTeamType = [{ cynologist: SpecializationTeamType[] }, { veterinarian: SpecializationTeamType[] }, { callCenter: SpecializationTeamType[] }]

type SpecializationTeamType = {
    id: number
    image: any
    alt: string
    name: string
    description: string
}

export type OurParntersType = {
    id: number
    alt: string
    img: any
    link: string
}

export type ServicesType = {
    id: number
    title: string
    description: string
    descriptionModal: string
}


export const banner: BannerType[] = [
    {
        id: 1,
        image: banner1,
        alt: 'banner1'
    },
    {
        id: 2,
        image: banner2,
        alt: 'banner2'
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
        title: 'Гибкая цена',
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
        userName: 'Валерий',
        date: 'Сентябрь 08, 2022',
        image: reviewsImage1,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
    {
        id: 2,
        userName: 'Екатерина',
        date: 'Сентябрь 08, 2022',
        image: reviewsImage2,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 5,
    },
    {
        id: 3,
        userName: 'Виктория',
        date: 'Сентябрь 08, 2022',
        image: reviewsImage3,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
    {
        id: 4,
        userName: 'Игорь',
        date: 'Сентябрь 08, 2022',
        image: reviewsImage4,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 4,
    },
    {
        id: 5,
        userName: 'Виктор',
        date: 'Сентябрь 08, 2022',
        image: reviewsImage5,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
    {
        id: 6,
        userName: 'Евгений',
        date: 'Сентябрь 08, 2022',
        image: reviewsImage6,
        alt: 'userPhoto',
        text: 'Несколько лет тому назад, когда я завел собаку, выбор сухих кормов в зоомагазинах был очень скудным. Все корма делились на две категории: обычные корма премиум класса и очень дорогие.',
        rating: 1,
    },
]

export const popularsGoods: PopularsGoodsType[] = [
    {
        id: 1,
        title: 'ACANA BOUNTIFUL CATCH Cat (Рыба)',
        image: imageGoods1,
        alt: 'ACANA',
        weight: '0,34 кг',
        type: 'Сухой корм',
        country: 'Канада',
        compound: 'сырое мясо лосося (15%), дегидрированное мясо лосося (15%), дегидрированная сельдь (15%), ' +
            'сырой цельный хек (4%), сырая цельная сельдь (4%), цельный овес, цельный горох, масло сайды (8%), ' +
            'цельная зеленая чечевица, цельный нут, цельная красная чечевица, сырая радужная форель (2%), ' +
            'масло лосося (2%), подсолнечное масло, сушеные водоросли, свежая мускатная тыква, свежая тыква, ' +
            'цельная свежая клюква, цельная свежая черника.',
        price: 18.09,
        descriptions: 'Низкозерновой корм для взрослых кошек всех пород.',
    },
    {
        id: 2,
        title: 'ACANA INDOOR ENTRÉE Cat (Курица, сельдь, индейка)',
        image: imageGoods2,
        alt: 'ACANA',
        weight: '0,34 кг',
        type: 'Сухой корм',
        country: 'Канада',
        compound: 'свежее мясо курицы (16%), дегидрированное мясо курицы (16%), дегидрированная сельдь (16%), ' +
            'цельный овес, цельный горох, куриный жир (5%), полевой мискантус, цельная зеленая чечевица, ' +
            'свежее мясо индейки (4%), сырая цельная сельдь (4%), цельный нут, цельная красная чечевица, чечевица, ' +
            'сырой кролик (1%), свежие легкие и сердце курицы (1%), свежие легкие и сердце индейки, куриный хрящ (1%), ' +
            'сушеные водоросли, свежая мускатная тыква, свежая столовая тыква, свежая цельная клюква, свежая цельная черника.',
        price: 18.09,
        descriptions: 'Низкозерновой корм для стерилизованных кошек.',
    },
    {
        id: 3,
        title: 'Farmina N&D Cat Quinoa Skin & Coat (Сельдь и кокос)',
        image: imageGoods3,
        alt: 'Farmina',
        weight: '0,3 кг',
        type: 'Сухой корм',
        country: 'Италия',
        compound: 'Свежая дикая сельдь (18%), гидрализат белка сельди (20%), гороховый крахмал, семена киноа (8%), ' +
            'рыбий жир (от сельди), льняное семя, сушеный кокос (2,5%), куркума (2,5%), инулин, фруктолигосахариды, ' +
            'маннано олигосахариды, подорожник, карбонат кальция, дикальция фосфат, хлорид калия, хлорид натрия, ' +
            'сульфат кальция дигидрат, сухие пивные дрожжи, глюкозамин, хондроитинсульфат, экстракт календулы (источник лютеина).',
        price: 35.19,
        descriptions: 'Беззерновой корм для взрослых кошек.',
    },
    {
        id: 4,
        title: 'Farmina N&D GF Adult Mini (Кабан и яблоко)',
        image: imageGoods4,
        alt: 'Farmina',
        weight: '0,8 кг',
        type: 'Сухой корм',
        country: 'Италия',
        compound: 'Свежее мясо дикого кабана без костей(22%), дегидратированное мясо кабана (20%), картофель, ' +
            'свежее мясо курицы без костей, дегидратированное мясо курицы, куриный жир, дегидратированные цельные яйца, ' +
            'дегидратированная рыба, рыбий жир, волокна гороха, сушеная морковь, сушеная люцерна, инулин, фруктоолигосахариды, ' +
            'маннанолигосахариды, дегидратированные яблоки (0,5%), порошок граната, дегидратированный сладкий апельсин, ' +
            'порошок шпината, семена подорожника (0,3%), порошок черной смородины (0,3%), порошок черники, хлорид натрия, ' +
            'дрожжи сухие пивные, корень куркумы (0,2%), глюкозамин, хондроитин сульфат, экстракт календулы (источник лютеина).',
        price: 60.79,
        descriptions: 'Беззерновой корм для взрослых собак мелких пород.',
    },
    {
        id: 5,
        title: 'GOSBI Exclusive Grain Free',
        image: imageGoods5,
        alt: 'Gosbi',
        weight: '12 кг',
        type: 'Сухой корм',
        country: 'Испания',
        compound: 'Дегидратированное утиное мясо (28%), дегидратированный картофель (16%), ' +
            'утиный жир (консервированный смесью токоферолов, источник витамина Е), свежая утка (8% до экструзии), ' +
            'дегидратированный сладкий картофель (8%), дегидратированное яблоко (7%), дегидратированная рыба (6%), ' +
            'лососевое масло, гидролизованные утиные белки, фрукты и овощи (4%) (дегидратированная груша, ' +
            'свекольная мякоть, дегидратированная морковь, дегидратированный томат, дегидратированный ананас), ' +
            'сушеные пивные дрожжи, яйцо порошок (1%), экстракт криля + PROVITAL FORMULA (2%): оливковое масло (0,40%), ' +
            'мидии с зеленой губой, гидролизованные ракообразные (природный источник глюкозамина), ' +
            'гидролизованный хрящ (природный источник хондроитина), сушеный шпинат, ' +
            'лепестки сушеных капустников (природный источник лютеина), сушеная люцерна, дегидратированные водоросли (спирулина), ' +
            'дегидратированная брокколи, экстракт льняного зуба, экстракт листьев мяты, экстракт семян зеленого чая, ' +
            'высушенная ромашка, экстракт лимонных плодов, экстракт виноград, масло огуречника, экстракт красных фруктов, ' +
            'экстракт чеснока, экстракт тимьяна, экстракт орегана o, экстракт семян расторопши, экстракт юкки, экстракт розмарина, ' +
            'экстракт алоэ вера, клюква, FOS, MOS.',
        price: 375.48,
        descriptions: 'Корм собак всех пород, беззерновой с уткой.',
    },
    {
        id: 6,
        title: 'Royal Canin Maltese Adult',
        image: imageGoods6,
        alt: 'Royal Canin',
        weight: '1,5 кг',
        type: 'Сухой корм',
        country: 'Франция',
        compound: 'Кукуруза, рис, дегидратированные белки животного происхождения (птица), животные жиры, ' +
            'дегидратированные белки животного происхождения (свинина), гидролизат белков животного происхождения, ' +
            'изолят растительных белков*, кукурузная мука, экстракт цикория, соевое масло, минеральные вещества, ' +
            'рыбий жир, дрожжи, фруктоолигосахариды, масло огуречника аптечного (0,1 %), ' +
            'экстракт бархатцев прямостоячих (источник лютеина), экстракты зеленого чая и винограда (источники полифенолов), ' +
            'гидролизат из панциря ракообразных (источник глюкозамина), гидролизат из хряща (источник хондроитина). ' +
            '* L.I.P. (Low Indigestible Protein) - белки, отобранные по принципу максимальной усвояемости.',
        price: 31.19,
        descriptions: 'Корм для собак породы Мальтийская болонка от 10 месяцев.',
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

export const ourTeam: [{ cynologist: SpecializationTeamType[] }, { veterinarian: SpecializationTeamType[] }, { callCenter: SpecializationTeamType[] }] = [
    {
        cynologist: [
            {
                id: 1,
                image: ourTeamPeople1,
                alt: 'people1',
                name: 'Захаревич А.И.',
                description: 'Кинолог. Стаж более 10 лет.',
            },
            {
                id: 2,
                image: ourTeamPeople2,
                alt: 'people2',
                name: 'Вербицкая О.А.',
                description: 'Кинолог. Стаж более 8 лет.',
            },
            {
                id: 3,
                image: ourTeamPeople3,
                alt: 'people3',
                name: 'Клюшко Е.А.',
                description: 'Кинолог. Стаж более 5 лет.',
            },
            {
                id: 4,
                image: ourTeamPeople4,
                alt: 'people4',
                name: 'Елисеев Д.П.',
                description: 'Кинолог. Стаж более 5 лет.',
            },
        ]

    },
    {
        veterinarian: [
            {
                id: 5,
                image: ourTeamPeople5,
                alt: 'people5',
                name: 'Иванов К.Е.',
                description: 'Ветеринар. Стаж более 7 лет.',
            },
            {
                id: 6,
                image: ourTeamPeople6,
                alt: 'people6',
                name: 'Ляшко А.А.',
                description: 'Ветеринар. Стаж более 3 лет.',
            },
        ]
    },
    {
        callCenter: [
            {
                id: 7,
                image: ourTeamPeople7,
                alt: 'people1',
                name: 'Левченко А.Г.',
                description: 'Call-Центр. Стаж более 5 лет.',
            },
            {
                id: 8,
                image: ourTeamPeople8,
                alt: 'people1',
                name: 'Котова К.О.',
                description: 'Call-Центр. Стаж более 2 лет.',
            },
        ]
    },
]

export const ourPartners: OurParntersType[] = [
    {
        id: 1,
        alt: '4Paws',
        img: ourPartners4Paws,
        link: 'http://4lapy.by/',
    },
    {
        id: 2,
        alt: 'Av',
        img: ourPartnersAv,
        link: 'https://alfavet.by/',
    },
    {
        id: 3,
        alt: 'Dv',
        img: ourPartnersDv,
        link: 'http://dv.by/',
    },
    {
        id: 4,
        alt: 'Ls',
        img: ourPartnersLs,
        link: 'https://bestfriend.by/',
    },
    {
        id: 5,
        alt: 'Garfield',
        img: ourPartnersGarfield,
        link: 'https://garfield.by/',
    },
    {
        id: 6,
        alt: 'Gh',
        img: ourPartnersGh,
        link: 'https://glavnoehvost.by/',
    },
    {
        id: 7,
        alt: 'It',
        img: ourPartnersGroomIt,
        link: 'http://www.groomit.by/',
    },
    {
        id: 8,
        alt: 'Manifik',
        img: ourPartnersManifik,
        link: 'https://salon-manifik.by/',
    },
    {
        id: 9,
        alt: 'Milord',
        img: ourPartnersMilord,
        link: 'http://salon-milord.by/',
    },
    {
        id: 10,
        alt: 'Strelka',
        img: ourPartnersStrelka,
        link: 'https://strelka.by/',
    },
    {
        id: 11,
        alt: 'Vd',
        img: ourPartnersVd,
        link: 'https://drugvet.by/',
    },
    {
        id: 12,
        alt: 'Vm',
        img: ourPartnersVm,
        link: 'https://vetmed.by/',
    },
    {
        id: 13,
        alt: 'Vp',
        img: ourPartnersVp,
        link: 'https://vetprofi.by/',
    },
    {
        id: 14,
        alt: 'Zoo',
        img: ourPartnersZoo,
        link: 'https://e-zoo.by/',
    },
    {
        id: 15,
        alt: 'ZooFauna',
        img: ourPartnersZooFauna,
        link: 'https://zoofauna.by/',
    },
    {
        id: 16,
        alt: 'ZooQI',
        img: ourPartnersZooQI,
        link: 'https://zooqi.by/',
    },
    {
        id: 17,
        alt: 'Zoobazar',
        img: ourPartnersZoobazar,
        link: 'https://zoobazar.by/',
    },
]

export const services: ServicesType[] = [
    {
        id: 1,
        title: 'Уход за питомцем 24/7',
        description: '',
        descriptionModal: '',

    },
    {
        id: 2,
        title: 'Передержка',
        description: 'Срочно нужно уехать, а не с кем оставить своего питомца?!',
        descriptionModal: 'PetFriends предлагает вам услуги по передержке животных ' +
            'в Минске. Что такое передержка? Передержка — это временное содержание вашего любимца другими людьми. ' +
            'Если нет возможности попросить друзей, ' +
            'знакомых или родственников побыть с вашим четвероногим другом, на помощь приходит платная передержка животных, по-другому это называется ситтинг.' +
            ' Ситтер обязуется добросовестно ухаживать за вашим питомцем, кормить, гулять, гладить и не оставлять без присмотра.',
    },
    {
        id: 3,
        title: 'Выгул собак',
        description: 'Вам пришлось задержаться на работе, уехать на какое-то мероприятие или отлучиться по делам, а собака остается дома одна. Нужен выгул собак в Минске? Ситтеры нашей компании с удовольствием проведут время на свежем воздухе с вашим питомцем.',
        descriptionModal: ' Как мы осуществляем сервис по выгулу собак:' +
            'На нашем сайте вы выбираете необходимую дату, время.' +
            'Если все критерии сходятся, то после принятия брони на выгул, с вами связывается наш сотрудник и договариваетесь о месте и времени встречи.' +
            'Наш сотрудник берет вашу собачку и гуляет с ней 40-60 минут. ' +
            'У каждого выгульщика компании PetFriends имеется специальное мобильное приложение (трекер), где после прогулки будет отображаться маршрут передвижения сотрудника и питомца. ' +
            'При желании, каждому хозяину мы можем предоставить информацию с трекера, чтобы он увидел, где гулял пёсик и фотоотчет с прогулки.' +
            'Стоимость выгула собак ситтерами нашей компании составляет от 5-ти до 15-ти белорусских рублей. ',
    },
    {
        id: 4,
        title: 'Няня для животных',
        description: 'Каждая собака или кот отличается своим характером и поведением. Кто-то любитель портить мебель, грызть провода, разбрасывать вещи, царапать стены, а кто-то просто очень скучает и впадает в депрессию, если хозяин отсутствует. В таких ситуациях владельцам четвероногих может помочь дневная няня для животных.',
        descriptionModal: 'Няня для животных — это человек, который присмотрит за вашим питомцем, пока вас нет дома. ' +
            'Услуги няни для собак или кошек могут осуществляться как на территории ситтера, так и у вас дома. ' +
            'В обоих случаях, вы можете быть уверенными, что за время вашего отсутствия ничего не случится ни с вашим животным, ни с вашим имуществом. ' +
            'Няня для собак или кошек — это человек, который обязательно накормит вашего питомца, поиграет с ним, погладит и проследит, чтобы с животным было всё в порядке.',
    },
    {
        id: 5,
        title: 'Груминг',
        description: 'Груминг',
        descriptionModal: '',
    },
    {
        id: 6,
        title: 'Доставка товаров клиенту',
        description: 'Доставка товаров клиенту',
        descriptionModal: '',
    },
]
