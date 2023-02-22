import ProductCardModel from "../models/ProductCard.js";
import ProductsForFishModel from "../models/ProductForFish.js";
import * as net from "net";

export const createAquariums = async (req, res) => {

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

        const productFishId = req.params.id

        await ProductsForFishModel.updateOne(
            {
                _id: productFishId
            },
            {
                $push: {"aquariums.product": newProductCard._id}
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

export const createLivingInhabitants = async (req, res) => {

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

        const productFishId = req.params.id

        await ProductsForFishModel.updateOne(
            {
                _id: productFishId
            },
            {
                $push: {"livingInhabitants.product": newProductCard._id}
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

export const createAquariumsAndPedestals = async (req, res) => {

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

        const productFishId = req.params.id

        await ProductsForFishModel.updateOne(
            {
                _id: productFishId
            },
            {
                $push: {"aquariumsAndPedestals.product": newProductCard._id}
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

export const createFishFood = async (req, res) => {

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

        const productFishId = req.params.id

        await ProductsForFishModel.updateOne(
            {
                _id: productFishId
            },
            {
                $push: {"fishFood.product": newProductCard._id}
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

export const createDecorations = async (req, res) => {

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

        const productFishId = req.params.id

        await ProductsForFishModel.updateOne(
            {
                _id: productFishId
            },
            {
                $push: {"decorations.product": newProductCard._id}
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

export const createEquipment = async (req, res) => {

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

        const productFishId = req.params.id

        await ProductsForFishModel.updateOne(
            {
                _id: productFishId
            },
            {
                $push: {"equipment.product": newProductCard._id}
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


export const createChemistryForFish = async (req, res) => {

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

        const productFishId = req.params.id

        await ProductsForFishModel.updateOne(
            {
                _id: productFishId
            },
            {
                $push: {"chemistryAndMedicines.product": newProductCard._id}
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

export const getAquariums = async (req, res, next) => {
    try {
        const { aquariumId } = req.params;

        const productForFish = await ProductsForFishModel.findOne({
            "aquariums._id": aquariumId
        });

        if (!productForFish) {
            return res.status(404).json({ error: "Product for fish not found" });
        }

        const aquariumProducts = await Promise.all(
            productForFish.aquariums.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(aquariumProducts);
    } catch (error) {
        next(error)
    }
}

export const getLivingInhabitants = async (req, res, next) => {
    try {
        const { livingInhabitantsId } = req.params;

        const productForFish = await ProductsForFishModel.findOne({
            "livingInhabitants._id": livingInhabitantsId
        });

        if (!productForFish) {
            return res.status(404).json({ error: "Product for living inhabitants not found" });
        }

        const livingInhabitantsProducts = await Promise.all(
            productForFish.livingInhabitants.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(livingInhabitantsProducts);
    } catch (error) {
        next(error)
    }
}

export const getAquariumsAndPedestals = async (req, res, next) => {
    try {
        const { aquariumsAndPedestalsId } = req.params;

        const productForFish = await ProductsForFishModel.findOne({
            "aquariumsAndPedestals._id": aquariumsAndPedestalsId
        });

        if (!productForFish) {
            return res.status(404).json({ error: "Product for fish not found" });
        }

        const aquariumsAndPedestalsProducts = await Promise.all(
            productForFish.aquariumsAndPedestals.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(aquariumsAndPedestalsProducts);
    } catch (error) {
        next(error);
    }
}
