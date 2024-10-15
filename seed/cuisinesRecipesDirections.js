const db = require('../db')
const { Cuisine, Recipe, Direction } = require('../models')

db.on('error', console.error.bind(console, 'Mongodb connection error'))

const main = async () => {
    const italian = await new Cuisine({
        name: "Italian",
        origin: "Italy",
        description: "Known for its regional diversity, especially between the north and the south of Italy. Renowned for its fresh ingredients and simple preparation.",
        bestKnownDish: "Pizza",
    })
    italian.save()

    const japanese = await new Cuisine({
        name: "Japanese",
        origin: "Japan",
        description: "Famous for its emphasis on seasonal ingredients and presentation. Key components include rice, seafood, and vegetables, often prepared with minimal seasoning.",
        bestKnownDish: "Sushi",
    })
    japanese.save()

    const korean = await new Cuisine({
        name: "Korean",
        origin: "Korea",
        description: "Korean cuisine is known for its bold, spicy flavors, with a heavy reliance on fermentation and pickling. Common ingredients include rice, vegetables, and meats, often served with side dishes called 'banchan.'",
        bestKnownDish: "Kimchi",
    })
    korean.save()

    const cuban = await new Cuisine({
        name: "Cuban",
        origin: "Cuba",
        description: "A fusion of Spanish, African, and Caribbean influences, Cuban cuisine features rich, flavorful dishes that often include rice, beans, and pork. Many dishes are slow-cooked and use vibrant spices.",
        bestKnownDish: "Ropa Vieja",
    })
    cuban.save()

    const spaghettiCarbonara = await new Recipe(
        {
            name: "Spaghetti Carbonara",
            cuisineType: italian._id,
            prepTime: 10,
            cookTime: 15,
            imageUrl:'https://southshorehls.b-cdn.net/wp-content/uploads/2022/03/highres_10.jpg',
            servings: 4,
            difficulty: "Medium",
            ingredients: [
                { name: "Spaghetti", quantity: 400, unit: "g" },
                { name: "Eggs", quantity: 4, unit: "none" },
                { name: "Pecorino Romano cheese", quantity: 100, unit: "g" },
                { name: "Guanciale", quantity: 150, unit: "g" },
                { name: "Black pepper", quantity: 1, unit: "Tsp" }
            ],
            dietary_restrictions: {
                vegan_friendly: false,
                gluten_free_friendly: false,
                kosher_friendly: false,
                halal_friendly: false
            },
            oven_temp: null
        })
    spaghettiCarbonara.save()
    const margheritaPizza = await new Recipe(
        {
            name: "Margherita Pizza",
            cuisineType: italian._id,
            prepTime: 20,
            cookTime: 12,
            imageUrl: 'https://i.pinimg.com/736x/45/0c/c5/450cc5342a1d1cbb55729ed944300576.jpg',
            servings: 2,
            difficulty: "Medium",
            ingredients: [
                { name: "Pizza dough", quantity: 1, unit: "none" },
                { name: "Tomato sauce", quantity: 200, unit: "g" },
                { name: "Mozzarella cheese", quantity: 150, unit: "g" },
                { name: "Fresh basil leaves", quantity: 10, unit: "none" },
                { name: "Olive oil", quantity: 2, unit: "Tbsp" }
            ],
            dietary_restrictions: {
                vegan_friendly: false,
                gluten_free_friendly: false,
                kosher_friendly: false,
                halal_friendly: true
            },
            oven_temp: 250
        })
    margheritaPizza.save()

    const misoSoup = await new Recipe(
        {
            name: "Miso Soup",
            cuisineType: japanese._id,
            prepTime: 5,
            cookTime: 10,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOyzUzTiczeZO4RXWikk8G3ubS0fNrX8LvUg&s',
            servings: 4,
            difficulty: "Easy",
            ingredients: [
                { name: "Miso paste", quantity: 3, unit: "Tbsp" },
                { name: "Tofu", quantity: 100, unit: "g" },
                { name: "Dashi stock", quantity: 800, unit: "Ml" },
                { name: "Wakame seaweed", quantity: 5, unit: "g" },
                { name: "Spring onions", quantity: 2, unit: "none" }
            ],
            dietary_restrictions: {
                vegan_friendly: true,
                gluten_free_friendly: true,
                kosher_friendly: true,
                halal_friendly: true
            },
            oven_temp: null
        })
    misoSoup.save()

    const chickenTeriyaki = await new Recipe(
        {
            name: "Chicken Teriyaki",
            cuisineType: japanese._id,
            prepTime: 15,
            cookTime: 20,
            imageUrl: 'https://i.pinimg.com/564x/d0/15/ea/d015eabd3e772d5f82e384b70047958e.jpg',
            servings: 4,
            difficulty: "Medium",
            ingredients: [
                { name: "Chicken thighs", quantity: 500, unit: "g" },
                { name: "Soy sauce", quantity: 4, unit: "Tbsp" },
                { name: "Mirin", quantity: 2, unit: "Tbsp" },
                { name: "Sake", quantity: 2, unit: "Tbsp" },
                { name: "Sugar", quantity: 1, unit: "Tbsp" }
            ],
            dietary_restrictions: {
                vegan_friendly: false,
                gluten_free_friendly: false,
                kosher_friendly: false,
                halal_friendly: false
            },
            oven_temp: null
        })
    chickenTeriyaki.save()

    const ropaVieja = await new Recipe(
        {
            name: "Ropa Vieja",
            cuisineType: cuban._id,
            prepTime: 20,
            cookTime: 120,
            imageUrl: 'https://assets.bonappetit.com/photos/59c924d03b3bf713cb638086/16:9/w_4062,h_2285,c_limit/1017%20WEB%20WEEK0869.jpg',
            servings: 6,
            difficulty: "Medium",
            ingredients: [
                { name: "Flank steak", quantity: 700, unit: "g" },
                { name: "Green bell pepper", quantity: 1, unit: "none" },
                { name: "Tomato sauce", quantity: 400, unit: "g" },
                { name: "Onion", quantity: 1, unit: "none" },
                { name: "Garlic cloves", quantity: 4, unit: "none" }
            ],
            dietary_restrictions: {
                vegan_friendly: false,
                gluten_free_friendly: true,
                kosher_friendly: false,
                halal_friendly: false
            },
            oven_temp: null
        })
    ropaVieja.save()
    const cubanSandwich = await new Recipe(
        {
            name: "Cuban Sandwich",
            cuisineType: cuban._id,
            prepTime: 15,
            cookTime: 10,
            imageUrl: 'https://static01.nyt.com/images/2023/10/12/multimedia/ND-Cuban-Sandwich2-tfvz/ND-Cuban-Sandwich2-tfvz-superJumbo.jpg',
            servings: 4,
            difficulty: "Easy",
            ingredients: [
                { name: "Cuban bread", quantity: 1, unit: "none" },
                { name: "Roast pork", quantity: 200, unit: "g" },
                { name: "Ham", quantity: 200, unit: "g" },
                { name: "Swiss cheese", quantity: 150, unit: "g" },
                { name: "Pickles", quantity: 50, unit: "g" }
            ],
            dietary_restrictions: {
                vegan_friendly: false,
                gluten_free_friendly: false,
                kosher_friendly: false,
                halal_friendly: false
            },
            oven_temp: null
        })
    cubanSandwich.save()

    const bibimbap = await new Recipe(
        {
            name: "Bibimbap",
            cuisineType: korean._id,
            prepTime: 20,
            cookTime: 20,
            imageUrl: 'https://www.recipetineats.com/tachyon/2019/05/Bibimbap_3.jpg',
            servings: 4,
            difficulty: "Medium",
            ingredients: [
                { name: "Rice", quantity: 400, unit: "g" },
                { name: "Beef", quantity: 200, unit: "g" },
                { name: "Spinach", quantity: 100, unit: "g" },
                { name: "Carrot", quantity: 1, unit: "none" },
                { name: "Egg", quantity: 4, unit: "none" }
            ],
            dietary_restrictions: {
                vegan_friendly: false,
                gluten_free_friendly: true,
                kosher_friendly: false,
                halal_friendly: true
            },
            oven_temp: null
        })
    bibimbap.save()

    const kimchiJigae = await new Recipe(
        {
            name: "Kimchi Jjigae",
            cuisineType: korean._id,
            prepTime: 10,
            cookTime: 30,
            imageUrl: 'https://www.koreanbapsang.com/wp-content/uploads/2014/03/DSC_5089-3.jpg',
            servings: 4,
            difficulty: "Easy",
            ingredients: [
                { name: "Kimchi", quantity: 300, unit: "g" },
                { name: "Pork belly", quantity: 200, unit: "g" },
                { name: "Tofu", quantity: 150, unit: "g" },
                { name: "Gochujang", quantity: 1, unit: "Tbsp" },
                { name: "Garlic", quantity: 3, unit: "Cloves" }
            ],
            dietary_restrictions: {
                vegan_friendly: false,
                gluten_free_friendly: true,
                kosher_friendly: false,
                halal_friendly: false
            },
            oven_temp: null
        })
    kimchiJigae.save()

    const directionsCarbonara = [
        { recipe: spaghettiCarbonara._id, steps: "1. Boil the spaghetti in salted water until al dente, about 8-10 minutes. 2. Meanwhile, cut the guanciale into small pieces and cook in a pan over medium heat until crispy. 3. In a bowl, whisk together the eggs, pecorino cheese, and black pepper. 4. Drain the spaghetti, reserving some pasta water. Add the spaghetti to the pan with guanciale and mix 5. Remove from heat, add the egg mixture, and quickly stir to create a creamy sauce. Add pasta water if needed to adjust consistency." }
        ]
    const directionsMargheritaPizza = [
        { recipe: margheritaPizza._id, steps: "1. Preheat the oven to 250°C (475°F) 2. Roll out the pizza dough on a floured surface to your desired thickness.3. Spread the tomato sauce evenly over the dough. 4. Sprinkle the mozzarella cheese and add fresh basil leaves on top. 5. Drizzle with olive oil and bake for 10-12 minutes until the crust is golden and the cheese is bubbly." }
    ]

    const directionsMisoSoup = [
        { recipe: misoSoup._id, steps: "1. Bring the dashi stock to a simmer in a pot. 2.Cut tofu into small cubes and add them to the simmering dashi. 3. Add wakame seaweed and let it simmer for another 2-3 minutes. 4. Turn off the heat, and dissolve the miso paste in the soup using a ladle. Stir gently. 5. Serve hot, garnished with chopped spring onions." }
    ]

    const directionsChickenTeriyaki = [
        { recipe: chickenTeriyaki._id, steps: " 1. Mix soy sauce, mirin, sake, and sugar in a bowl to create the teriyaki sauce. 2. Heat a pan over medium heat and cook the chicken thighs until browned on both sides. 3. Pour the teriyaki sauce over the chicken and let it simmer until the chicken is fully cooked and the sauce has thickened. 4. Slice the chicken and serve with rice, drizzling the sauce on top." }
    ]

    const directionsRopaVieja = [
        { recipe: ropaVieja._id, steps: "1. Season the flank steak with salt and pepper. Sear it in a large pot with oil until browned on all sides. 2. Add chopped onions, garlic, bell peppers, and sauté until softened. 3. Add tomato sauce and enough water to cover the meat. Simmer for 1.5 to 2 hours, or until the meat is tender and can be shredded. 4. Shred the meat with two forks and return it to the pot. Stir everything together and cook for another 10 minutes. 5. Serve hot with rice and beans." }
    ]

    const directionsCubanSandwich = [
        { recipe: cubanSandwich._id, steps: "1. Slice the Cuban bread in half lengthwise and spread mustard on both sides. 2. Layer roast pork, ham, Swiss cheese, and pickles between the bread. 3. Press the sandwich in a sandwich press or on a griddle with a weight on top until the bread is crispy and the cheese is melted, about 5-7 minutes. 4. Cut the sandwich in half and serve warm." }
    ]

    const directionsBibimbap = [
        { recipe: bibimbap._id, steps: "1. Cook the rice and set aside. 2. Sauté spinach, carrots, and other vegetables separately with sesame oil and season lightly with salt. 3. Cook the beef with garlic and soy sauce until browned.4. Fry an egg sunny-side-up. 5. Assemble the dish by placing rice in a bowl, topping with beef, vegetables, and the fried egg. Serve with gochujang sauce." }
    ]

    const directionsKimchiJjigae = [
        { recipe: kimchiJigae._id, steps: "1. Cut the kimchi and pork belly into bite-sized pieces. 2. In a pot, sauté the pork belly with garlic until browned. 3. Add kimchi and gochujang, and stir well. Cook for 5 minutes. 4. Pour water into the pot and simmer for 20-30 minutes. 5. Add tofu and cook for another 5 minutes. Serve hot." }
    ]



    await Direction.insertMany([...directionsCarbonara,...directionsMargheritaPizza,...directionsMisoSoup,...directionsChickenTeriyaki,...directionsRopaVieja,...directionsCubanSandwich,...directionsBibimbap,...directionsKimchiJjigae])
    console.log('Created some recipes!')
}

const run = async () => {
    await main()
    db.close
}

run()