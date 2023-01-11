import PetProceduresModel from "../models/PetProcedures.js";
import UserPetModel from "../models/UserPet.js";

export const getProcedures = async (req, res) => {
    try {

        const procedures = await UserPetModel.findById(req.params.id)
        const list = await Promise.all(
            procedures.petProcedures.map((p)=>{
                return PetProceduresModel.findById(p)
            })
        )
        res.json(list)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить процедуры!',
        })
    }
}

export const getVaccines = async (req, res) => {
    try {

        const vaccines = await UserPetModel.findById(req.params.id)
        const list = await Promise.all(
            vaccines.petVaccines.map((p)=>{
                return PetProceduresModel.findById(p)
            })
        )
        res.json(list)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить процедуры!',
        })
    }
}

export const removePetProcedures = async (req, res) => {
    try {
        const proc = await PetProceduresModel.findByIdAndDelete(req.params.id)
        if (!proc) return res.json({ message: 'Такой процедуры не существует' })

        await UserPetModel.updateOne(req.id, {
            $pull: { petProcedures: req.params.id },
        })

        res.json({ message: 'Процедура была удалена.' })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
    }
}

export const removePetVaccines = async (req, res) => {
    try {
        const vac = await PetProceduresModel.findByIdAndDelete(req.params.id)
        if (!vac) return res.json({ message: 'Такой процедуры не существует' })

        await UserPetModel.updateOne(req.id, {
            $pull: { petVaccines: req.params.id },
        })

        res.json({ message: 'Процедура была удалена.' })
    } catch (error) {
        res.json({ message: 'Что-то пошло не так.' })
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
            dateProcedure: req.body.dateProcedure,
            nameOfProcedure: req.body.nameOfProcedure,
            nameClinic: req.body.nameClinic,
        })

        const newPetProcedures = await doc.save()

        try {
            const userPetId = req.params.id
            await UserPetModel.updateOne(
                {
                    _id: userPetId
                },
                {
                    $push: {petProcedures: newPetProcedures._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newPetProcedures)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать процедуру',
        })
    }
}

export const createPetVaccines = async (req, res) => {

    try {

        const doc = new PetProceduresModel({
            typeVaccination: req.body.typeVaccination,
            dateVaccination: req.body.dateVaccination,
            nameOfVaccine: req.body.nameOfVaccine,
            nameClinic: req.body.nameClinic,
        })

        const newPetVaccines = await doc.save()

        try {
            const userPetId = req.params.id
            await UserPetModel.updateOne(
                {
                    _id: userPetId
                },
                {
                    $push: {petVaccines: newPetVaccines._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newPetVaccines)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать процедуру',
        })
    }
}
