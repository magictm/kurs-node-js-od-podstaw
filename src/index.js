// function dodaj(a, b) {
//     let wynik = a + b;
//     // console.log('Suma to:', a + b);
//     return wynik;
// }

// let wynik = dodaj(3, 3);

// console.log('Wynik:', wynik);

// global.imie = 'Marcin';

// function powitanie() {
//     let imie = 'Kacper';
//     let wiadomosc = 'Witaj, ' + global.imie;
//     console.log(wiadomosc);
// }

// powitanie();
// powitanie();

// let a = 5;
// let b = 10;

// function dodaj(a, b) {
//     let wynik = a + b;
//     return wynik;
// }

// function zmienWartosc(x) {
//     x = x * 2;
//     console.log('Wartość wewnątrz funkcji:', x);
// }

// console.log(dodaj(a, b));
// zmienWartosc(a);

// console.log('a:', a);

// function wyslijEmail(odKogo, tekst = 'Cześć!', temat = 'Logowanie') {
//     console.log('Wiadomość wysłana!');
//     console.log('Od:', odKogo);
//     console.log('Treść:', tekst);
//     console.log('Temat:', temat);
//     console.log('------------------');
// }

// wyslijEmail('Janek', undefined, 'Rejestracja');

// Stworz funkcje o nazwie sprawdzWiek(wiek)
// Funkcja powinna przyjmowac jeden argument - wiek
// Funkcja zwraca true, jesli wiek jest wiekszy lub rowny 18,
// w przeciwnym razie false
// Nastepnie zadeklaruj zmienna wiekUzytkownika
// i przypisz jej wartosc 20
// Stworz sprawdzenie if, ktore sprawdzi czy wiekUzytkownika
// jest true jezeli tak to wyswietl komunikat "Jestes pelnoletni!"
// w przeciwnym razie wyswietl komunikat "Nie jestes pelnoletni!"

function sprawdzWiek(wiek) {
    if (wiek >= 18) {
        return true;
    } else {
        return false;
    }
}

let wiekUzytkownika = 20;
if (sprawdzWiek(wiekUzytkownika)) {
    console.log('Jesteś pełnoletni!');
} else {
    console.log('Nie jesteś pełnoletni!');
}
