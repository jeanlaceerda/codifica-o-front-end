console.log("--- Operadores de comparação ---");

let primeiroValor = 100;
let segundoValor = "100";

if(primeiroValor == segundoValor){
	console.log("Os valores são iguais", primeiroValor , segundoValor);
}

if(primeiroValor === segundoValor){
	console.log("Os valores são iguais", primeiroValor , segundoValor);
}else{
	console.log("Os valores são iguais mais os tipos de variáveis são diferentes");
}

let terceiroValor = 200;
let quartoValor = "200";

if(terceiroValor != quartoValor){
	console.log("Os valores são diferentes");
}else{
	console.log("Os valores são iguais")
}

if(terceiroValor !== quartoValor){
	console.log("Os valores são diferentes");
}else{
	console.log("Os valores são iguais")
}

console.log("--- Operadores de comparação ---");

let v1 = 10;
let v2 = 20;
let v3 = 30;
let v4 = 40;

if(v1 > v2){
	console.log(v1,"é maior que", v2);
}else if(v1 < v2){
	console.log(v1, "é menor que", v2);
}else{
	console.log("Os números são iguais");
}

if(v1 >= v2){
	console.log(v1,"é maior ou igual a ", v2)
}else{
	console.log(v1, "é menor que", v2);
}

console.log("--------");



if(v4 > v3 || v1 > v2){
	console.log(v4, "é maior que",v3,"ou", v2,"é maior que ",v1);
}else{
	console.log("A condição não é verdadeira");
}

if(!(v3 > v4)){
	console.log(v3, "não é maior que", v4);
}