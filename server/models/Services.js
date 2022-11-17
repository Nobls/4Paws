import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        descriptionModal: {
            type: String,
            required: true
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        imageUrl: String,
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Services', ServicesSchema)