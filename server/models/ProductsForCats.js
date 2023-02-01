import mongoose from "mongoose";


const ProductsForCatsSchema = new mongoose.Schema (
    {
        dryFoodForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему сухих кормов для котов'
        },
        preservesForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему консервы для котов'
        },
        vitaminsForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему витамины для котов'
        },
        homeForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему домики для котов'
        },
        toysForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему игрушки для котов'
        },
        carryingForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему переноски для котов'
        },
        cosmeticsForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему косметика для котов'
        },
        scratchingPostsForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему когтеточки для котов'
        },
        dishesForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему посуда для котов'
        },
        ammunitionForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему амуниция для котов'
        },
        toiletsForCats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему туалеты для котов'
        }
    }
);

export default mongoose.model('ProductsForCats', ProductsForCatsSchema)