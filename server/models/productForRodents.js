import mongoose from "mongoose";


const ProductsForRodentsSchema = new mongoose.Schema(
    {
        dryFoodForRodents: {

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
        vitaminsForRodents: {

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
        accessoriesForRodents: {

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
        cellsForRodents: {

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
        bathingForRodents: {

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
        toysForRodents: {

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
        extenderForRodents: {

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
        dishesForRodents: {

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
    },
);

export default mongoose.model('ProductsForRodents', ProductsForRodentsSchema)