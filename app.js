//Primeiros comandos com javascript usando condicionais e comandos de impressão básicos
 alert("Bem vindo ao jogo do número secreto !!!");
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute = prompt("Digite um número de 1 a 30");

if (chute == numeroSecreto) {
    console.log(`Parabéns , você acertou o número secreto $!!!`);
    alert('Parabéns você acertou!!!');
} else {
    alert('Você errou !!!');
}

/* 
//exercicio dias da semana com condicionais
alert('Bom dia senhor(a)');
let diaDaSemana = prompt('Qual é o dia da semana ?');
let pontuacao = 0;

if (diaDaSemana == 'Sabado') {
    console.log('O usuário respondeu devidamente a questão');
    pontuacao = pontuacao + 10;
    console.log(pontuacao);
    alert('Bom final de semana !!!');

} else if (diaDaSemana == 'domingo') {
    pontuacao = pontuacao + 10;
    console.log(pontuacao);
    console.log('O usuário respondeu devidamente a questão');
    alert('Bom final de semana !!!');
    

} else {
    console.log('O usuário respondeu devidamente a questão');
    alert('Boa semana !!!');

}

//exercicio numero positivo ou negativo com condicionais
alert('Agora faremos um teste se seu número é negativo ou positivo !!!');
let numeroNeOuPo = prompt('Digite um número qualquer :');

if (numeroNeOuPo >= 0) {
    pontuacao = pontuacao + 10;
    console.log(pontuacao);
    alert('Número Positivo');

} else {
    alert('Número Negativo');

}

let nome = prompt('Digite seu nome por favor senhor(a)');

//exercicio de concatenação de nomes e de sistema de pontuacao
if (pontuacao >= 20) {
    alert(`Parabéns você venceu ${nome}!!!`);
} else {
    alert(`Você perdeu ${nome}!!!`)
}
*/