//Calculadora de Juros Simples.

let capital = 1000;
const taxa = 0.05; // 5% de juros
const tempo = 48; // 48 meses = 4 anos

const jurosSimples = capital * taxa * tempo;
console.log(`O valor dos juros simples é de R$ ${jurosSimples}.`);