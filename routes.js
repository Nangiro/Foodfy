const express = require('express')
const routes = express.Router()

const recipes = require('./controllers/recipes')
const home = require ('./controllers/home')

routes.get('/', function(req,res) {
    return res.redirect("/home")
})

routes.get('/home', home.index)


routes.get('/recipes', recipes.index)
routes.get('/recipes/:index', recipes.show)

module.exports = routes