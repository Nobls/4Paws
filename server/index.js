import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

mongoose
    .connect('mongodb+srv://AdminS:QQQwww444@pf.9ipuej5.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB Ok'))
    .catch((err)=> console.log('DB error', err))

const app = express();

app.use(express.json());

app.post('/auth/registration', (req, res) => {

});

app.listen(3157, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server Ok')
});