import prompt from "prompt-sync";

let keyboard = prompt();

let base: number = 0;
let height: number = 0;
let resultado: number = 0;


base = +keyboard('Digite a base: ');
height = +keyboard('Digite a altura: ');

resultado = base * height 

console.log('O resultado é: ', resultado);

