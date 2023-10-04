const express = require('express');
const mustacheExpress = require ('mustache-express');
const app = express();

//app.get('/', function (req, res){
//    res.send('Olá, mundo !!!');

//});

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));


app.get('/', function (req, res){

    let usuario = {
        //nome: req.params.n,

        nome: "Matheus de Oliveira Cavalcante",
        telefone: 123123
    };

    res.render('index.html',{usuario} );

});

/*
app.get('/dados', function(req, req){
    let usuario = {
        nome: req.query.nome,
        telefone: req.query.telefone
    };
    res.render('dados.html', {usuario} )
});
*/

app.post('/dados', function(req, res){
    let usuario = {
        nome: req.body.nome,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        agendamento: req.body.agendamento
    };
    res.render('dados.html', {usuario} )
});

const PORT = 8080;
app.listen(PORT, function (){
    console.log('app rodando na porta ' + PORT);
});
