// [x] Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio. 

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// [x] Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarClique() {
    console.log("O botão foi clicado !");
}

// [x] Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado. 

function verificarAlerta() {
    alert("Eu amo JS !!!");
}

// [x] Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você. 

function verificarPrompt() {
    let cidade = prompt("Cite o nome de uma cidade do Brasil :");
    alert(`Estive em ${cidade} e lembrei de você !`);
}

// [x] Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function somaDoisNumeros() {
    // pedindo os numeros 
    const num1 = parseInt(prompt("Digite um número inteiro : "));
    const num2 = parseInt(prompt("Digite mais um número inteiro : "));

    // soma
    let resultado = (num1 + num2);

    // exibir a soma
    alert(resultado);
}