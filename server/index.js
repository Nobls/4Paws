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

import {UserController, PostController, ServicesController, UserPetController, PetProceduresController, CommentController, CategoryDogController, ShopCategory, CategoryCatController, CategoryBirdController, CategoryRodentController, CategoryFishController} from './controllers/index.js'


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
app.post('/shop/bird', checkAuth, ShopCategory.createBirdCategory)
app.post('/shop/rodent', checkAuth, ShopCategory.createRodentCategory)
app.post('/shop/fish', checkAuth, ShopCategory.createFishCategory)


// категории для собак

// создание
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

// получение

app.get('/shop/dog/dryFoodDog/:id', checkAuth, CategoryDogController.getDryFood)
app.get('/shop/dog/preservesForDogs/:id', checkAuth, CategoryDogController.getPreserves)
app.get('/shop/dog/vitaminsForDogs/:id', checkAuth, CategoryDogController.getVitamins)
app.get('/shop/dog/homeForDogs/:id', checkAuth, CategoryDogController.getHome)
app.get('/shop/dog/toysForDogs/:id', checkAuth, CategoryDogController.getToys)
app.get('/shop/dog/carryingForDogs/:id', checkAuth, CategoryDogController.getCarrying)
app.get('/shop/dog/cosmeticsForDogs/:id', checkAuth, CategoryDogController.getCosmetics)
app.get('/shop/dog/clothesForDogs/:id', checkAuth, CategoryDogController.getClothes)
app.get('/shop/dog/dishesForDogs/:id', checkAuth, CategoryDogController.getDishes)
app.get('/shop/dog/ammunitionForDogs/:id', checkAuth, CategoryDogController.getAmmunition)
app.get('/shop/dog/toiletsForDogs/:id', checkAuth, CategoryDogController.getToilets)

// категории для котов
app.post('/shop/cat/:id/dryFoodForCats', checkAuth, CategoryCatController.dryFoodForCats)
app.post('/shop/cat/:id/preservesForCats', checkAuth, CategoryCatController.preservesForCats)
app.post('/shop/cat/:id/vitaminsForCats', checkAuth, CategoryCatController.vitaminsForCats)
app.post('/shop/cat/:id/homeForCats', checkAuth, CategoryCatController.homeForCats)
app.post('/shop/cat/:id/toysForCats', checkAuth, CategoryCatController.toysForCats)
app.post('/shop/cat/:id/carryingForCats', checkAuth, CategoryCatController.carryingForCats)
app.post('/shop/cat/:id/cosmeticsForCats', checkAuth, CategoryCatController.cosmeticsForCats)
app.post('/shop/cat/:id/scratchingPostsForCats', checkAuth, CategoryCatController.scratchingPostsForCats)
app.post('/shop/cat/:id/dishesForCats', checkAuth, CategoryCatController.dishesForCats)
app.post('/shop/cat/:id/ammunitionForCats', checkAuth, CategoryCatController.ammunitionForCats)
app.post('/shop/cat/:id/toiletsForCats', checkAuth, CategoryCatController.toiletsForCats)

// категории для птиц
app.post('/shop/bird/:id/dryFoodForBirds', checkAuth, CategoryBirdController.dryFoodForBirds)
app.post('/shop/bird/:id/vitaminsForBirds', checkAuth, CategoryBirdController.vitaminsForBirds)
app.post('/shop/bird/:id/birdcage', checkAuth, CategoryBirdController.birdcage)
app.post('/shop/bird/:id/bathForBirds', checkAuth, CategoryBirdController.bathForBirds)
app.post('/shop/bird/:id/toysForBirds', checkAuth, CategoryBirdController.toysForBirds)
app.post('/shop/bird/:id/fillersAndPadsForBird', checkAuth, CategoryBirdController.fillersAndPadsForBird)
app.post('/shop/bird/:id/accessoriesForBird', checkAuth, CategoryBirdController.accessoriesForBird)
app.post('/shop/bird/:id/dishesForBird', checkAuth, CategoryBirdController.dishesForBird)

// категории для грызунов
app.post('/shop/rodent/:id/dryFoodForRodents', checkAuth, CategoryRodentController.createDryFoodForRodents)
app.post('/shop/rodent/:id/vitaminsForRodents', checkAuth, CategoryRodentController.createVitaminsForRodents)
app.post('/shop/rodent/:id/accessoriesForRodents', checkAuth, CategoryRodentController.createAccessoriesForRodents)
app.post('/shop/rodent/:id/cellsForRodents', checkAuth, CategoryRodentController.createCellsForRodents)
app.post('/shop/rodent/:id/bathingForRodents', checkAuth, CategoryRodentController.createBathingForRodents)
app.post('/shop/rodent/:id/toysForRodents', checkAuth, CategoryRodentController.createToysForRodents)
app.post('/shop/rodent/:id/extenderForRodents', checkAuth, CategoryRodentController.createExtenderForRodents)
app.post('/shop/rodent/:id/dishesForRodents', checkAuth, CategoryRodentController.createDishesForRodents)

// категории ддя рыб
app.post('/shop/fish/:id/aquariumForFish', checkAuth, CategoryFishController.createAquariumForFish)
app.post('/shop/fish/:id/liveFish', checkAuth, CategoryFishController.createLiveFish)
app.post('/shop/fish/:id/foodForFish', checkAuth, CategoryFishController.createFoodForFish)
app.post('/shop/fish/:id/decorForFish', checkAuth, CategoryFishController.createDecorForFish)
app.post('/shop/fish/:id/equipmentForFish', checkAuth, CategoryFishController.createEquipmentForFish)
app.post('/shop/fish/:id/chemistryForFish', checkAuth, CategoryFishController.createChemistryForFish)





app.listen(3157, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
});