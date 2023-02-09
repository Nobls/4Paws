import mongoose from "mongoose";

const ProductsForBirdSchema = new mongoose.Schema (
    {
        dryFoodForBirds: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему сухих кормов для птиц'
        },
        vitaminsForBirds: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему витамины для птиц'
        },
        birdcage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему домики для птиц'
        },
        bathForBirds: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему купалки для птиц'
        },
        toysForBirds: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему игрушки для птиц'
        },
        fillersAndPadsForBird: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему наполнители для птиц'
        },
        accessoriesForBird: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему аксессуары для птиц'
        },
        dishesForBird: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему посуда для птиц'
        },
    }
);

export default mongoose.model('ProductsForBird', ProductsForBirdSchema)