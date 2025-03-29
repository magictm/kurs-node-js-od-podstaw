// index.js

// Importujemy zainstalowany pakiet chalk (wersja 4)
// require to sposób importowania modułów w standardzie CommonJS, domyślnym w Node.js
const chalk = require('chalk');

// Używamy różnych funkcji chalk do stylizowania tekstu w konsoli
console.log(chalk.blue('Witaj w świecie kolorowej konsoli!'));
console.log(chalk.red.bold('Ten tekst jest czerwony i pogrubiony.'));
console.log(chalk.green('To jest tekst na zielono.'));
console.log(chalk.yellow.bgBlack('A to jest żółty tekst na czarnym tle.'));
console.log(chalk.magentaBright.underline.italic('Można łączyć style!'));

// Przykład bardziej złożony
const error = chalk.bold.red;
const warning = chalk.keyword('orange'); // Można używać nazw kolorów CSS

console.log(error('Błąd: Coś poszło nie tak!'));
console.log(warning('Ostrzeżenie: Sprawdź konfigurację.'));

console.log(`
  ${chalk.blue('Możemy')} ${chalk.red('tworzyć')} ${chalk.green(
    'kolorowe'
)} ${chalk.yellow('komunikaty!')}
`);
