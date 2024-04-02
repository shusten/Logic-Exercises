import prompt from "prompt-sync";

export class main {
keyboard = prompt();
number: number = 0;
option: string = ''; 

   decreaseTheValue(value: number): number{
      return value -1;
    }

    menu(){
         while(this.option != 's') {
            console.log('**************************************************');
            console.log('|A. Digite um número para ver seu antecessor     |');
            console.log('|S. Digite S para sair                           |');
            console.log('**************************************************');
            
            this.option = this.keyboard('Escolha uma ação: ');

            if(this.option == 'a') {
                this.number = +this.keyboard('Digite um valor: ');
                let result = this.decreaseTheValue(this.number);
                console.log('Resultado:', result);
            }
         }
    }
}

let mainInstance = new main();
mainInstance.menu()




