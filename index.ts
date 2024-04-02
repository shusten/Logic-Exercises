import prompt from "prompt-sync";
console.log("TESTE CONSOLE");

let keyboard = prompt();
let option: number = 0;

while(option != 2) {
    console.log('========================================');
    console.log("____________Testando Entrada____________");
    console.log('========================================');
    
    option = +keyboard(':')
}