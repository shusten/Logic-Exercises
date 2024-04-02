import readlineSync from 'readline-sync';

const daysPerYear = 365;
const daysPerMonth = 30;

let years:  number  =  +readlineSync.question('Enter the years: ' );
let months: number  =  +readlineSync.question('Enter the months: ');
let days:   number  =  +readlineSync.question('Enter the days: '  );

let totalDays = (years * daysPerYear) + (months * daysPerMonth) + days;

console.log('Your age in days is: ', totalDays);
