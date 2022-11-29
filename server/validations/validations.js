import {body} from "express-validator";

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('fullName', 'Укажите имя').isLength({min: 3}),
    body('avatarUrl', 'Неверная ссылка на аватар').optional().isURL(),
];

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
];

export const userInfoValidation = [
    body('name', 'Введите имя').isLength({min:3}).isString(),
    body('lastName', 'Введите фамилию').isLength({min:3}).isString(),
    body('surName', 'Введите отчество').isLength({min:3}).isString(),
    body('city', 'Укажите город').isLength({min:3}).isString(),
    body('street', 'Укажите улицу').isLength({min:3}).isString(),
    body('houseNumber', 'Укажите № дома').isLength({min:1}).isString(),
    body('corpsHouse', 'Укажите № корпуса').isLength({min:1}).isString(),
    body('apartmentNumber', 'Укажите № квартиры').isLength({min:1}).isString(),
    body('userPhoneNumber', 'Укажите № телефона').isLength({min:1}).isString(),
    body('avatarUrl', 'Введите отчество').optional().isString(),
]

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({min: 3}).isString(),
    body('text', 'Введите текс статьи').isLength({min: 10}).isString(),
    body('tags', 'Не верный формат тегов (укажите массив)').optional().isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];

export const servicesCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({min: 3}).isString(),
    body('description', 'Введите текс услуги').isLength({min: 10}).isString(),
    body('descriptionModal', 'Введите текс услуги модального окна').isLength({min: 10}).isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];

export const userPetValidation = [
    body('petName', 'Введите имя питомца').isLength({min:1}).isString(),
    body('petBreed', 'Укажите пароду питомца').isLength({min:1}).isString(),
    body('agePet', 'Укажите возраст питомца').isLength({min:1}).isString(),
    body('petGender', 'Укажите пол питомца').isLength({min:1}).isString(),
    body('petAvatarUrl', 'Неверная ссылка на изображение').optional().isString(),

]

export const PetVaccinationValidation = [
    body('typeVaccination', 'Укажите тип вакцины').isLength({min:1}).isString(),
    body('dateVaccination', 'Укажите дату вакцинации').isDate(),
    body('nameOfVaccine', 'Укажите название вакцины').isLength({min:1}).isString(),
    body('nameClinic', 'Укажите название клиники').isLength({min:1}).isString(),
]