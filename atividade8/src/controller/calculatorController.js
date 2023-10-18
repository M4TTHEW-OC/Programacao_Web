const calculator = require("../calculator/calculator")

function indexCalculadora(req, res) {
    res.render('index.html');
}

function calcular(req, res) {
    res.send("")
}



module.exports = {
    indexCalculadora,
    calcular
}