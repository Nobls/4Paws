import mongoose from "mongoose";


const ProductCardSchema = new mongoose.Schema(
    {
        title: String,
        productImage: String,
        weight: String,
        type: String,
        countryOfManufacture: String,
        description: String,
        price: Number,
    }
)

export default mongoose.model('ProductCard', ProductCardSchema)