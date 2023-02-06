import mongoose from "mongoose";


const ProductCardSchema = new mongoose.Schema(
    {
        title: String,
        productImage: String,
        weight: String,
        size: String,
        type: String,
        countryOfManufacture: String,
        description: String,
        price: Number,
    },
    {
            timestamps: true
    }

)

export default mongoose.model('ProductCard', ProductCardSchema)