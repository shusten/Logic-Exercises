import prompt from 'prompt-sync';

class SalaryAdjustment{
    currentSalary: number;  adjustmentSalary: number;

    constructor(currentSalary: number, adjustmentSalary: number) {
        this.currentSalary    =  currentSalary;
        this.adjustmentSalary =  adjustmentSalary;
    }

    calculateNewSalary(): void {
        const percentageSalary = ( this.adjustmentSalary  /  100 ) * this.currentSalary 
        const newSalary = percentageSalary  +  this.currentSalary;
        
        console.log( `O valor do novo salário reajustado é: ${newSalary.toFixed(2)}` );
    }
}

const input = prompt();

const currentSalary     =  +input( 'Digite o salário atual do funcionário: '    );
const adjustmentSalary  =  +input( 'Digite a porcentagem do reajuste salarial: ');

const salaryAdjustment  =  new SalaryAdjustment(currentSalary, adjustmentSalary);

salaryAdjustment.calculateNewSalary();
