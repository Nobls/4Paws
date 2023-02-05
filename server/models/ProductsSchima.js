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
                    ref: 'ProductCard',
                }
            ],
            preservesForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            vitaminsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            fillerForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            homeForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            toysForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            carryingForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            cosmeticsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            scratchingPostsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            dishesForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            ammunitionForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            toiletsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
        },

        productBird: {
            dryFoodForBirds: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            vitaminsForBirds: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            birdcage: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            bathForBirds: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            toysForBirds: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            fillersAndPadsForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            accessoriesForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            dishesForCats: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
        },

        productRodents: {
            dryFoodForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            vitaminsForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            accessoriesForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            cellsForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            bathingForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            toysForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            extenderForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            dishesForRodents: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
        },

        productFish: {
            aquariumForFish: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            liveFish: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            foodForFish: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            decorForFish: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            equipmentForFish: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
            chemistryForFish: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'ProductCard',
                }
            ],
        },

    }
);

export default mongoose.model('Products', ProductsSchema);