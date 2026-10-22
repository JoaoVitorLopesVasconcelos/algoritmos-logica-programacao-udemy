//Pratica - Nota de aluno 

const nota1 = 7;
const nota2 = 9;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

/*if (media >= 7) {
    console.log("Aluno aprovado com média: " + media);
} else {
    console.log("Aluno reprovado com média: " + media);
}*/


//Pratica 2 = Calculo de frete com condicional.

const valorCompra = 100;
const freteGratis = false;

if (valorCompra >= 250 && freteGratis) {
    console.log("Frete grátis aplicado!");
} else {
    console.log("Frete grátis não aplicado, necessário valor mínimo de R$250,00 ou promoção de frete grátis.");
}