//Uma função é um bloco de código que executa um conjunto de funções (Reutilização de código, Modularidade, Abstração e depuração).


function mostrarNome (){
    console.log("Olá, seja bem vindo ao sistema!")

    console.log("Aprendendo algoritmos!")
}

function gerarNumeroAleatorio(){
    return Math.random();
}

let numeroGerado = gerarNumeroAleatorio();

console.log("Numero gerado foi " + numeroGerado)