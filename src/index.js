/*
Przykład komentarza składającego się z wielu linii.
Taki komentarz może opisywać działanie modułu,
złożonej funkcji lub sekcji kodu.
*/
console.log('To jest mój skrypt NodeJS');
/* 
test 1
test2
*/

/* adasdas */

// to jest komentarz jednowierszowy
/* 

*/

// let liczba1 = 5
// let liczba2 = 10

// function dodaj(liczba1, liczba2) {
//     return liczba1 + liczba2
// }

// Import modułu http
// const http = require('http');

// // Definiuję port na 8080
// const port = 8080;

// // Tworzę serwer
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); // Ustawiam nagłówek odpowiedzi
//     res.end('Hello World\n'); // Kończę odpowiedź i wysyłam tekst
// });

// // Uruchamiam nasłuchiwanie serwera na podanym porcie
// server.listen(port, () => {
//     // Wypisuję informację o starcie serwera w konsoli
//     console.log(`Serwer uruchomiony na porcie ${port}`);
// });

// const jsdoc = require('./jsdoc.js');

function processUserData(user) {
    if (!user.email) {
        // TODO: Dodać logowanie błędu lub domyślną obsługę braku emaila
        console.error('Brak adresu email użytkownika:', user.id);
    }

    // ... reszta logiki ...

    if (user.status === 'legacy') {
        // FIXME: Ta konwersja statusu jest tymczasowa i może powodować problemy
        user.status = 'active';
    }

    return user;
}
