// index.js

// Importujemy zainstalowaną bibliotekę lodash
const _ = require('lodash'); // _ to konwencjonalna nazwa dla lodash

const numbers = [1, 5, 8, 10, 1, 5];
const uniqueNumbers = _.uniq(numbers); // Używamy funkcji uniq z lodash

console.log(`Oryginalna tablica: ${numbers}`);
console.log(`Unikalne liczby: ${uniqueNumbers}`);

const message = 'hello world from lodash';
console.log(_.capitalize(message)); // Używamy funkcji capitalize
