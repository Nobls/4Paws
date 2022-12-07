import UserPetModel from "../models/UserPet.js";

export const getAll = async (req, res) => {
    try {
        const userPet = await UserPetModel.find().populate('user').exec()

        res.json(userPet)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить питомцев',
        })
    }
}

export const getOne = async (req, res) => {
    try {

        const userPetId = req.params.id

        UserPetModel.findOneAndUpdate(
            {
                _id: userPetId
            },
            {},
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        message: 'Не удалось получить gbnjvwtd',
                    })
                }
                if (!doc) {
                    res.status(404).json({
                        message: 'Питомцы не найдены'
                    })
                }

                res.json(doc)
            }
        )

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить питомцев',
        })
    }
}

export const removeUserPet = async (req, res) => {
    try {

        const userPetId = req.params.id

        UserPetModel.findByIdAndDelete(
            {
                _id: userPetId
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

export const updateUserPet = async (req, res) => {
    try {

        const userPetId = req.params.id

        await UserPetModel.updateOne(
            {
                _id: userPetId
            },
            {
                petName:req.body.petName,
                petBreed:req.body.petBreed,
                agePet:req.body.agePet,
                petGender:req.body.petGender,
                petAvatarUrl:req.body.petAvatarUrl,
                procedures: req.body.procedures,
            }
        )
        res.json({
            success: true
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить информацию о питомце',
        })
    }
}

export const createUserPet = async (req,res)=>{
    try {

        const doc = new UserPetModel({
            petName:req.body.petName,
            petBreed:req.body.petBreed,
            agePet:req.body.agePet,
            petGender:req.body.petGender,
            petAvatarUrl:req.body.petAvatarUrl,
            petPersonalCard: req.body.petPersonalCard,
            procedures: req.body.procedures,
            user: req.userId
        })

        const userPet = await doc.save()

        res.json(userPet)

    }catch (err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать питомца',
        })
    }
}