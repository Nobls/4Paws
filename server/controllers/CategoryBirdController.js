import ProductCardModel from "../models/ProductCard.js";
import ProductsForBirdModel from "../models/ProductForBird.js";


export const dryFoodForBirds = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {dryFoodForBirds: newProductCard._id}
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

export const vitaminsForBirds = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {vitaminsForBirds: newProductCard._id}
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

export const birdcage = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {birdcage: newProductCard._id}
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

export const bathForBirds = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {bathForBirds: newProductCard._id}
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

export const toysForBirds = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {toysForBirds: newProductCard._id}
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

export const fillersAndPadsForBird = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {fillersAndPadsForBird: newProductCard._id}
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

export const accessoriesForBird = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {accessoriesForBird: newProductCard._id}
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

export const dishesForBird = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {dishesForBird: newProductCard._id}
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

export const getDryFoodForBirds = async (req, res) => {
    try {

        const dryFood = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            dryFood.dryFoodForBirds.map((p)=>{
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

export const getVitaminsForBirds = async (req, res) => {
    try {

        const vitamins = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            vitamins.vitaminsForBirds.map((p)=>{
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

export const getBirdcage = async (req, res) => {
    try {

        const birdcage = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            birdcage.birdcageForBirds.map((p)=>{
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

export const getBathForBirds = async (req, res) => {
    try {

        const bathForBirds = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            bathForBirds.bathForBirds.map((p)=>{
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

export const getToysForBirds = async (req, res) => {
    try {

        const toysForBirds = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            toysForBirds.toysForBirds.map((p)=>{
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

export const getFillersAndPadsForBird = async (req, res) => {
    try {

        const fillersAndPadsForBird = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            fillersAndPadsForBird.fillersAndPadsForBird.map((p)=>{
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

export const getAccessoriesForBird = async (req, res) => {
    try {

        const accessoriesForBird = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            accessoriesForBird.accessoriesForBird.map((p)=>{
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

export const getDishesForBird = async (req, res) => {
    try {

        const dishesForBird = await ProductsForBirdModel.findById(req.params.id)
        const list = await Promise.all(
            dishesForBird.dishesForBird.map((p)=>{
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