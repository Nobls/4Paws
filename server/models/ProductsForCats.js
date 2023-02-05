import mongoose from "mongoose";


const ProductsForCatsSchema = new mongoose.Schema(
    {
        dryFoodForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        preservesForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        vitaminsForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],

        //добавить наполнители

        homeForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        toysForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        carryingForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        cosmeticsForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        scratchingPostsForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        dishesForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        ammunitionForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        toiletsForCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
    }
);

export default mongoose.model('ProductsForCats', ProductsForCatsSchema)