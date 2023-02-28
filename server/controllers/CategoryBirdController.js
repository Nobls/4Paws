import ProductCardModel from "../models/ProductCard.js";
import ProductsForBirdModel from "../models/ProductForBird.js";
import ProductsForCatsModel from "../models/ProductsForCats.js";


export const dryFoodForBirds = async (req, res) => {
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

        await ProductsForBirdModel.updateOne(
            {
                _id: productCatId
            },
            {
                $push: {"dryFoodForBirds.product": newProductCard._id}
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

export const vitaminsForBirds = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {"vitaminsForBirds.product": newProductCard._id}
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

export const birdcage = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {"birdcage.product": newProductCard._id}
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

export const bathForBirds = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {"bathForBirds.product": newProductCard._id}
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

export const toysForBirds = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {"toysForBirds.product": newProductCard._id}
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

export const fillersAndPadsForBird = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {"fillersAndPadsForBird.product": newProductCard._id}
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

export const accessoriesForBird = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {"accessoriesForBird.product": newProductCard._id}
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

export const dishesForBird = async (req, res) => {
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
            await ProductsForBirdModel.updateOne(
                {
                    _id: productCatId
                },
                {
                    $push: {"dishesForBird.product": newProductCard._id}
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

export const getDryFoodForBirds = async (req, res, next) => {
    try {
        const {dryFoodForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "dryFoodForBirds._id": dryFoodForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const dryFoodForBirdsProducts = await Promise.all(
            productForBirds.dryFoodForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dryFoodForBirdsProducts);
    } catch (error) {
        next(error);
    }
}

export const getVitaminsForBirds = async (req, res, next) => {
    try {
        const {vitaminsForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "vitaminsForBirds._id": vitaminsForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const vitaminsForBirdsProducts = await Promise.all(
            productForBirds.vitaminsForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(vitaminsForBirdsProducts);
    } catch (error) {
        next(error);
    }
}

export const getBirdcage = async (req, res, next) => {
    try {
        const {birdcageForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "birdcageForBirds._id": birdcageForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const birdcageProducts = await Promise.all(
            productForBirds.birdcageForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(birdcageProducts);
    } catch (error) {
        next(error);
    }
}

export const getBathForBirds = async (req, res, next) => {
    try {
        const {bathForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "bathForBirds._id": bathForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const bathForBirdsProducts = await Promise.all(
            productForBirds.birdcageForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(bathForBirdsProducts);
    } catch (error) {
        next(error);
    }
}

export const getToysForBirds = async (req, res, next) => {
    try {
        const {toysForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "toysForBirds._id": toysForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const toysForBirdsProducts = await Promise.all(
            productForBirds.toysForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(toysForBirdsProducts);
    } catch (error) {
        next(error);
    }
}

export const getFillersAndPadsForBird = async (req, res, next) => {
    try {
        const {fillersAndPadsForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "fillersAndPadsForBirds._id": fillersAndPadsForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const fillersAndPadsForBirdsProducts = await Promise.all(
            productForBirds.fillersAndPadsForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(fillersAndPadsForBirdsProducts);
    } catch (error) {
        next(error);
    }
}

export const getAccessoriesForBird = async (req, res, next) => {
    try {
        const {accessoriesForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "accessoriesForBirds._id": accessoriesForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const accessoriesForBirdsProducts = await Promise.all(
            productForBirds.accessoriesForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(accessoriesForBirdsProducts);
    } catch (error) {
        next(error);
    }
}

export const getDishesForBird = async (req, res, next) => {
    try {
        const {dishesForBirdsId} = req.params;

        const productForBirds = await ProductsForBirdModel.findOne({
            "dishesForBirds._id": dishesForBirdsId
        });

        if (!productForBirds) {
            return res.status(404).json({error: "Product for bird not found"});
        }

        const dishesForBirdsProducts = await Promise.all(
            productForBirds.dishesForBirds.product.map((p) => {
                return ProductCardModel.findById(p);
            })
        );

        res.status(200).json(dishesForBirdsProducts);
    } catch (error) {
        next(error);
    }
}