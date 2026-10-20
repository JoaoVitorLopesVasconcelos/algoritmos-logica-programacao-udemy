// Condicional (IF, ELSE, ELSE IF).

const idade = 80;
const freteGratis = false;

//IF e ELSE

/*if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}*/


//ELSE IF (combinado com operadores lógicos.)(&& usado para "E".))

if (idade >= 18 && idade < 60) {
    console.log("Você é maior de idade.");
} else if (idade >= 60) {
    console.log("Você é idoso.");
} else {
    console.log("Você é menor de idade.");
}