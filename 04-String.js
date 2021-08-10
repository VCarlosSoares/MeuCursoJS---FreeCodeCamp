// Declarando as strings que serão utilizadas durante este script (04-String.js)
var nome = "Vitor";
var sobrenome = "Carlos Soares";
var ultimoNome = "de Sá";

// Retornando o tamanho da string usando .length
var tamanho;
tamanho = nome.length;
console.log(tamanho);

tamanho = sobrenome.length;
console.log(tamanho, "\n");

// Obtendo uma letra de um determinado indice utilizando []
var primLetraNome = nome[0];
console.log(primLetraNome);

var ultLetraNome = nome[nome.length - 1];
console.log(ultLetraNome)
