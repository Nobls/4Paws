import ProductCardModel from "../models/ProductCard.js";
import ProductsForCatsModel from "../models/ProductsForCats.js";


export const dryFoodForCats = async (req, res) => {

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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"dryFoodForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const preservesForCats = async (req, res) => {
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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"preservesForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const vitaminsForCats = async (req, res) => {
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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"vitaminsForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const homeForCats = async (req, res) => {
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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"homeForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const toysForCats = async (req, res) => {
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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"toysForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const carryingForCats = async (req, res) => {
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


        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"carryingForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const cosmeticsForCats = async (req, res) => {
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


        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"cosmeticsForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const scratchingPostsForCats = async (req, res) => {
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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"scratchingPostsForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const dishesForCats = async (req, res) => {
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

        const productCatId = req.params.id
        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"dishesForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const ammunitionForCats = async (req, res) => {
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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"ammunitionForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const toiletsForCats = async (req, res) => {
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

        const productCatId = req.params.id

        await ProductsForCatsModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"toiletsForCats.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const getDryFoodForCats = async (req, res, next) => {
    try {
        const {dryFoodForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "dryFoodForCats._id": dryFoodForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const dryFoodForCatsProducts = await Promise.all(
            productForFish.dryFoodForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dryFoodForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getPreservesForCats = async (req, res, next) => {
    try {
        const {preservesForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "preservesForCats._id": preservesForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const preservesForCatsProducts = await Promise.all(
            productForFish.preservesForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(preservesForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getVitaminsForCats = async (req, res, next) => {
    try {
        const {vitaminsForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "vitaminsForCats._id": vitaminsForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const vitaminsForCatsProducts = await Promise.all(
            productForFish.vitaminsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(vitaminsForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getHomeForCats = async (req, res, next) => {
    try {
        const {homeForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "homeForCats._id": homeForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const homeForCatsProducts = await Promise.all(
            productForFish.homeForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(homeForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getToysForCats = async (req, res, next) => {
    try {
        const {toysForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "toysForCats._id": toysForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const toysForCatsProducts = await Promise.all(
            productForFish.toysForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toysForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCarryingForCats = async (req, res, next) => {
    try {
        const {carryingForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "carryingForCats._id": carryingForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const carryingForCatsProducts = await Promise.all(
            productForFish.carryingForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(carryingForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCosmeticsForCats = async (req, res, next) => {
    try {
        const {cosmeticsForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "cosmeticsForCats._id": cosmeticsForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const cosmeticsForCatsProducts = await Promise.all(
            productForFish.cosmeticsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(cosmeticsForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getScratchingPostsForCats = async (req, res, next) => {
    try {
        const {scratchingPostsForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "scratchingPostsForCats._id": scratchingPostsForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const scratchingPostsForCatsProducts = await Promise.all(
            productForFish.scratchingPostsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(scratchingPostsForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getDishesForCats = async (req, res, next) => {
    try {
        const {dishesForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "dishesForCats._id": dishesForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const dishesForCatsProducts = await Promise.all(
            productForFish.dishesForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dishesForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getAmmunitionForCats = async (req, res, next) => {
    try {
        const {ammunitionForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "ammunitionForCats._id": ammunitionForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const ammunitionForCatsProducts = await Promise.all(
            productForFish.ammunitionForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(ammunitionForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getToiletsForCats = async (req, res, next) => {
    try {
        const {toiletsForCatsId} = req.params;

        const productForFish = await ProductsForCatsModel.findOne({
            "toiletsForCats._id": toiletsForCatsId
        });

        if (!productForFish) {
            return res.status(404).json({error: "Product for fish not found"});
        }

        const toiletsForCatsProducts = await Promise.all(
            productForFish.toiletsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toiletsForCatsProducts);
    } catch (error) {
        next(error);
    }
}