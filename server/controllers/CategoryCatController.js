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

        const productForCats = await ProductsForCatsModel.findOne({
            "dryFoodForCats._id": dryFoodForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const dryFoodForCatsProducts = await Promise.all(
            productForCats.dryFoodForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dryFoodForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryDryFoodForCatsById = async (req, res) => {
    const {dryFoodForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'dryFoodForCats._id': dryFoodForCatsId
        }).select('dryFoodForCats.category');

        if (product) {
            const category = product.dryFoodForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getPreservesForCats = async (req, res, next) => {
    try {
        const {preservesForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "preservesForCats._id": preservesForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const preservesForCatsProducts = await Promise.all(
            productForCats.preservesForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(preservesForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryPreservesForCatsById = async (req, res) => {
    const {preservesForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'preservesForCats._id': preservesForCatsId
        }).select('preservesForCats.category');

        if (product) {
            const category = product.preservesForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getVitaminsForCats = async (req, res, next) => {
    try {
        const {vitaminsForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "vitaminsForCats._id": vitaminsForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const vitaminsForCatsProducts = await Promise.all(
            productForCats.vitaminsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(vitaminsForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryVitaminsForCatsById = async (req, res) => {
    const {vitaminsForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'vitaminsForCats._id': vitaminsForCatsId
        }).select('vitaminsForCats.category');

        if (product) {
            const category = product.vitaminsForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getHomeForCats = async (req, res, next) => {
    try {
        const {homeForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "homeForCats._id": homeForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const homeForCatsProducts = await Promise.all(
            productForCats.homeForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(homeForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryHomeForCatsById = async (req, res) => {
    const {homeForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'homeForCats._id': homeForCatsId
        }).select('homeForCats.category');

        if (product) {
            const category = product.homeForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getToysForCats = async (req, res, next) => {
    try {
        const {toysForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "toysForCats._id": toysForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const toysForCatsProducts = await Promise.all(
            productForCats.toysForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toysForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryToysForCatsById = async (req, res) => {
    const {toysForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'toysForCats._id': toysForCatsId
        }).select('toysForCats.category');

        if (product) {
            const category = product.toysForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getCarryingForCats = async (req, res, next) => {
    try {
        const {carryingForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "carryingForCats._id": carryingForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const carryingForCatsProducts = await Promise.all(
            productForCats.carryingForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(carryingForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryCarryingForCatsById = async (req, res) => {
    const {carryingForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'carryingForCats._id': carryingForCatsId
        }).select('carryingForCats.category');

        if (product) {
            const category = product.carryingForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getCosmeticsForCats = async (req, res, next) => {
    try {
        const {cosmeticsForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "cosmeticsForCats._id": cosmeticsForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const cosmeticsForCatsProducts = await Promise.all(
            productForCats.cosmeticsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(cosmeticsForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryCosmeticsForCatsById = async (req, res) => {
    const {cosmeticsForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'cosmeticsForCats._id': cosmeticsForCatsId
        }).select('cosmeticsForCats.category');

        if (product) {
            const category = product.cosmeticsForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getScratchingPostsForCats = async (req, res, next) => {
    try {
        const {scratchingPostsForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "scratchingPostsForCats._id": scratchingPostsForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const scratchingPostsForCatsProducts = await Promise.all(
            productForCats.scratchingPostsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(scratchingPostsForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryScratchingPostsForCatsById = async (req, res) => {
    const {scratchingPostsForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'scratchingPostsForCats._id': scratchingPostsForCatsId
        }).select('scratchingPostsForCats.category');

        if (product) {
            const category = product.scratchingPostsForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getDishesForCats = async (req, res, next) => {
    try {
        const {dishesForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "dishesForCats._id": dishesForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const dishesForCatsProducts = await Promise.all(
            productForCats.dishesForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dishesForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryDishesForCatsById = async (req, res) => {
    const {dishesForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'dishesForCats._id': dishesForCatsId
        }).select('dishesForCats.category');

        if (product) {
            const category = product.dishesForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getAmmunitionForCats = async (req, res, next) => {
    try {
        const {ammunitionForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "ammunitionForCats._id": ammunitionForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const ammunitionForCatsProducts = await Promise.all(
            productForCats.ammunitionForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(ammunitionForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryAmmunitionForCatsById = async (req, res) => {
    const {ammunitionForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'ammunitionForCats._id': ammunitionForCatsId
        }).select('ammunitionForCats.category');

        if (product) {
            const category = product.ammunitionForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getToiletsForCats = async (req, res, next) => {
    try {
        const {toiletsForCatsId} = req.params;

        const productForCats = await ProductsForCatsModel.findOne({
            "toiletsForCats._id": toiletsForCatsId
        });

        if (!productForCats) {
            return res.status(404).json({error: "Product for cats not found"});
        }

        const toiletsForCatsProducts = await Promise.all(
            productForCats.toiletsForCats.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toiletsForCatsProducts);
    } catch (error) {
        next(error);
    }
}

export const getCategoryToiletsForCatsById = async (req, res) => {
    const {toiletsForCatsId} = req.params;

    try {
        const product = await ProductsForCatsModel.findOne({
            'toiletsForCats._id': toiletsForCatsId
        }).select('toiletsForCats.category');

        if (product) {
            const category = product.toiletsForCats.category;
            res.status(200).json({ category });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getAllCatCategory = async (req, res) => {
    try {
        const categoryCat = await ProductsForCatsModel.find().exec()

        const category = await Promise.all(
            categoryCat.map((p) => {
                return ProductsForCatsModel.findById(p);
            })
        );

        res.json(category)
    } catch (error) {
        console.log(error)
    }
}