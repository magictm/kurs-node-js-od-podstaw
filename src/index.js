// let i = 0;
// while (i < 10) {
//     i++;
//     if (i === 5) continue;
//     if (i === 8) break;

//     console.log(i);
// }

// console.log('haha');

// let i = 3;

// while (i) console.log(i--);

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i > 3);

// for (let i = 0; i < 3; i++) console.log(i);

// for (let i = 0; i < 3; ) {
//     console.log(i++);
// }

// for (;;) {
//     console.log('infinite loop');
//     break;
// }

// let i = 0;
// if (i < 3) console.log(i++);
// if (i < 3) console.log(i++);
// if (i < 3) console.log(i++);

// const daneWejsciowe = ['1', '2', '', '4'];
// let suma = 0;
// let index = 0;

// while (true) {
//     let value = daneWejsciowe[index];
//     index++;

//     if (!value) break;

//     console.log(typeof Number(value));

//     suma += Number(value);
//     // suma += +value;
// }

// console.log('Suma:', suma);

// console.log('done');

//Symulacja pobierania danych od użytkownika
const dane = [
    ['1', '2', '3'],
    ['4', '', '6'], // Pusty string w drugim wierszu
    ['7', '8', '9'],
];

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = dane[i][j];

        console.log(`Wartość na pozycji (${i},${j}): ${input}`);
        break outer;
    }
}
