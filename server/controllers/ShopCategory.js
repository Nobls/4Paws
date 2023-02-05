import ProductsForDogsModel from "../models/ProductsForDogs.js";
import ProductsForCatsModel from "../models/ProductsForCats.js";

export const createDogCategory = async (req, res) => {
    try {

        const doc = new ProductsForDogsModel({
            dryFoodForDogs: req.body.dryFoodForDogs,
            preservesForDogs: req.body.preservesForDogs,
            vitaminsForDogs: req.body.vitaminsForDogs,
            homeForDogs: req.body.homeForDogs,
            toysForDogs: req.body.toysForDogs,
            carryingForDogs: req.body.carryingForDogs,
            cosmeticsForDogs: req.body.cosmeticsForDogs,
            clothesForDogs: req.body.clothesForDogs,
            dishesForDogs: req.body.dishesForDogs,
            ammunitionForDogs: req.body.ammunitionForDogs,
            toiletsForDogs: req.body.toiletsForDogs
        })

        const dogCategory = await doc.save()

        res.json(dogCategory)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}

export const createCatCategory = async (req, res) => {
    try {

        const doc = new ProductsForCatsModel({
            dryFoodForCats: req.body.dryFoodForCats,
            preservesForCats: req.body.preservesForCats,
            vitaminsForCats: req.body.vitaminsForCats,
            homeForCats: req.body.homeForCats,
            toysForCats: req.body.toysForCats,
            carryingForCats: req.body.carryingForCats,
            cosmeticsForCats: req.body.cosmeticsForCats,
            scratchingPostsForCats: req.body.scratchingPostsForCats,
            dishesForCats: req.body.dishesForCats,
            ammunitionForCats: req.body.ammunitionForCats,
            toiletsForCats: req.body.toiletsForCats
        })

        const catCategory = await doc.save()

        res.json(catCategory)

    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось создать категорию'
        })
    }
}