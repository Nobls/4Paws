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

export const getChemistryAndMedicines = async (req, res, next) => {
    try {
        const { chemistryAndMedicinesId } = req.params;

        const productForFish = await ProductsForFishModel.findOne({
            "chemistryAndMedicines._id": chemistryAndMedicinesId
        });

        if (!productForFish) {
            return res.status(404).json({ error: "Product for fish not found" });
        }

        const chemistryAndMedicinesProducts = await Promise.all(
            productForFish.chemistryAndMedicines.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(chemistryAndMedicinesProducts);
    } catch (error) {
        next(error);
    }
}

export const getFishFood = async (req, res, next) => {
    try {
        const { fishFoodId } = req.params;

        const productForFish = await ProductsForFishModel.findOne({
            "fishFood._id": fishFoodId
        });

        if (!productForFish) {
            return res.status(404).json({ error: "Product for fish not found" });
        }

        const fishFoodProducts = await Promise.all(
            productForFish.fishFood.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(fishFoodProducts);
    } catch (error) {
        next(error);
    }
}

export const getDecorations = async (req, res, next) => {
    try {
        const { decorationsId } = req.params;

        const productForFish = await ProductsForFishModel.findOne({
            "decorations._id": decorationsId
        });

        if (!productForFish) {
            return res.status(404).json({ error: "Product for fish not found" });
        }

        const decorationsProducts = await Promise.all(
            productForFish.decorations.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(decorationsProducts);
    } catch (error) {
        next(error);
    }
}

export const getEquipment = async (req, res, next) => {
    try {
        const { equipmentId } = req.params;

        const productForFish = await ProductsForFishModel.findOne({
            "equipment._id": equipmentId
        });

        if (!productForFish) {
            return res.status(404).json({ error: "Product for fish not found" });
        }

        const equipmentProducts = await Promise.all(
            productForFish.equipment.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(equipmentProducts);
    } catch (error) {
        next(error);
    }
}