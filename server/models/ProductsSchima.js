import mongoose from "mongoose";


const ProductsSchima = new mongoose.Schema (
    {
        productDogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductsForDogs',
            }
        ],
        productCats: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ProductsForCats',
            }
        ],
        productBirds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ссылка на схему ВсёДляПтиц',
            }
        ],
        productRodents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ссылка на схему ВсёДляГрызунов',
            }
        ],
        productFish: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ссылка на схему ВсёДляРыб',
            }
        ]
    }
);

export default mongoose.model('Products', ProductsSchima);