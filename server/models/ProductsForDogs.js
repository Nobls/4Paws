import mongoose from "mongoose";


const ProductsForDogsSchima = new mongoose.Schema (
    {
        dryFoodForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему сухих кормов для собак'
        },
        preservesForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему консервы для собак'
        },
        vitaminsForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему витамины для собак'
        },
        homeForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему домики для собак'
        },
        toysForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему игрушки для собак'
        },
        carryingForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему переноски для собак'
        },
        cosmeticsForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему косметика для собак'
        },
        clothesForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему одежда для собак'
        },
        dishesForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему посуда для собак'
        },
        ammunitionForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему амуниция для собак'
        },
        toiletsForDogs: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему туалеты для собак'
        }
    }
);

export default mongoose.model('ProductsForDogs', ProductsForDogsSchima)