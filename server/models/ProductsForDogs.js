import mongoose from "mongoose";


const ProductsForDogsSchema = new mongoose.Schema (
    {
        dryFoodForDogs:{

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        preservesForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        vitaminsForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        homeForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        toysForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        carryingForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        cosmeticsForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        clothesForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        dishesForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        ammunitionForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        toiletsForDogs: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            category: String,

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
    }
);

export default mongoose.model('ProductsForDogs', ProductsForDogsSchema)