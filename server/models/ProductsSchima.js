import mongoose from "mongoose";


/*const ProductsSchema = new mongoose.Schema (
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
);*/

const ProductsSchema = new mongoose.Schema(
    {
        productDogs: {
            dryFoodForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            preservesForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            vitaminsForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            homeForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            toysForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            carryingForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            cosmeticsForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            clothesForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            dishesForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            ammunitionForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],
            toiletsForDogs: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard'
                }
            ],

        },
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

export default mongoose.model('Products', ProductsSchema);