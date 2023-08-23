function somar (a, b){
    return a +b;

}

console.log(somar(23, 24));

function contar(n){
    if(n > 0){
    //console.log(n) para exibir do maior para o menor
    contar( n - 1);
    console.log(n);
    }
}

contar(5);

const calculadora = {
    somar (a, b){
        return a + b;
    },
    subtrair (a, b){
        return a - b;
    }
}

console.log(calculadora.somar(1, 2));


function enviarEmail(){
    console.log("Email : enviado")
}

function baixarArquivo(nomeDoArquivo, callback) {
    console.log("baixando arquivo " + nomeDoArquivo);
    setTimeout(() =>{
        console.log(nomeDoArquivo + " baixando com sucesso");
        callback()
    }, 5000);

}

baixarArquivo("aulaDeJS.mp4", enviarEmail);

// Função Promise  