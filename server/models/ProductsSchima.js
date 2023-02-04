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

        productCats: {
            dryFoodForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            preservesForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            vitaminsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            fillerForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            homeForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            toysForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            carryingForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            cosmeticsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            scratchingPostsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            dishesForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            ammunitionForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
            toiletsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductsForCats',
                }
            ],
        },













        preservesForCats111: [
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