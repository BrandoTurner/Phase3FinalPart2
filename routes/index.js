const { Router } = require('express')

const controllers = require('../controller');
const router = Router();

    
router.get('/', (req, res) => res.send("This is the root!"));
router.post('/', controllers.createRecipe);
router.get('/recipes', controllers.getAllRecipes);
router.get('/recipes/:id', controllers.getRecipeById);
router.put('/recipes/:id', controllers.updateRecipe);
router.delete('/recipes/:id', controllers.deleteRecipe);


module.exports = router;