// Funções com parametros.

function mostraNome(nome) {
    console.log(`Seja bem vindo ao sistema, ${nome}`)
}

//mostraNome("João Vitor")

const nota1 = 8;
const nota2 = 4;
const nota3 = 7;
const nome = "Matheus"

function calculoMedia(nota1, nota2, nota3, nome){
    let media = (nota1 + nota2 + nota3) / 3;
    return `O(a) aluno(a) ${nome} teve a média de ${media}.`;
}

const mediaMatheus = calculoMedia(nota1, nota2, nota3, nome);

//console.log(mediaMatheus);

const mediaAluno = calculoMedia(10, 6, 8, "Iasmim");

//console.log(mediaAluno)



// ==============================
/*
let capital = 1000;
const taxa = 0.05; // 5% de juros
const tempo = 48; // 48 meses = 4 anos

const jurosSimples = capital * taxa * tempo;
console.log(`O valor dos juros simples é de R$ ${jurosSimples}.`);
*/

function calculadoraJuros (capital, taxa, tempo){
    let jurosFinal = capital * taxa * tempo;
   console.log(`Juros no período de ${tempo} meses é de R$ ${jurosFinal}`)
}

calculadoraJuros(2000, 0.3, 24)

