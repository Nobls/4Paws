import ProductCardModel from "../models/ProductCard.js";
import ProductsForDogsModel from "../models/ProductsForDogs.js";


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
                    $push: {preservesForDogs: newProductCard._id}
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

export const getPreserves = async (req, res) => {
    try {
        const preserves = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            preserves.preservesForDogs.map((p)=>{
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

export const getHome = async (req, res) => {
    try {

        const Home = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Home.homeForDogs.map((p)=>{
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

export const getToys = async (req, res) => {
    try {

        const Toys = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Toys.toysForDogs.map((p)=>{
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

export const getCarrying = async (req, res) => {
    try {

        const Carrying = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Carrying.carryingForDogs.map((p)=>{
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

export const getCosmetics = async (req, res) => {
    try {

        const Cosmetics = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Cosmetics.cosmeticsForDogs.map((p)=>{
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

export const getClothes = async (req, res) => {
    try {

        const Clothes = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Clothes.clothesForDogs.map((p)=>{
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

export const getDishes = async (req, res) => {
    try {

        const Dishes = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Dishes.dishesForDogs.map((p)=>{
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

export const getAmmunition = async (req, res) => {
    try {

        const Ammunition = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Ammunition.ammunitionForDogs.map((p)=>{
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

export const getToilets = async (req, res) => {
    try {

        const Toilets = await ProductsForDogsModel.findById(req.params.id)
        const list = await Promise.all(
            Toilets.toiletsForDogs.map((p)=>{
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