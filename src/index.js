// // Ważne uwagi

// // Szczególne przypadki:

// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0

// // Stringi z liczbami:

// console.log(Number('  123  ')); // 123 (białe znaki są ignorowane)
// console.log(Number('123.45')); // 123.45
// console.log(Number('12,45')); // NaN (przecinek nie jest akceptowany)

// // Boolean - częste pułapki:

// console.log(Boolean('0')); // true (niepusty string)
// console.log(Boolean(' ')); // true (niepusty string)
// console.log(Boolean([])); // true (pusty array)

let wiek = '20';
let obliczenia = Number(wiek) + 5;

let wartoscWejsciowa = '5  a';
let liczba = Number(wartoscWejsciowa);
if (isNaN(liczba)) {
    console.log('Nieprawidłowa liczba');
}
