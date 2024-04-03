import prompt from "prompt-sync";

const keyboard = prompt();
let option = '';

function decreaseTheValue(value: number): number {
    return value - 1;
}

while (option.toLowerCase() !== 's') {
    console.log('**************************************************');
    console.log('|A. Digite um número para ver seu antecessor     |');
    console.log('|S. Digite S para sair                           |');
    console.log('**************************************************');
    option = keyboard('Escolha uma ação: ');
    if (option.toLowerCase() === 'a') {
        const number = +keyboard('Digite um valor: ');
        const result = decreaseTheValue(number);
        console.log('Resultado:', result);
    }
}
