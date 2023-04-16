import express from 'express';
import mongoose from "mongoose";
import multer from "multer";
import cors from 'cors';

import {
    loginValidation,
    petProceduresValidation,
    postCreateValidation,
    registerValidation,
    servicesCreateValidation,
    userInfoValidation,
    userPetValidation
} from './validations/validations.js'

import {checkAuth, handleValidationErrors} from "./utils/index.js";

import {
    CategoryBirdController,
    CategoryCatController,
    CategoryDogController,
    CategoryFishController,
    CategoryRodentController,
    CommentController,
    PetProceduresController,
    PostController,
    ServicesController,
    ShopCategory,
    UserController,
    UserPetController,
    ReviewsController,
} from './controllers/index.js'


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

app.get('/shop/dog/categoryDog', checkAuth, CategoryDogController.getAllDogCategory)

app.get('/shop/dog/dryFoodDog/:dryFoodDogId', checkAuth, CategoryDogController.getDryFood)
app.get('/shop/dog/preservesForDogs/:preservesForDogsId', checkAuth, CategoryDogController.getPreserves)
app.get('/shop/dog/vitaminsForDogs/:vitaminsForDogsId', checkAuth, CategoryDogController.getVitamins)
app.get('/shop/dog/homeForDogs/:homeForDogsId', checkAuth, CategoryDogController.getHome)
app.get('/shop/dog/toysForDogs/:toysForDogsId', checkAuth, CategoryDogController.getToys)
app.get('/shop/dog/carryingForDogs/:carryingForDogsId', checkAuth, CategoryDogController.getCarrying)
app.get('/shop/dog/cosmeticsForDogs/:cosmeticsForDogsId', checkAuth, CategoryDogController.getCosmetics)
app.get('/shop/dog/clothesForDogs/:clothesForDogsId', checkAuth, CategoryDogController.getClothes)
app.get('/shop/dog/dishesForDogs/:dishesForDogsId', checkAuth, CategoryDogController.getDishes)
app.get('/shop/dog/ammunitionForDogs/:ammunitionForDogsId', checkAuth, CategoryDogController.getAmmunition)
app.get('/shop/dog/toiletsForDogs/:toiletsForDogsId', checkAuth, CategoryDogController.getToilets)

app.get('/shop/dog/product/:id', checkAuth, CategoryDogController.getOneProduct)

// категории для котов

// создание
app.post('/shop/cat/dryFoodForCats/:dryFoodForCatsId', checkAuth, CategoryCatController.dryFoodForCats)
app.post('/shop/cat/preservesForCats/:preservesForCatsId', checkAuth, CategoryCatController.preservesForCats)
app.post('/shop/cat/vitaminsForCats/:vitaminsForCatsId', checkAuth, CategoryCatController.vitaminsForCats)
app.post('/shop/cat/homeForCats/:homeForCatsId', checkAuth, CategoryCatController.homeForCats)
app.post('/shop/cat/toysForCats/:toysForCatsId', checkAuth, CategoryCatController.toysForCats)
app.post('/shop/cat/carryingForCats/:carryingForCatsId', checkAuth, CategoryCatController.carryingForCats)
app.post('/shop/cat/cosmeticsForCats/:cosmeticsForCatsId', checkAuth, CategoryCatController.cosmeticsForCats)
app.post('/shop/cat/scratchingPostsForCats/:scratchingPostsForCatsId', checkAuth, CategoryCatController.scratchingPostsForCats)
app.post('/shop/cat/dishesForCats/:dishesForCatsId', checkAuth, CategoryCatController.dishesForCats)
app.post('/shop/cat/ammunitionForCats/:ammunitionForCatsId', checkAuth, CategoryCatController.ammunitionForCats)
app.post('/shop/cat/toiletsForCats/:toiletsForCatsId', checkAuth, CategoryCatController.toiletsForCats)

// получение

app.get('/shop/cat/categoryCat', checkAuth, CategoryCatController.getAllCatCategory)

