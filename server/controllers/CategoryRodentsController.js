import ProductCardModel from "../models/ProductCard.js";
import ProductsForRodentModel from "../models/productForRodents.js";


export const createDryFoodForRodents = async (req, res) => {

    try {

        const newProductCard = await ProductCardModel.create({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

            const dryFoodForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: dryFoodForRodentsId
                },
                {
                    $push: {"dryFoodForRodents.product": newProductCard._id}
                }
            )

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

        const newProductCard = await ProductCardModel.create({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

        try {
            const vitaminsForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: vitaminsForRodentsId
                },
                {
                    $push: {"vitaminsForRodents.product": newProductCard._id}
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

        const newProductCard = await ProductCardModel.create({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

            const accessoriesForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: accessoriesForRodentsId
                },
                {
                    $push: {"accessoriesForRodents.product": newProductCard._id}
                }
            )

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

        const newProductCard = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

            const cellsForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: cellsForRodentsId
                },
                {
                    $push: {"cellsForRodents.product": newProductCard._id}
                }
            )

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

        const newProductCard = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

            const bathingForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: bathingForRodentsId
                },
                {
                    $push: {"bathingForRodents.product": newProductCard._id}
                }
            )

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

        const newProductCard = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

            const toysForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: toysForRodentsId
                },
                {
                    $push: {"toysForRodents.product": newProductCard._id}
                }
            )

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

        const newProductCard = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

            const extenderForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: extenderForRodentsId
                },
                {
                    $push: {"extenderForRodents.product": newProductCard._id}
                }
            )

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

        const newProductCard = new ProductCardModel({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            size: req.body.size,
            type: req.body.type,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
        })

            const dishesForRodentsId = req.params.id
            await ProductsForRodentModel.updateOne(
                {
                    _id: dishesForRodentsId
                },
                {
                    $push: {"dishesForRodents.product": newProductCard._id}
                }
            )

        res.json(newProductCard)

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать процедуру',
        })
    }
}