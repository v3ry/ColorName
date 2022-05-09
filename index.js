import chalk from 'chalk';
const listNames = [ 'Sonia', 'Daniel', 'Louloup', 'Ricolas'];

for (let i = 0; i < listNames.length; i++) {
    let rand = Math.floor(Math.random() * 10);
    switch(rand){
        case 0:
            console.log(chalk.blue(`Hello ${listNames[i]}`));
            break;
        case 1:
            console.log(chalk.red(`Hello ${listNames[i]}`));
            break;
        case 2:
            console.log(chalk.blue(`Hello ${listNames[i]}`));
            break;
        case 3:
            console.log(chalk.white(`Hello ${listNames[i]}`));
            break;
        case 4:
            console.log(chalk.yellow(`Hello ${listNames[i]}`));
            break;
        case 5:
            console.log(chalk.magenta(`Hello ${listNames[i]}`));
            break;
        case 6:
            console.log(chalk.cyan(`Hello ${listNames[i]}`));
            break;
        case 7:
            console.log(chalk.gray(`Hello ${listNames[i]}`));
            break;
        case 8:
            console.log(chalk.green(`Hello ${listNames[i]}`));
            break;
        case 9:
            console.log(chalk.greenBright(`Hello ${listNames[i]}`));
            break;
    }

}
/*
console.log(listNames.length);
console.log(typeof(listNames));
console.log(chalk.blue(`Hello ${listNames[0]}`));
console.log(chalk.red(`Hello ${listNames[1]}`));
console.log(chalk.green(`Hello ${listNames[2]}`));
console.log(chalk.cyan(`Hello ${listNames[3]}`));
*/