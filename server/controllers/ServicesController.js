import ServicesModel from "../models/Services.js";


export const getAll = async (req, res) => {
    try {
        const services = await ServicesModel.find().populate('user').exec();

        res.json(services);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить услуги',
        })
    }
};

export const getOne = async (req, res) => {
    try {

        const servicesId = req.params.id

        ServicesModel.findOne(
            {
                _id: servicesId
            },
            {

            },// принимает 3 параметра обязательно
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось получить услугу',
                    })
                }
                if (!doc) {
                    res.status(404).json({
                        message: 'Услуга не найдена'
                    })
                }

                res.json(doc)
            }
        ).populate('user')

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить услугу',
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new ServicesModel({
            title: req.body.title,
            description: req.body.description,
            descriptionModal: req.body.descriptionModal,
            imageUrl: req.body.imageUrl,
            user: req.userId,
        })

        const services = await doc.save()

        res.json(services)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать услугу',
        })
    }
}

export const remove = async (req, res) => {
    try {

        const servicesId = req.params.id

        ServicesModel.findOneAndDelete(
            {
                _id: servicesId
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось удалить услугу'
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Услуга не найдена'
                    })
                }

                res.json({
                    success: true
                })
            }
        )

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить услугу',
        })
    }
}

export const update = async (req, res) => {
    try {

        const servicesId = req.params.id

        await ServicesModel.updateOne(
            {
                _id: servicesId
            },
            {
                title: req.body.title,
                description: req.body.description,
                descriptionModal: req.body.descriptionModal,
                imageUrl: req.body.imageUrl,
            }
        )

        res.json({
            success: true
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить услугу',
        })
    }
}