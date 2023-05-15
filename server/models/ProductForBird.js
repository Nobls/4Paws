import mongoose from "mongoose";

const ProductsForBirdSchema = new mongoose.Schema (
    {
        dryFoodForBirds: {

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
        vitaminsForBirds: {

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
        birdcageForBirds: {

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
        bathForBirds: {

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
        toysForBirds: {

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
        fillersAndPadsForBirds: {

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
        accessoriesForBirds: {

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
        dishesForBirds: {

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

export default mongoose.model('ProductsForBird', ProductsForBirdSchema)