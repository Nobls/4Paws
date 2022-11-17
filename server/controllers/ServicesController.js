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