app.get('/shop/cat/dryFoodForCats/:dryFoodForCatsId', checkAuth, CategoryCatController.getDryFoodForCats)
app.get('/shop/cat/preservesForCats/:preservesForCatsId', checkAuth, CategoryCatController.getPreservesForCats)
app.get('/shop/cat/vitaminsForCats/:vitaminsForCatsId', checkAuth, CategoryCatController.getVitaminsForCats)
app.get('/shop/cat/homeForCats/:homeForCatsId', checkAuth, CategoryCatController.getHomeForCats)
app.get('/shop/cat/toysForCats/:toysForCatsId', checkAuth, CategoryCatController.getToysForCats)
app.get('/shop/cat/carryingForCats/:carryingForCatsId', checkAuth, CategoryCatController.getCarryingForCats)
app.get('/shop/cat/cosmeticsForCats/:cosmeticsForCatsId', checkAuth, CategoryCatController.getCosmeticsForCats)
app.get('/shop/cat/scratchingPostsForCats/:scratchingPostsForCatsId', checkAuth, CategoryCatController.getScratchingPostsForCats)
app.get('/shop/cat/dishesForCats/:dishesForCatsId', checkAuth, CategoryCatController.getDishesForCats)
app.get('/shop/cat/ammunitionForCats/:ammunitionForCatsId', checkAuth, CategoryCatController.getAmmunitionForCats)
app.get('/shop/cat/toiletsForCats/:toiletsForCatsId', checkAuth, CategoryCatController.getToiletsForCats)

// категории для птиц

//создание
app.post('/shop/bird/:id/dryFoodForBirds', checkAuth, CategoryBirdController.dryFoodForBirds)
app.post('/shop/bird/:id/vitaminsForBirds', checkAuth, CategoryBirdController.vitaminsForBirds)
app.post('/shop/bird/:id/birdcage', checkAuth, CategoryBirdController.birdcage)
app.post('/shop/bird/:id/bathForBirds', checkAuth, CategoryBirdController.bathForBirds)
app.post('/shop/bird/:id/toysForBirds', checkAuth, CategoryBirdController.toysForBirds)
app.post('/shop/bird/:id/fillersAndPadsForBird', checkAuth, CategoryBirdController.fillersAndPadsForBird)
app.post('/shop/bird/:id/accessoriesForBird', checkAuth, CategoryBirdController.accessoriesForBird)
app.post('/shop/bird/:id/dishesForBird', checkAuth, CategoryBirdController.dishesForBird)

//получение

app.get('/shop/bird/categoryBirds', checkAuth, CategoryBirdController.getAllCategoryBirds)

app.get('/shop/bird/dryFoodForBirds/:dryFoodForBirdsId', checkAuth, CategoryBirdController.getDryFoodForBirds)
app.get('/shop/bird/vitaminsForBirds/:vitaminsForBirdsId', checkAuth, CategoryBirdController.getVitaminsForBirds)
app.get('/shop/bird/birdcageForBirds/:birdcageForBirdsId', checkAuth, CategoryBirdController.getBirdcage)
app.get('/shop/bird/bathForBirds/:bathForBirdsId', checkAuth, CategoryBirdController.getBathForBirds)
app.get('/shop/bird/toysForBirds/:toysForBirdsId', checkAuth, CategoryBirdController.getToysForBirds)
app.get('/shop/bird/fillersAndPadsForBirds/:fillersAndPadsForBirdsId', checkAuth, CategoryBirdController.getFillersAndPadsForBird)
app.get('/shop/bird/accessoriesForBirds/:accessoriesForBirdsId', checkAuth, CategoryBirdController.getAccessoriesForBird)
app.get('/shop/bird/dishesForBirds/:dishesForBirdsId', checkAuth, CategoryBirdController.getDishesForBird)


// категории для грызунов

