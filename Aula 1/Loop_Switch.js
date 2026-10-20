// Switch (Escolha / Casos) - É usado para tomar decisões com base no valor de uma variável.

const codigoPromocao = 510;
let desconto = 0;

switch (codigoPromocao) {
    case 10: // O valor da variável é comparado com cada caso.
        console.log("Produto Tênis");
        desconto = 0.03; // Desconto aplicado no produto.
        break; // break é usado para sair do switch após encontrar o caso correspondente.
    case 500:
        console.log("Produto Camiseta");
        desconto = 0.05;
        break;
    case 510:
        console.log("Produto Eletrônico");
        desconto = 0.30;
        break;
    default: // Caso padrão, executado se nenhum dos casos anteriores corresponder ao valor da variável.
        console.log("Produto não encontrado...");
        break;
}

console.log(`O valor do desconto atual é: ${desconto}`)