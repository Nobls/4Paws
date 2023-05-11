import mongoose from "mongoose";


const ProductsForCatsSchema = new mongoose.Schema(
    {
        dryFoodForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        preservesForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        vitaminsForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },

        homeForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        toysForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        carryingForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        cosmeticsForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        scratchingPostsForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        dishesForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        ammunitionForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        toiletsForCats: {

            _id: {
                type: mongoose.Schema.Types.ObjectId
            },

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
    }
);

export default mongoose.model('ProductsForCats', ProductsForCatsSchema)