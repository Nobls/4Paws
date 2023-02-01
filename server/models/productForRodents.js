import mongoose from "mongoose";


const ProductsForRodentsSchema = new mongoose.Schema (
    {
        dryFoodForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему кормов для грызунов'
        },
        vitaminsForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему витамины для грызунов'
        },
        accessoriesForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему аксессуары для грызунов'
        },
        cellsForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему клетки для грызунов'
        },
        bathingForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему купалки для грызунов'
        },
        toysForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему игрушки для грызунов'
        },
        extenderForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему наполнители для грызунов'
        },
        dishesForRodents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ссылка на схему посуда для грызунов'
        },
    },
);

export default mongoose.model('ProductsForRodents', ProductsForRodentsSchema)