import PetProceduresModel from "../models/PetProcedures.js";
import userPet from "../models/UserPet.js";
import UserPet from "../models/UserPet.js";

export const getAll = async (req, res) => {
    try {
        const petProcedures = await PetProceduresModel.find().populate('userPet').exec()

        res.json(petProcedures)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить процедуры!',
        })
    }
}

export const removePetProcedures = async (req, res) => {
    try {

        const petProceduresId = req.params.id

        PetProceduresModel.findByIdAndDelete(
            {
                _id: petProceduresId
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось удалить питомца'
                    })
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Питомцы не найдены'
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
            message: 'Не удалось получить питомцев',
        })
    }
}

export const updatePetProcedures = async (req, res) => {
    try {

        const petProceduresId = req.params.id

        await PetProceduresModel.updateOne(
            {
                _id: petProceduresId
            },
            {
                typeVaccination: req.body.typeVaccination,
                dateVaccination: req.body.dateVaccination,
                nameOfVaccine: req.body.nameOfVaccine,
                dateProcedure: req.body.dateProcedure,
                nameOfProcedure: req.body.nameOfProcedure,
                nameClinic: req.body.nameClinic,
            }
        )
        res.json({
            success: true
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить информацию о процедуре',
        })
    }
}

export const createPetProcedures = async (req, res) => {

    try {

        const doc = new PetProceduresModel({
            typeVaccination: req.body.typeVaccination,
            dateVaccination: req.body.dateVaccination,
            nameOfVaccine: req.body.nameOfVaccine,
            dateProcedure: req.body.dateProcedure,
            nameOfProcedure: req.body.nameOfProcedure,
            nameClinic: req.body.nameClinic,
        })

        const petProcedures = await doc.save()

        try {
            const userPetId = req.params.id
            await UserPet.updateOne(
                {
                    _id : userPetId
                },
                {
                    $push: {procedures: petProcedures}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(petProcedures)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать процедуру',
        })
    }
}