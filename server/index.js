import express from 'express';
import mongoose from "mongoose";
import multer from "multer";
import cors from 'cors';

import {
    registerValidation,
    loginValidation,
    postCreateValidation,
    servicesCreateValidation, userInfoValidation, userPetValidation, petProceduresValidation
} from './validations/validations.js'

import {checkAuth, handleValidationErrors} from "./utils/index.js";

import {UserController, PostController, ServicesController, UserPetController, PetProceduresController, CommentController, CategoryDogController, ShopCategory, CategoryCatController, CategoryBirdController} from './controllers/index.js'

mongoose
    .connect('mongodb+srv://AdminS:QQQwww444@pf.9ipuej5.mongodb.net/PF?retryWrites=true&w=majority')
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log('DB error', err))

const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    },
})

const upload = multer({storage})

app.use(express.json());
app.use(cors());

// загрузка изображений
app.use('/uploads', express.static('uploads'));

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    })
})

// регистрация авторизация

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);

app.post('/auth/registration', registerValidation, handleValidationErrors, UserController.registration);

app.patch('/auth/user/:id', userInfoValidation, handleValidationErrors, UserController.updateUserInfo)

app.get('/auth/user', checkAuth, UserController.getMe);

app.get('/auth/user/:id', checkAuth, handleValidationErrors, UserController.getUserId)

// получение, создание, редактирование, удаление новостей + получение тегов

app.get('/news', PostController.getAll); //заманил posts на news

app.get('/news/:id', checkAuth, PostController.getOne);

app.get('/tags', PostController.getLastTags);

app.get('/news/tags', PostController.getLastTags);

app.post('/news', checkAuth, postCreateValidation, handleValidationErrors, PostController.create);

app.delete('/news/:id', checkAuth, PostController.remove);

app.patch('/news/:id', checkAuth, postCreateValidation, handleValidationErrors, PostController.update);

// получение, создание, редактирование, удаление услуг

app.get('/services', ServicesController.getAllServices)

app.get('/services/:id', ServicesController.getOneServices)

app.post('/services', checkAuth, servicesCreateValidation, handleValidationErrors, ServicesController.createServices)

app.delete('/services/:id', checkAuth, ServicesController.removeServices)

app.patch('/services/:id', checkAuth, servicesCreateValidation, ServicesController.updateServices)

// получение, создание, редактирование, удаление питомцев

app.get('/petAccount', UserPetController.getAll)

app.get('/petAccount/:id', UserPetController.getOne)

app.post('/petAccount', checkAuth, userPetValidation, handleValidationErrors, UserPetController.createUserPet)

app.delete('/petAccount/:id', checkAuth, UserPetController.removeUserPet)

app.patch('/petAccount/:id', checkAuth, userPetValidation, UserPetController.updateUserPet)

// получение, создание, редактирование, удаление процедур питомцев

app.get('/petAccount/procedures/:id', PetProceduresController.getProcedures)

app.get('/petAccount/vaccines/:id', PetProceduresController.getVaccines)

app.post('/procedures/:id', checkAuth, handleValidationErrors, PetProceduresController.createPetProcedures)

app.post('/vaccines/:id', checkAuth, handleValidationErrors, PetProceduresController.createPetVaccines)

app.delete('/procedures/:id', checkAuth, handleValidationErrors, PetProceduresController.removePetProcedures)

app.delete('/vaccines/:id', checkAuth, handleValidationErrors, PetProceduresController.removePetVaccines)

app.patch('/petAccount/:id/procedures', checkAuth, petProceduresValidation, PetProceduresController.updatePetProcedures)

// добавить, получить комментарии

app.post('/comments/:id', checkAuth, CommentController.createComment)

app.get('/news/comments/:id', checkAuth, CommentController.getComments)

// магазин

app.post('/shop/dog', checkAuth, ShopCategory.createDogCategory)
app.post('/shop/cat', checkAuth, ShopCategory.createCatCategory)


// категории для собак
app.post('/shop/dog/:id/dryFoodDog', checkAuth, CategoryDogController.createDryFood)
app.post('/shop/dog/:id/preservesForDogs', checkAuth, CategoryDogController.preservesForDogs)
app.post('/shop/dog/:id/vitaminsForDogs', checkAuth, CategoryDogController.vitaminsForDogs)
app.post('/shop/dog/:id/homeForDogs', checkAuth, CategoryDogController.homeForDogs)
app.post('/shop/dog/:id/toysForDogs', checkAuth, CategoryDogController.toysForDogs)
app.post('/shop/dog/:id/carryingForDogs', checkAuth, CategoryDogController.carryingForDogs)
app.post('/shop/dog/:id/cosmeticsForDogs', checkAuth, CategoryDogController.cosmeticsForDogs)
app.post('/shop/dog/:id/clothesForDogs', checkAuth, CategoryDogController.clothesForDogs)
app.post('/shop/dog/:id/dishesForDogs', checkAuth, CategoryDogController.dishesForDogs)
app.post('/shop/dog/:id/ammunitionForDogs', checkAuth, CategoryDogController.ammunitionForDogs)
app.post('/shop/dog/:id/toiletsForDogs', checkAuth, CategoryDogController.toiletsForDogs)

// категории для котов
app.post('/shop/dog/:id/dryFoodForCats', checkAuth, CategoryCatController.dryFoodForCats)
app.post('/shop/dog/:id/preservesForCats', checkAuth, CategoryCatController.preservesForCats)
app.post('/shop/dog/:id/vitaminsForCats', checkAuth, CategoryCatController.vitaminsForCats)
app.post('/shop/dog/:id/homeForCats', checkAuth, CategoryCatController.homeForCats)
app.post('/shop/dog/:id/toysForCats', checkAuth, CategoryCatController.toysForCats)
app.post('/shop/dog/:id/carryingForCats', checkAuth, CategoryCatController.carryingForCats)
app.post('/shop/dog/:id/cosmeticsForCats', checkAuth, CategoryCatController.cosmeticsForCats)
app.post('/shop/dog/:id/scratchingPostsForCats', checkAuth, CategoryCatController.scratchingPostsForCats)
app.post('/shop/dog/:id/dishesForCats', checkAuth, CategoryCatController.dishesForCats)
app.post('/shop/dog/:id/ammunitionForCats', checkAuth, CategoryCatController.ammunitionForCats)
app.post('/shop/dog/:id/toiletsForCats', checkAuth, CategoryCatController.toiletsForCats)

// категории для птиц
app.post('/shop/dog/:id/dryFoodForBirds', checkAuth, CategoryBirdController.dryFoodForBirds)
app.post('/shop/dog/:id/vitaminsForBirds', checkAuth, CategoryBirdController.vitaminsForBirds)
app.post('/shop/dog/:id/birdcage', checkAuth, CategoryBirdController.birdcage)
app.post('/shop/dog/:id/bathForBirds', checkAuth, CategoryBirdController.bathForBirds)
app.post('/shop/dog/:id/toysForBirds', checkAuth, CategoryBirdController.toysForBirds)
app.post('/shop/dog/:id/fillersAndPadsForBird', checkAuth, CategoryBirdController.fillersAndPadsForBird)
app.post('/shop/dog/:id/accessoriesForBird', checkAuth, CategoryBirdController.accessoriesForBird)
app.post('/shop/dog/:id/dishesForBird', checkAuth, CategoryBirdController.dishesForBird)





app.listen(3157, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
});