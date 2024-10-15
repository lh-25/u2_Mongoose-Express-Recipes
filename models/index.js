const mongoose = require('mongoose')
const CuisineSchema = require('./cuisine')
const RecipeSchema = require('./recipe')
const DirectionSchema = require('./direction')

const Cuisine = mongoose.model('Cuisine', CuisineSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Direction = mongoose.model('Direction', DirectionSchema)

module.exports = {
    Cuisine,
    Recipe,
    Direction
}