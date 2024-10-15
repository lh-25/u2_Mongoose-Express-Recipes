const { Schema } = require('mongoose')

const Direction = new Schema(
    {
        recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },  
        steps: { type: String, required: true }, 
    },
    { timestamps: true },
)

module.exports =  Direction