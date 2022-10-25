import express from 'express';
import mongoose from "mongoose";

import {registerValidation, loginValidation, postCreateValidation} from './validations/validations.js'
import checkAuth from "./utils/checkAuth.js";

import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'

mongoose
    .connect('mongodb+srv://AdminS:QQQwww444@pf.9ipuej5.mongodb.net/PF?retryWrites=true&w=majority')
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log('DB error', err))

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);

app.post('/auth/registration', registerValidation, UserController.registration);

app.get('/auth/me', checkAuth, UserController.getMe);




app.get('/posts', PostController.getAll);

app.get('/posts/:id', PostController.getOne);

app.post('/posts', checkAuth, postCreateValidation, PostController.create);

app.delete('/posts/:id', checkAuth, PostController.remove);

app.patch('/posts/:id', checkAuth, PostController.update);

app.listen(3157, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
});