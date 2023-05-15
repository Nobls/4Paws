import mongoose from "mongoose";

const ProductForFishSchema = new mongoose.Schema(
    {

        aquariums: {

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
        livingInhabitants: {

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
        aquariumsAndPedestals: {

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
        fishFood: {

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
        decorations: {

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
        equipment: {

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
        chemistryAndMedicines: {

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
)

export default mongoose.model('ProductForFish', ProductForFishSchema)