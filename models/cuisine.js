const { Schema } = require('mongoose')

const Cuisine = new Schema(
    {
        name: { type: String, required: true },  
        origin: { type: String, required: true }, 
        description: { type: String, required: true },
        bestKnownDish: { type: String, required: true }, 

    },
    { timestamps: true },
)

module.exports =  Cuisine