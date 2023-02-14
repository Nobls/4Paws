import ProductCardModel from "../models/ProductCard.js";
import ProductsForCatsModel from "../models/ProductsForCats.js";
import ProductsForDogsModel from "../models/ProductsForDogs.js";


export const dryFoodForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
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

export const preservesForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
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

export const vitaminsForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {vitaminsForCats: newProductCard._id}
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

export const homeForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {homeForCats: newProductCard._id}
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

export const toysForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {toysForCats: newProductCard._id}
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

export const carryingForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {carryingForCats: newProductCard._id}
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

export const cosmeticsForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {cosmeticsForCats: newProductCard._id}
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

export const scratchingPostsForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {scratchingPostsForCats: newProductCard._id}
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

export const dishesForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {dishesForCats: newProductCard._id}
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

export const ammunitionForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {ammunitionForCats: newProductCard._id}
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

export const toiletsForCats = async (req, res) => {
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
            const productCatId = req.params.id
            await ProductsForCatsModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {toiletsForCats: newProductCard._id}
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

export const getDryFoodForCats = async (req, res) => {
    try {

        const dryFood = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            dryFood.dryFoodForCats.map((p)=>{
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

export const getPreservesForCats = async (req, res) => {
    try {

        const preserves = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            preserves.preservesForCats.map((p)=>{
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

export const getVitaminsForCats = async (req, res) => {
    try {

        const vitamins = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            vitamins.vitaminsForCats.map((p)=>{
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

export const getHomeForCats = async (req, res) => {
    try {

        const homeCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            homeCats.homeForCats.map((p)=>{
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

export const getToysForCats = async (req, res) => {
    try {

        const toysCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            toysCats.toysForCats.map((p)=>{
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

export const getCarryingForCats = async (req, res) => {
    try {

        const carryingCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            carryingCats.carryingForCats.map((p)=>{
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

export const getCosmeticsForCats = async (req, res) => {
    try {

        const cosmeticsCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            cosmeticsCats.cosmeticsForCats.map((p)=>{
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

export const getScratchingPostsForCats = async (req, res) => {
    try {

        const scratchingPostsCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            scratchingPostsCats.scratchingPostsForCats.map((p)=>{
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

export const getDishesForCats = async (req, res) => {
    try {

        const dishesCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            dishesCats.dishesForCats.map((p)=>{
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

export const getAmmunitionForCats = async (req, res) => {
    try {

        const ammunitionCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            ammunitionCats.ammunitionForCats.map((p)=>{
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

export const getToiletsForCats = async (req, res) => {
    try {

        const toiletsCats = await ProductsForCatsModel.findById(req.params.id)
        const list = await Promise.all(
            toiletsCats.toiletsForCats.map((p)=>{
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