import mongoose from "mongoose";


const ProductCardSchema = new mongoose.Schema(
    {
        title: String,
        productImage: String,
        weight: String,
        quantity: String,
        category: String,
        countryOfManufacture: String,
        description: String,
        price: Number,
        brand: String,
        tags: String,
    },
    {
        timestamps: true
    }
)

export default mongoose.model('ProductCard', ProductCardSchema)