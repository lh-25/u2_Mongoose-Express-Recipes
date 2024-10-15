const { Schema } = require('mongoose')

const Recipe = new Schema(
    {
        name: { type: String, required: true },
        cuisineType: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
        prepTime: { type: Number, required: true },
        cookTime: { type: Number, required: true },
        imageUrl: { type: String, required: true },
        servings: { type: Number, required: true },
        difficulty: { type: String, required: true },
        ingredients: [{
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true }
        }],
        dietary_restrictions: {
            vegan_friendly: { type: Boolean, default: false },
            gluten_free_friendly: { type: Boolean, default: false },
            kosher_friendly: { type: Boolean, default: false },
            halal_friendly: { type: Boolean, default: false }
        },
        oven_temp: { type: Number, default: null }


    },
    { timestamps: true },
)

module.exports = Recipe