import prompt from "prompt-sync";

class Election {
    totalVoters: number;  blankVotes: number;  nullVotes: number;  validVotes:number;

    constructor(totalVoters: number, blankVotes: number, nullVotes: number, validVotes: number,) {
        this.totalVoters  =  totalVoters;
        this.blankVotes   =  blankVotes;
        this.nullVotes    =  nullVotes;
        this.validVotes   =  validVotes;
    }

    calculatePercentages(): void {
        const percentageBlanks  =  ( this.blankVotes / this.totalVoters ) * 100;
        const percentageNulls   =  ( this.nullVotes  / this.totalVoters ) * 100;
        const percentageValids  =  ( this.validVotes / this.totalVoters ) * 100;
        
        console.log( `Porcentagem de votos brancos: ${percentageBlanks.toFixed(2)}%` );
        console.log( `Porcentagem de votos nulos:   ${percentageNulls.toFixed(2)}%`  );
        console.log( `Porcentagem de votos válidos: ${percentageValids.toFixed(2)}%` );
    } 
}

const input = prompt();

const totalVoters  =  +input( 'Digite o número total de eleitores: ');
const blankVotes   =  +input( 'Digite o número de votos brancos: '  );
const nullVotes    =  +input( 'Digite o número de votos nulos : '   );
const validVotes   =  +input( 'Digite o número de votos válidos: '  );

const election  =  new Election(totalVoters, blankVotes, nullVotes, validVotes);

election.calculatePercentages();
