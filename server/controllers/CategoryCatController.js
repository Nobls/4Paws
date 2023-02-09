import ProductCardModel from "../models/ProductCard.js";
import ProductsForCatsModel from "../models/ProductsForCats.js";


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