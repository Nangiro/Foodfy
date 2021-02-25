const data = require ('../data.js')

//INDEX
exports.index = function(req,res) {
    return res.render("home/index", {recipes: data})
}