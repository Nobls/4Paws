import ProductCardModel from "../models/ProductCard.js";
import ProductsForDogsModel from "../models/ProductsForDogs.js";


export const createDryFood = async (req, res) => {
    try {
        const newProductCard = await ProductCardModel.create({
            title: req.body.title,
            productImage: req.body.productImage,
            weight: req.body.weight,
            quantity: req.body.quantity,
            category: req.body.category,
            countryOfManufacture: req.body.countryOfManufacture,
            description: req.body.description,
            price: req.body.price,
            brand: req.body.brand,
            type: req.body.type,
            tags: req.body.tags,
        })

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"dryFoodForDogs.product": newProductCard._id}
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

export const preservesForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"preservesForDogs.product": newProductCard._id}
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

export const vitaminsForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"vitaminsForDogs.product": newProductCard._id}
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

export const homeForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"homeForDogs.product": newProductCard._id}
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

export const toysForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"toysForDogs.product": newProductCard._id}
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

export const carryingForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"carryingForDogs.product": newProductCard._id}
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

export const cosmeticsForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"cosmeticsForDogs.product": newProductCard._id}
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

export const clothesForDogs = async (req, res) => {
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


        const productDogId = req.params.id

        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"clothesForDogs.product": newProductCard._id}
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

export const dishesForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"dishesForDogs.product": newProductCard._id}
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

export const ammunitionForDogs = async (req, res) => {
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

        const productDogId = req.params.id
        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"ammunitionForDogs.product": newProductCard._id}
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

export const toiletsForDogs = async (req, res) => {
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

        const productDogId = req.params.id

        await ProductsForDogsModel.updateOne(
            {
                _id: productDogId
            },
            {
                $push: {"toiletsForDogs.product": newProductCard._id}
            }
        )

        res.json(newProductCard)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось получить информацию'
        })
    }
}

export const getDryFood = async (req, res, next) => {
    try {
        const {dryFoodDogId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "dryFoodForDogs._id": dryFoodDogId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const dryFoodForDogsProducts = await Promise.all(
            productForDogs.dryFoodForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dryFoodForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryDryFoodById = async (req, res) => {
    const {dryFoodDogId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'dryFoodForDogs._id': dryFoodDogId
        }).select('dryFoodForDogs.category');

        if (product) {
            const category = product.dryFoodForDogs.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getPreserves = async (req, res, next) => {
    try {
        const {preservesForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "preservesForDogs._id": preservesForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const preservesForDogsProducts = await Promise.all(
            productForDogs.preservesForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(preservesForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryPreservesById = async (req, res) => {
    const {preservesForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'preservesForDogsId._id': preservesForDogsId
        }).select('preservesForDogs.category');

        if (product) {
            const category = product.preservesForDogs.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getVitamins = async (req, res, next) => {
    try {
        const {vitaminsForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "vitaminsForDogs._id": vitaminsForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const vitaminsForDogsProducts = await Promise.all(
            productForDogs.vitaminsForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(vitaminsForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryVitaminsById = async (req, res) => {
    const {vitaminsForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'vitaminsForDogsId._id': vitaminsForDogsId
        }).select('vitaminsForDogs.category');

        if (product) {
            const category = product.vitaminsForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getHome = async (req, res, next) => {
    try {
        const {homeForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "homeForDogs._id": homeForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const homeForDogsProducts = await Promise.all(
            productForDogs.homeForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(homeForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryHomeById = async (req, res) => {
    const {homeForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'homeForDogsId._id': homeForDogsId
        }).select('homeForDogs.category');

        if (product) {
            const category = product.homeForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getToys = async (req, res, next) => {
    try {
        const {toysForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "toysForDogs._id": toysForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const toysForDogsProducts = await Promise.all(
            productForDogs.toysForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toysForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryToysById = async (req, res) => {
    const {toysForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'toysForDogsId._id': toysForDogsId
        }).select('toysForDogs.category');

        if (product) {
            const category = product.toysForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getCarrying = async (req, res, next) => {
    try {
        const {carryingForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "carryingForDogs._id": carryingForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const carryingForDogsProducts = await Promise.all(
            productForDogs.carryingForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(carryingForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryCarryingById = async (req, res) => {
    const {carryingForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'carryingForDogs._id': carryingForDogsId
        }).select('carryingForDogs.category');

        if (product) {
            const category = product.carryingForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getCosmetics = async (req, res, next) => {
    try {
        const {cosmeticsForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "cosmeticsForDogs._id": cosmeticsForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const cosmeticsForDogsProducts = await Promise.all(
            productForDogs.cosmeticsForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(cosmeticsForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryCosmeticsById = async (req, res) => {
    const {cosmeticsForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'cosmeticsForDogs._id': cosmeticsForDogsId
        }).select('cosmeticsForDogs.category');

        if (product) {
            const category = product.cosmeticsForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getClothes = async (req, res, next) => {
    try {
        const {clothesForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "clothesForDogs._id": clothesForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const clothesForDogsProducts = await Promise.all(
            productForDogs.clothesForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(clothesForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryClothesById = async (req, res) => {
    const {clothesForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'clothesForDogs._id': clothesForDogsId
        }).select('clothesForDogs.category');

        if (product) {
            const category = product.clothesForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}


export const getDishes = async (req, res, next) => {
    try {
        const {dishesForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "dishesForDogs._id": dishesForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const dishesForDogsProducts = await Promise.all(
            productForDogs.dishesForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dishesForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryDishesById = async (req, res) => {
    const {dishesForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'dishesForDogs._id': dishesForDogsId
        }).select('dishesForDogs.category');

        if (product) {
            const category = product.dishesForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getAmmunition = async (req, res, next) => {
    try {
        const {ammunitionForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "ammunitionForDogs._id": ammunitionForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const ammunitionForDogsProducts = await Promise.all(
            productForDogs.ammunitionForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(ammunitionForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryAmmunitionById = async (req, res) => {
    const {ammunitionForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'ammunitionForDogs._id': ammunitionForDogsId
        }).select('ammunitionForDogs.category');

        if (product) {
            const category = product.ammunitionForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getToilets = async (req, res, next) => {
    try {
        const {toiletsForDogsId} = req.params;

        const productForDogs = await ProductsForDogsModel.findOne({
            "toiletsForDogs._id": toiletsForDogsId
        });

        if (!productForDogs) {
            return res.status(404).json({error: "Product for dogs not found"});
        }

        const toiletsForDogsProducts = await Promise.all(
            productForDogs.toiletsForDogs.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toiletsForDogsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryToiletsById = async (req, res) => {
    const {toiletsForDogsId} = req.params;

    try {
        const product = await ProductsForDogsModel.findOne({
            'toiletsForDogs._id': toiletsForDogsId
        }).select('toiletsForDogs.category');

        if (product) {
            const category = product.toiletsForDogs.category;
            res.status(200).json({ category });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json ({ message: 'Server error' });
    }
}

export const getAllDogCategory = async (req, res) => {
    try {
        const categoryDog = await ProductsForDogsModel.find().exec()

        const category = await Promise.all(
            categoryDog.map((p) => {
                return ProductsForDogsModel.findById(p);
            })
        );

        res.json(category)
    } catch (error) {
        console.log(error)
    }
}

export const getOneProduct = async (req, res) => {
    const productId  = req.params.id
    try {
        const product = await ProductCardModel.findById(productId)
        if (!product) {
            return res.status(404).json({ error: 'Продукт не найден' })
        }
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ error: 'Server Error' })
    }
}