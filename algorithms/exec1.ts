import prompt from "prompt-sync";

class NumberProcessor {
    private keyboard: any;

    constructor() {
        this.keyboard = prompt();
    }

    private decreaseValue(value: number): number {
        return value - 1;
    }

    public start(): void {
        let option = '';
        while (option.toLowerCase() !== 'e') {
            console.log('**************************************************');
            console.log('|A. Enter A number to see its predecessor        |');
            console.log('|S. Enter E to exit                              |');
            console.log('**************************************************');
            option = this.keyboard('Choose an action: ');
            if (option.toLowerCase() === 'a') {
                const number = +this.keyboard('Enter a number: ');
                const result = this.decreaseValue(number);
                console.log('Result:', result);
            }
        }
    }
}

const numberProcessor = new NumberProcessor();
numberProcessor.start();

