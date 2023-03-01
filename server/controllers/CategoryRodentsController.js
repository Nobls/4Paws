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



export const getDryFoodForRodents = async (req, res, next) => {
    try {
        const {dryFoodForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "dryFoodForRodents._id": dryFoodForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const dryFoodForRodentsProducts = await Promise.all(
            productForRodents.dryFoodForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dryFoodForRodentsProducts);
    } catch (error) {
        next(error);
    }
}

export const getVitaminsForRodents = async (req, res, next) => {
    try {
        const {vitaminsForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "vitaminsForRodents._id": vitaminsForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const vitaminsForRodentsProducts = await Promise.all(
            productForRodents.vitaminsForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(vitaminsForRodentsProducts);
    } catch (error) {
        next(error);
    }
}


export const getAccessoriesForRodents = async (req, res, next) => {
    try {
        const {accessoriesForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "accessoriesForRodents._id": accessoriesForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const accessoriesForRodentsProducts = await Promise.all(
            productForRodents.accessoriesForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(accessoriesForRodentsProducts);
    } catch (error) {
        next(error);
    }
}


export const getCellsForRodents = async (req, res, next) => {
    try {
        const {cellsForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "cellsForRodents._id": cellsForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const cellsForRodentsProducts = await Promise.all(
            productForRodents.cellsForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(cellsForRodentsProducts);
    } catch (error) {
        next(error);
    }
}


export const getBathingForRodents = async (req, res, next) => {
    try {
        const {bathingForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "bathingForRodents._id": bathingForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const bathingForRodentsProducts = await Promise.all(
            productForRodents.bathingForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(bathingForRodentsProducts);
    } catch (error) {
        next(error);
    }
}


export const getToysForRodents = async (req, res, next) => {
    try {
        const {toysForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "toysForRodents._id": toysForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const toysForRodentsProducts = await Promise.all(
            productForRodents.toysForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toysForRodentsProducts);
    } catch (error) {
        next(error);
    }
}


export const getExtenderForRodents = async (req, res, next) => {
    try {
        const {extenderForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "extenderForRodents._id": extenderForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const extenderForRodentsProducts = await Promise.all(
            productForRodents.extenderForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(extenderForRodentsProducts);
    } catch (error) {
        next(error);
    }
}


export const getDishesForRodents = async (req, res, next) => {
    try {
        const {dishesForRodentsId} = req.params;

        const productForRodents = await ProductsForRodentModel.findOne({
            "dishesForRodents._id": dishesForRodentsId
        });

        if (!productForRodents) {
            return res.status(404).json({error: "Product for rodents not found"});
        }

        const dishesForRodentsProducts = await Promise.all(
            productForRodents.dishesForRodents.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dishesForRodentsProducts);
    } catch (error) {
        next(error);
    }
}