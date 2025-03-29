// index.js
const chalk = require('chalk'); // Zakładając, że masz chalk z poprzedniej lekcji

function printMessage() {
    const message = 'Nodemon czuwa! Czas: ' + new Date().toLocaleTimeString();
    // const message = 'ZMIANA! Nodemon wykrył i przeładował! Czas: ' + new Date().toLocaleTimeString();
    console.log(chalk.cyan(message));
}

console.log(chalk.yellowBright('[nodemon] Start aplikacji...'));
printMessage();

// Symulacja jakiejś logiki, która działa co kilka sekund
// setInterval(printMessage, 5000);
