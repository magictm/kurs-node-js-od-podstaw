// try {
//     console.log('Początek bloku try');
//     niemazmienna; // Próba użycia niezdefiniowanej zmiennej (spowoduje błąd)
//     console.log('Koniec bloku try (ta linia się nie wykona)'); // Ta linia się nie wykona
// } catch (error) {
//     const props = Object.getOwnPropertyNames(error);
//     for (const prop of props) {
//         console.log(`${prop}:`);
//     }
//     console.log('Wystąpił błąd!');
//     console.log('Typ błędu:', error.name); // np. ReferenceError
//     console.log('Komunikat błędu:', error.message); // np. niemazmienna is not defined
//     console.log('Stos błędu:', error.stack); // Szczegółowe informacje o miejscu wystąpienia błędu
// }

// console.log('Kod po bloku try...catch'); // Ta linia się wykona

// function dzielenie(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error('Nie można dzielić przez zero!'); // Rzucenie błędu
//         }

//         return a / b;
//     } catch (error) {
//         console.log('Blad dzielenia przez zero:', error.message); // Obsługa błędu
//         return null;
//     }
// }

// console.log(dzielenie(10, 2)); // 5
// console.log(dzielenie(10, 0)); // Wyrzuci błąd: Uncaught Error: Nie można dzielić przez zero!

// function obliczPoleKwadratur(bok) {
//     try {
//         if (typeof bok !== 'number') {
//             throw new TypeError('Argument musi być liczbą!'); // Rzucenie błędu
//         }
//         if (bok <= 0) {
//             throw new RangeError('Bok musi być większy od zera!'); // Rzucenie błędu
//         }
//         return bok * bok;
//     } catch (error) {
//         console.log('Błąd:', error.message, error.name); // Obsługa błędu
//         return null;
//     }
// }

// console.log(obliczPoleKwadratur(5));
// console.log(obliczPoleKwadratur(-2));
// console.log(obliczPoleKwadratur('abc'));

// console.log('DONE!');

// try {
//     console.log('test');
//     a;
// } catch (error) {
//     console.log('catch');
// } finally {
//     console.log('finally');
// }

function przetworzPlik() {
    let plik;
    try {
        plik = otworzPlik('dane.txt'); // Załóżmy, że to funkcja otwierająca plik
        // ... przetwarzanie pliku ...
        if (!plik) {
            throw new Error('Plik jest pusty');
        }
        let zawartosc = plik.czytaj();
        console.log(zawartosc);
    } catch (error) {
        console.error('Błąd podczas przetwarzania pliku:', error.message);
    } finally {
        if (plik) {
            plik.zamknij(); // ZAWSZE zamykamy plik, nawet jeśli wystąpił błąd
            console.log('Plik zostal zamkniety');
        }
    }
}

// Symulacja funkcji do otwierania i czytania z pliku (dla Node.js)
function otworzPlik(nazwa) {
    if (nazwa === 'dane.txt') {
        return {
            czytaj: () => 'Zawartosc pliku',
            zamknij: () => console.log('Zamykanie pliku...'),
        };
    } else {
        return null; // Zwracamy null w przypadku błędu
    }
}

przetworzPlik('dane.txt');
przetworzPlik('pusty.txt');
