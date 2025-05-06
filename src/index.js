function dodaj(a, b) {
    return a + b;
}
function odejmij(a, b) {
    return a - b;
}
function pomnoz(a, b) {
    return a * b;
}
function podziel(a, b) {
    if (b === 0) {
        throw new Error('Nie można dzielić przez zero!');
    }
    return a / b;
}
function potega(a, b) {
    if (b < 0) {
        throw new Error('Potęga nie może być ujemna!');
    }
    return a ** b;
}
function modulo(a, b) {
    if (b === 0) {
        throw new Error('Nie można dzielić przez zero!');
    }
    return a % b;
}

// console.log(dodaj(2, 3)); // 5
// console.log(odejmij(5, 3)); // 2
// console.log(pomnoz(2, 3)); // 6
// console.log(podziel(6, 3)); // 2
// console.log(potega(2, 3)); // 8
// console.log(modulo(5, 3)); // 2

// console.log(podziel(5, 0)); // NaN
// console.log(potega(2, -3));

function kalkulator(operacja, liczby) {
    try {
        if (!Array.isArray(liczby) || liczby.length !== 2) {
            // console.log('not ok');
            throw new Error('Niepoprawny argument liczby!');
        }

        const a = liczby[0];
        const b = liczby[1];

        // console.log('liczby', liczby);
        // console.log('a:', a, 'b:', b, 'operacja:', operacja);

        let wiadomosc =
            'Wykonuję operację: ' + operacja + ' na liczbach: ' + a + ' i ' + b;
        let wynik = 0;

        switch (operacja) {
            case 'dodaj':
                wynik = dodaj(a, b);
                break;
            case 'odejmij':
                wynik = odejmij(a, b);
                break;
            case 'pomnoz':
                wynik = pomnoz(a, b);
                break;
            case 'podziel':
                wynik = podziel(a, b);
                break;
            case 'potega':
                wynik = potega(a, b);
                break;
            case 'modulo':
                wynik = modulo(a, b);
                break;
            default:
                throw new Error('Nieznana operacja!');
        }
        wiadomosc += ' Wynik: ' + wynik;
        console.log(wiadomosc);
        return wynik;
    } catch (error) {
        console.error('Wystąpił błąd:', error.message);
        return null;
    }
}

console.log(kalkulator('dodaj', [2, 3]));
console.log(kalkulator('odejmij', [2, 3]));
console.log(kalkulator('pomnoz', [2, 3]));
console.log(kalkulator('podziel', [2, 3]));
console.log(kalkulator('potega', [2, 3]));
console.log(kalkulator('modulo', [2, 3]));
console.log(kalkulator('test', [2, 3]));
