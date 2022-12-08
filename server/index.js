import express from 'express';
import mongoose from "mongoose";
import multer from "multer";
import cors from 'cors'

import {
    registerValidation,
    loginValidation,
    postCreateValidation,
    servicesCreateValidation, userInfoValidation, userPetValidation, petProceduresValidation
} from './validations/validations.js'

import {checkAuth, handleValidationErrors} from "./utils/index.js";

import {UserController, PostController, ServicesController, UserPetController, PetProceduresController} from './controllers/index.js'

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

app.get('/news/:id', PostController.getOne);

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

app.get('/petAccount/:id/procedures', PetProceduresController.getAll)

app.post('/petAccount/:id/procedures', checkAuth, petProceduresValidation, handleValidationErrors, PetProceduresController.createPetProcedures)

app.delete('/petAccount/:id/procedures', checkAuth, PetProceduresController.removePetProcedures)

app.patch('/petAccount/:id/procedures', checkAuth, petProceduresValidation, PetProceduresController.updatePetProcedures)
// нужно поработать с путями

app.listen(3157, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
});