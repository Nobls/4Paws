import mongoose from "mongoose";


const ProductCardSchema = new mongoose.Schema(
    {
        title: {type: String},
        productImage: {type: String},
        weight: {type: String},
        size: {type: String},
        type: {type: String},
        countryOfManufacture: {type: String},
        description: {type: String},
        price: {type: Number},
    },
    {
            timestamps: true
    }

)

export default mongoose.model('ProductCard', ProductCardSchema)