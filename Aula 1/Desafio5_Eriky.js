//Pontuação escolar + média + pontuação mais alta entre os alunos.

const notaAprovacao = 20;

const João = 25 + 20 + 22 + 25; // 92
const Eriky = 20 + 22 + 23 + 25; // 90
const Tulio = 15 + 18 + 13 + 8; // 54

const mediaJoao = João / 4;
const mediaEriky = Eriky / 4;
const mediaTulio = Tulio / 4;

console.log(`A média do João é ${mediaJoao}.`);
console.log(`A média do Eriky é ${mediaEriky}.`);
console.log(`A média do Tulio é ${mediaTulio}.`);

const maiorMedia = Math.max(mediaJoao, mediaEriky, mediaTulio);
console.log(`A maior média entre os alunos é ${maiorMedia} e pertence ao aluno ${maiorMedia === mediaJoao ? 'João' : maiorMedia === mediaEriky ? 'Eriky' : 'Tulio'}.`);

if (mediaJoao >= notaAprovacao) {
    console.log(`O João foi aprovado com a média de ${mediaJoao}.`);
}else {
    console.log(`O João foi reprovado com a média de ${mediaJoao}.`);
}if (mediaEriky >= notaAprovacao) {
    console.log(`O Eriky foi aprovado com a média de ${mediaEriky}.`);
}else {
    console.log(`O Eriky foi reprovado com a média de ${mediaEriky}.`);
}if (mediaTulio >= notaAprovacao) {
    console.log(`O Tulio foi aprovado com a média de ${mediaTulio}.`);
}else {
    console.log(`O Tulio foi reprovado com a média de ${mediaTulio}.`);
}
