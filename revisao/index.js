
/*
        let a = 3;
        let b = 5;
        let c = a + b;
        console.log(`${a} + ${b} = ${c}`);

        let arr = [11, 22, 33, 44, 55, 77, 66, 88, 00, 99]
        console.log(arr.length);

        
        for(let i =0 ;i < arr.length; i++){
                console.log(arr[i]);
        }
        
        arr.forEach(qq => {
              //=== compara o 88 e o tipo da variável
                if(qq == '88'){
                        console.log(qq);
                        
                }
        });

        let Pessoa = {
                nome: "Matheus",
                tel: 99999999,
                cpf: 0123,
                obj: {
                        end1: "abc",
                        end2: "def"
                }
        };

        console.log(Pessoa.nome, Pessoa.tel, Pessoa.cpf);
        console.log(Pessoa.obj.end1);

        function somar(a,b){
                return a + b;
        }

        console.log(somar(3,5));
        */



const express = require('express');

const app = express();

        app.get('/', function(req, res){
                res.send("App funcionando");
        });

        app.get('/hello/:n', function(req, res){
                let nome = req.params.n;
                res.send("Olá mundo !!! saudações do " + nome);
        });


const PORT = 8080;
        app.listen(PORT, function(){
                console.log("app rodando na porta " + PORT);
        })