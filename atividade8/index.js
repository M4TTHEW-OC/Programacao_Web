const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('viem engine', 'html');
app.set('views', __dirname + '/src/views');

app.get("/", function (req, res){
    res.render("index.html");
});

app.use(express.urlencoded({extended: true}));

app.use("/", require('./src/routes/calculatorRoutes'));

const PORT = 8080;
app.listen(PORT, function (){
    console.log("app rodando na porta " + PORT);
})
