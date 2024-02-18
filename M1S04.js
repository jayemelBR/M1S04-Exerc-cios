//Ex 1 - Função de mensagem
const message = 'Olá FuturoDEV, Turma Fitness' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

//Ex 2 - Atribuição de valores

// Solicita um número ao usuário através do windows.prompt
let numero = window.prompt("Digite um número:");

// Exibe o valor da variável no console
console.log("O número digitado é: " + numero);

//Ex3 - Concatenação

// As strings
let string1 = "Olá, ";
let string2 = "FuturoDEV!";

// Usando template string para combinar as strings
let resultado = string1 + string2;

// Exibindo o resultado no console
console.log(resultado);

//Ex4 - Função com parâmetros

// Função que recebe dois números como parâmetros e retorna a soma
function somarNumeros(numero1, numero2, numero3, numero4) {
  let soma = numero1 + numero2 + numero3 + numero4;
  return soma;
}

// Exemplo de uso da função
let resultadoSoma = somarNumeros(5, 7, 8, 3);

// Exibindo o resultado no console
console.log("A soma é: " + resultadoSoma);

//Ex 5 - Estruturas Condicionais

// Função que verifica se um número é positivo, negativo ou zero
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}

//Ex 6 - Objetos

// Definindo três objetos com informações pessoais
let pessoa1 = {
  nome: "Yan",
  idade: 30,
  nacionalidade: "Brasileira",
  profissao: "Desenvolvedor de Software"
};

let pessoa2 = {
  nome: "Manuel",
  idade: 25,
  nacionalidade: "Portuguesa",
  profissao: "Designer"
};

let pessoa3 = {
  nome: "Carl",
  idade: 40,
  nacionalidade: "Americano",
  profissao: "Programador"
};

// Exibindo as informações no console
console.log("Informações da Pessoa 1:");
console.log("Nome:", pessoa1.nome);
console.log("Idade:", pessoa1.idade);
console.log("Nacionalidade:", pessoa1.nacionalidade);
console.log("Profissão:", pessoa1.profissao);

console.log("\nInformações da Pessoa 2:");
console.log("Nome:", pessoa2.nome);
console.log("Idade:", pessoa2.idade);
console.log("Nacionalidade:", pessoa2.nacionalidade);
console.log("Profissão:", pessoa2.profissao);

console.log("\nInformações da Pessoa 3:");
console.log("Nome:", pessoa3.nome);
console.log("Idade:", pessoa3.idade);
console.log("Nacionalidade:", pessoa3.nacionalidade);
console.log("Profissão:", pessoa3.profissao);

//Ex7 - Função Cumprimentos

// Função que determina a saudação com base na hora
function saudacaoPorHora(hora) {
  if (hora >= 6 && hora < 12) {
    console.log("Bom dia!");
  } else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!");
  } else {
    console.log("Boa noite!");
  }
}

// Exemplo de uso da função
let horaAtual = new Date().getHours(); // Obtém a hora atual do sistema do usuario

saudacaoPorHora(horaAtual);

//Ex8 - Função Par/Impar

// Função que verifica se um número é par ou ímpar
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
  } else {
    console.log(numero + " é um número ímpar.");
  }
}

// Exemplo de uso da função
verificarParOuImpar(6);  // Exemplo de número par
verificarParOuImpar(9);  // Exemplo de número ímpar

//Ex9 - Switch/Case

// Função que exibe mensagem com base no dia da semana
function manual(numero) {
  switch (numero) {
    case 1:
      console.log("Primeira");
      break;
    case 2:
      console.log("Segunda");
      break;
    case 3:
      console.log("Terceira");
      break;
    case 4:
      console.log("Quarta");
      break;
    case 5:
      console.log("Quinta");
    default:
      console.log("Neutra/Ponto Morto");
  }
}

// Exemplo de uso da função
manual(1)
manual(3) 
manual(5)
manual()

//Ex10 - Solicitação de Dados em Função

// Função que solicita a idade do usuário e exibe mensagem de maioridade
function verificarMaioridade() {
  // Solicita a idade do usuário através do prompt
  let idade = parseInt(prompt("Digite sua idade:"));

  // Verifica se a idade é maior ou igual a 18
  if (idade >= 18) {
    console.log("Você é maior de idade. Pode prosseguir!");
  } else {
    console.log("Você é menor de idade. Acesso restrito!");
  }
}

// Chamando a função para verificar a maioridade
verificarMaioridade();