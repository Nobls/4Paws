import mongoose from "mongoose";

/*const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        surName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        city: {
            type: String,
        },
        street: {
            type: String,
        },

        houseNumber:{
            type: String,

        },
        corpsHouse: {
            type: String,
        },
        apartmentNumber:{
            type: String,
        },
        userPhoneNumber: {
            type: String
        },
        avatarUrl: String,
    },
    {
        timestamps: true,

    }
);*/

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        surName: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        city: {
            type: String,
        },
        street: {
            type: String,
        },

        houseNumber: {
            type: String,

        },
        corpsHouse: {
            type: String,
        },
        apartmentNumber: {
            type: String,
        },
        userPhoneNumber: {
            type: String
        },
        avatarUrl: String,

        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],

        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Review'
            }
        ],

        /*comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]*/
    },
    {
        timestamps: true,

    }
);

export default mongoose.model('User', UserSchema)