//создание
app.post('/shop/rodent/:id/dryFoodForRodents', checkAuth, CategoryRodentController.createDryFoodForRodents)
app.post('/shop/rodent/:id/vitaminsForRodents', checkAuth, CategoryRodentController.createVitaminsForRodents)
app.post('/shop/rodent/:id/accessoriesForRodents', checkAuth, CategoryRodentController.createAccessoriesForRodents)
app.post('/shop/rodent/:id/cellsForRodents', checkAuth, CategoryRodentController.createCellsForRodents)
app.post('/shop/rodent/:id/bathingForRodents', checkAuth, CategoryRodentController.createBathingForRodents)
app.post('/shop/rodent/:id/toysForRodents', checkAuth, CategoryRodentController.createToysForRodents)
app.post('/shop/rodent/:id/extenderForRodents', checkAuth, CategoryRodentController.createExtenderForRodents)
app.post('/shop/rodent/:id/dishesForRodents', checkAuth, CategoryRodentController.createDishesForRodents)

//получение

app.get('/shop/rodent/categoryRodent', checkAuth, CategoryRodentController.getAllRodentCategory)

app.get('/shop/rodent/dryFoodForRodents/:dryFoodForRodentsId', checkAuth, CategoryRodentController.getDryFoodForRodents)
app.get('/shop/rodent/vitaminsForRodents/:vitaminsForRodentsId', checkAuth, CategoryRodentController.getVitaminsForRodents)
app.get('/shop/rodent/accessoriesForRodents/:accessoriesForRodentsId', checkAuth, CategoryRodentController.getAccessoriesForRodents)
app.get('/shop/rodent/cellsForRodents/:cellsForRodentsId', checkAuth, CategoryRodentController.getCellsForRodents)
app.get('/shop/rodent/bathingForRodents/:bathingForRodentsId', checkAuth, CategoryRodentController.getBathingForRodents)
app.get('/shop/rodent/toysForRodents/:toysForRodentsId', checkAuth, CategoryRodentController.getToysForRodents)
app.get('/shop/rodent/extenderForRodents/:extenderForRodentsId', checkAuth, CategoryRodentController.getExtenderForRodents)
app.get('/shop/rodent/dishesForRodents/:dishesForRodentsId', checkAuth, CategoryRodentController.getDishesForRodents)


// категории для рыб

// создание
app.post('/shop/fish/:id/aquariums', checkAuth, CategoryFishController.createAquariums)
app.post('/shop/fish/:id/livingInhabitants', checkAuth, CategoryFishController.createLivingInhabitants)
app.post('/shop/fish/:id/aquariumsAndPedestals', checkAuth, CategoryFishController.createAquariumsAndPedestals)
app.post('/shop/fish/:id/fishFood', checkAuth, CategoryFishController.createFishFood)
app.post('/shop/fish/:id/decorations', checkAuth, CategoryFishController.createDecorations)
app.post('/shop/fish/:id/equipment', checkAuth, CategoryFishController.createEquipment)
app.post('/shop/fish/:id/chemistryForFish', checkAuth, CategoryFishController.createChemistryForFish)

// получение

app.get('/shop/fish/categoryFish', checkAuth, CategoryFishController.getAllFishCategory)

app.get('/shop/fish/aquariums/:aquariumId', checkAuth, CategoryFishController.getAquariums)
app.get('/shop/fish/livingInhabitants/:livingInhabitantsId', checkAuth, CategoryFishController.getLivingInhabitants)
app.get('/shop/fish/aquariumsAndPedestals/:aquariumsAndPedestalsId', checkAuth, CategoryFishController.getAquariumsAndPedestals)
app.get('/shop/fish/fishFood/:fishFoodId', checkAuth, CategoryFishController.getFishFood)
app.get('/shop/fish/decorations/:decorationsId', checkAuth, CategoryFishController.getDecorations)
app.get('/shop/fish/equipment/:equipmentId', checkAuth, CategoryFishController.getEquipment)
app.get('/shop/fish/chemistryForFish/:chemistryForFishId', checkAuth, CategoryFishController.getChemistryAndMedicines)


// получение одного товара

//app.get('/shop/:id/:id', getOne)







// отзывы
app.post('/reviews/:id', checkAuth, ReviewsController.createReview)
app.get('/reviews', ReviewsController.getAllReviews)


app.listen(3157, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
});