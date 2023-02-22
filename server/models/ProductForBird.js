import mongoose from "mongoose";

const ProductsForBirdSchema = new mongoose.Schema (
    {
        dryFoodForBirds: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

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

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        fillersAndPadsForBird: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        accessoriesForBird: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
            },

            product: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ]
        },
        dishesForBird: {

            _id: {
                type:  mongoose.Schema.Types.ObjectId
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

export default mongoose.model('ProductsForBird', ProductsForBirdSchema)