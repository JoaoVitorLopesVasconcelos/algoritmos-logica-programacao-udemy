//Desafio troca de valores entre variáveis sem criar uma variável auxiliar.

//let a = 10;
//let b = 20;

//a = a + b; // a = 30
//b = a - b; // b = 10
//a = a - b; // a = 20

//console.log(`O valor de a é ${a} e o valor de b é ${b}.`);

let a = 10;
let b = 20;
let c = a; // c = 10 - variável auxiliar para armazenar o valor de a.

a = b; // a = 20
b = c; // b = 10

console.log(`O valor de a é ${a} e o valor de b é ${b}.`);
