

const Recipe = require('../models/recipe')



const createRecipe = async (req, res) => {

try {

const recipe = await new Recipe(req.body)

await recipe.save()

return res.status(201).json({ recipe,})

} catch (error) {

return res.status(500).json({error: error.message})

}

}


const getAllRecipes = async (req, res) => {
    
    try {
    
    const recipes = await Recipe.find()
    
    return res.status(200).json({ recipes })
    
    } catch (error) {
    
    return res.status(500).json({error: error.message})
    
    }
    
    }

    const getRecipeById = async (req, res) => {
        try {
            const recipe = await Recipe.findById(req.params.id)
            
            if(recipe) {
                 return res.status(200).json({ recipe });
            } 
        
               return res.status(404).send('Recipe with the specified ID does not exist')
            
            } catch (error) {
                return res.status(500).send( error.message);
            }

    }

    const updateRecipe = (req, res) => {
        try {
            const { id } = req.params;
            Recipe.findByIdAndUpdate(
                id, req.body, { new: true }, (err, recipe) => {

                if (err) {
                    return res.status(500).send(err);
                }

                if (!recipe) {
                    return res.status(500).send('Recipe with the specified ID does not exist');
            }
            return res.status(200).json(recipe);
        }
        )
        } catch (error) {
            return res.status(500).send( error.message);
        }
    }

    const deleteRecipe = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Recipe.findByIdAndDelete(id)

            if(deleted) {
                return res.status(200).send('Recipe deleted successfully');

            }
            throw new Error('Recipe with the specified ID does not exist');
        } catch (error) {
            return res.status(500).send( error.message);
        }

    }
            
    module.exports = {
        createRecipe,
        getAllRecipes,
        getRecipeById,
        updateRecipe,
        deleteRecipe
    }