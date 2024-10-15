const {Cuisine} = require('../models')

// GET Index
const getAllCuisines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// GET Show
const getCuisineById = async (req, res) => {
    try {
        const { id } = req.params
        const cuisine = await Cuisine.findById(id)
        if (cuisine) {
            return res.json(cuisine)
        }
        return res.status(404).send('Cuisine with the specified ID does not exists')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


// POST -> Create
const createCuisine = async (req, res) => {
    try {
        const cuisine = await new Cuisine(req.body)
        await cuisine.save()
        return res.status(201).json({ cuisine })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// PUT -> Update 
const updateCuisine = async (req, res) => {
    try {
        let { id } = req.params;
        let cuisine = await Cuisine.findByIdAndUpdate(id, req.body, { new: true })
        if (cuisine) {
            return res.status(200).json(cuisine)
        }
        throw new Error("Cuisine not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE -> Delete 
const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Cuisine.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cuisine deleted")
        }
        throw new Error("Cuisine not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCuisineName = async (req,res) => {
    try {
        const { name } = req.params
        const cuisine = await Cuisine.findOne({name: new RegExp(name, 'i')})
        if (cuisine) {
            return res.json(cuisine)
        }
        return res.status(404).send('Recipe not found.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}





module.exports = {
    getAllCuisines,
    getCuisineById,
    createCuisine,
    updateCuisine,
    deleteCuisine,
    getCuisineName

}