import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        review: {
            type: String,
            //required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        dateReview: Date,
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Review', ReviewSchema)