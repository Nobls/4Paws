import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

/*export const registration = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            passwordHash: hash,
            avatarUrl: req.body.avatarUrl,
            fullName: req.body.fullName,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secretKey1234',
            {
                expiresIn: '30d'
            },
        );

        const {passwordHash, ...userData} = user._doc;

        res.json({
            userData,
            token,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться',
        })
    }
};*/

export const registration = async (req, res) => {
    try {
        const { fullName,email, password } = req.body

        const isUsed = await UserModel.findOne({fullName})

        if (isUsed){
            return res.json({
                message: 'Данное имя уже занято.'
            })
        }

        const salt = bcrypt.genSaltSync(10)

        const hash = bcrypt.hashSync(password, salt)

        const newUser = new UserModel({
            fullName,
            password: hash,
            email,
        })

        const token = jwt.sign(
            {
                _id: newUser._id,
            },
            'secretKey1234',
            {
                expiresIn: '30d'
            }
        )

        await newUser.save()

        res.json({
            newUser,
            token,
            message: 'Регистрация прошла успешно.'
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться',
        })
    }
};

export const updateUserInfo = async (req, res) => {
    try {

        const userId = req.params.id

        await UserModel.updateOne(
            {
                _id: userId
            },
            {

                name: req.body.name,
                lastName: req.body.lastName,
                surName: req.body.surName,
                city: req.body.city,
                street: req.body.street,
                houseNumber: req.body.houseNumber,
                corpsHouse: req.body.corpsHouse,
                apartmentNumber: req.body.apartmentNumber,
                userPhoneNumber: req.body.userPhoneNumber,
                avatarUrl: req.body.avatarUrl
                //для обновления
            }
        )
        res.json({
            success: true
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить данные пользователя',
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})

        if (!user) {
            return res.status(400).json({
                message: "Не верный логин или пароль"
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.password);

        if (!isValidPass) {
            return res.status(400).json({
                massage: 'Не верный логин или пароль'
            })
        }

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secretKey1234',
            {
                expiresIn: '30d'
            },
        );

        const {password, ...userData} = user._doc;

        res.json({
            userData,
            token,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось авторизоваться',
        })
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).join({
                message: 'Пользователь не найден',
            })
        }

        const {password, ...userData} = user._doc;

        res.json(userData);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Нет доступа',
        })
    }
};

export const getUserId = async (req, res) => {
    try {

        const userId = req.params.id

        UserModel.findOne(
            {
                _id: userId
            },
            {},
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось получить',
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Пользователь не найден'
                    })
                }

                res.json(doc)
            }
        )


    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить ID пользователя',
        })
    }
}
