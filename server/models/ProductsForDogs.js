import mongoose from "mongoose";


const ProductsForDogsSchema = new mongoose.Schema (
    {
        dryFoodForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        preservesForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        vitaminsForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        homeForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        toysForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        carryingForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        cosmeticsForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        clothesForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        dishesForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        ammunitionForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        toiletsForDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
    }
);

export default mongoose.model('ProductsForDogs', ProductsForDogsSchema)