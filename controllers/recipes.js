const fs = require('fs')
const recipes = require ('../data.js')

//INDEX
exports.index = function(req,res) {
    return res.render("recipes/index", {recipes: recipes})
}

//SHOW
exports.show = function(req,res) {
    // const recipes = [...];
    const recipeIndex = req.params.index;

    return res.render("recipes/show", {recipe: recipes[recipeIndex]})
}