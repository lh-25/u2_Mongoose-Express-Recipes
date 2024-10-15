const express = require('express');
const db = require('./db');
const cuisineController = require('./controllers/cuisineController')
const recipeController = require('./controllers/recipeController')
const directionController = require('./controllers/directionController')
const bodyParser = require('body-parser')
const logger = require('morgan')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
app.get('/', (req, res) => res.send('welcome to our page'))

// CUISINE
app.get('/cuisines', cuisineController.getAllCuisines)
app.get('/cuisines/:id', cuisineController.getCuisineById)
// CREATE will nee to be in a INDEX route
app.post('/cuisines', cuisineController.createCuisine)
// PUT and DELETE will need to be iin a SHOW route bc we are targeting a single item 
app.put('/cuisines/:id', cuisineController.updateCuisine)
app.delete('/cuisines/:id', cuisineController.deleteCuisine)
app.get('/recipes/:name', cuisineController.getCuisineName)

//RECIPES
app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/:id', recipeController.getRecipeById)
// CREATE will nee to be in a INDEX route
app.post('/recipes', recipeController.createRecipe)
// PUT and DELETE will need to be iin a SHOW route bc we are targeting a single item 
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)
app.get('/recipes/:name', recipeController.getRecipeName)


//DIRECTIONS
app.get('/directions', directionController.getAllDirections)
app.get('/directions/:id', directionController.getDirectionById)
// CREATE will nee to be in a INDEX route
app.post('/directions', directionController.createDirection)
// PUT and DELETE will need to be iin a SHOW route bc we are targeting a single item 
app.put('/directions/:id', directionController.updateDirection)
app.delete('/directions/:id', directionController.deleteDirection)