import ProductCardModel from "../models/ProductCard.js";
import ProductsForRodentModel from "../models/productForRodents.js";

export const createDryFoodForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {dryFoodForRodents: newProductCard._id}
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

export const createVitaminsForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {vitaminsForRodents: newProductCard._id}
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

export const createAccessoriesForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {accessoriesForRodents: newProductCard._id}
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

export const createCellsForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {cellsForRodents: newProductCard._id}
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

export const createBathingForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {bathingForRodents: newProductCard._id}
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

export const createToysForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {toysForRodents: newProductCard._id}
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

export const createExtenderForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {extenderForRodents: newProductCard._id}
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

export const createDishesForRodents = async (req, res) => {

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
            await ProductsForRodentModel.updateOne(
                {
                    _id: productDogId
                },
                {
                    $push: {dishesForRodents: newProductCard._id}
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