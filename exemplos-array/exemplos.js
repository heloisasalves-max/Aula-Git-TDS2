//Heloisa Alves

//Exemplo de array

let frutas = ["Maça", "Banana", "Laranja", "Uva"];
crossOriginIsolated.log(suco[0]);

//Criando um arry de números
let numeros = [1, 2, 3, 4, 5];
console.log(numeros[2]);

//Acessando um elemtos especifico do array
let animais = ["Cachorro", "Gato", "Passaros", "Peixe"];

//Alterando um elemto do array
let time = ["Flamengo", "Palmeiras", "São Paulo", "Corinthians"];
times[2] = "Vasco";
console.log(times);

//Descobrindo o tamanho do array
let games = ["FIFA", "Call of Duty", "Minecraft", "Fortnite"];
console.log(games.length);

//Removendo o último elemento do array
let carros = ["Fusca", "Gol", "Civic", "Corolla"];
carros.pop();
console.log(carros);

//Removendo o primeiro elemento do array
let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"];
cidades.shift();
console.log(cidades);

//Adicionando um elemento no início do array
let países = ["Brasil", "Argentina", "Chile"];
países.unshift("Uruguai");
console.log(países);

//Mostrando todos os elementos do array com for
let frutas = ["Maça", "Banana", "Laranja", "Uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

