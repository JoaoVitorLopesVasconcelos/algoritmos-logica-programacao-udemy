//Uma função é um bloco de código que executa um conjunto de funções (Reutilização de código, Modularidade, Abstração e depuração).


function mostrarNome (){
    console.log("Olá, seja bem vindo ao sistema!")

    console.log("Aprendendo algoritmos!")
}

function gerarNumeroAleatorio(){
    return Math.random(); //Return retorna o valor ao usuario.
}

let numeroGerado = gerarNumeroAleatorio();

console.log("Numero gerado foi " + numeroGerado)


function dataAtual (){
    const data = new Date ();
    return data.toDateString(); //toDateString retorna a data em string.
}

const data = dataAtual();
console.log(data);