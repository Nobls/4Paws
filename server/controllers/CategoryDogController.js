import ProductCardModel from "../models/ProductCard.js";
import ProductsForDogsModel from "../models/ProductsForDogs.js";
import UserPetModel from "../models/UserPet.js";
import PetProceduresModel from "../models/PetProcedures.js";

export const createDryFood = async (req, res) => {

    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {dryFoodForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать процедуру',
        })
    }
}

/*export const createDryFood = async (req, res) => {
    try {

        const doc = new CardProductModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}*/

export const preservesForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {preservesForCats: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const vitaminsForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {vitaminsForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const homeForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {homeForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const toysForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {toysForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const carryingForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {carryingForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const cosmeticsForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {cosmeticsForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const clothesForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {clothesForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const dishesForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {dishesForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const ammunitionForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {ammunitionForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const toiletsForDogs = async (req, res) => {
    try {

        const doc = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        const newProductCard = await doc.save()

        try {
            const productDogId = req.params.id
            await ProductsForDogsModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {toiletsForDogs: newProductCard._id}
                }
            )
        } catch (error) {
            console.log(error)
        }

        res.json(newProductCard)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось получить информацию'
        })
    }
}

export const getDryFood = async (req, res) => {
    try {

        const dryFood = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            dryFood.dryFoodForDogs.map((p)=>{
                return ProductCardModel.findById(p)
            })
        )
        res.json(list)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить информацию!',
        })
    }
}

export const getVitamins = async (req, res) => {
    try {

        const dryFood = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            dryFood.vitaminsForDogs.map((p)=>{
                return ProductCardModel.findById(p)
            })
        )
        res.json(list)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить информацию',
        })
    }
}