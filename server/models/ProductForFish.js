import mongoose from "mongoose";

const ProductForFishSchema = new mongoose.Schema(
    {
        aquariums: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        livingInhabitants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        AquariumsAndPedestals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        fishFood: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        decorations: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        equipment: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],
        ChemistryAndMedicines: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductCard'
            }
        ],

    }
)

export default mongoose.model('ProductForFish', ProductForFishSchema)