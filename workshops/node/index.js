const chalk = require('chalk');

const mesWilders = [
    {nom:'Koldo', couleur:'bleu'},
    {nom:'Jimmy', couleur:'red'},
    {nom:'Guillaume', couleur:'violet'},
    {nom:'Bernardin', couleur:'yellow'}
]

for (let i = 0;i<mesWilders.length;i++){
    switch(mesWilders[i].couleur){
        case 'bleu':
            console.log(chalk.blue(mesWilders[i].nom));
        break;
        case 'green':
            console.log(chalk.green(mesWilders[i].nom));
        break;
        case 'yellow':
            console.log(chalk.yellow(mesWilders[i].nom));
        break;
        case 'red':
            console.log(chalk.red(mesWilders[i].nom));
        break;
        default:
            console.log(mesWilders[i].nom);
    }
}
/*console.log(chalk.blue(mesWilders.troisieme));
console.log(chalk.red(mesWilders.second));
console.log(chalk.green(mesWilders.premier));
console.log(chalk.yellow(mesWilders.quatrieme));*/

