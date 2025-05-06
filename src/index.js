// let swiatlo = 'czerwone';

// if (swiatlo == 'zielone') {
//     console.log('prawda');
// } else {
//     console.log('fałsz');
// }

// let temperatura = -1;
// let padaDeszcz = true;

// if (temperatura < 15) {
//     console.log('Ubierz się ciepło!');
// } else {
//     console.log('Zakladam T-shirta!');
// }

// if (padaDeszcz) {
//     console.log('Weź parasol!');
// }

// if (padaDeszcz && temperatura < 0) {
//     console.log('OMG');
// }

// let ocena = 6;

// if (ocena === 6) {
//     console.log('Celujący!');
// } else if (ocena === 5) {
//     console.log('Bardzo dobry!');
// } else if (ocena === 4) {
//     console.log('Dobry!');
// } else if (ocena === 3) {
//     console.log('Dostateczny!');
// } else if (ocena === 2) {
//     console.log('Dopuszczający!');
// } else if (ocena === 1) {
//     console.log('Niedostateczny!');
// } else {
//     console.log('Nieznana ocena!');
// }

// let a = 1;

// switch (ocena) {
//     case 6:
//     case 5:
//         console.log('Bardzo dobry!');
//         break;
//     case 4:
//         console.log('Dobry!');
//         break;
//     case 3:
//         console.log('Dostateczny!');
//         break;
//     case 2:
//         console.log('Dopuszczający!');
//         break;
//     case 1:
//         console.log('Niedostateczny!');
//         break;
//     default:
//         console.log('Nieznana ocena!');
//         break;
// }

// let ocena = 5;

// // let czyZdalismy = false;

// // if (ocena >= 3) {
// //     czyZdalismy = true;
// // }

// let czyZdalismy = ocena >= 3 ? true : false;

// console.log(czyZdalismy);

const czyZalogowany = true;
const czyAdmin = false;

// if (czyZalogowany) {
//     console.log('Jesteś zalogowany!');
//     if (czyAdmin) {
//         console.log('Jesteś administratorem!');
//     } else {
//         console.log('Nie jesteś administratorem!');
//     }
// } else {
//     console.log('Nie jesteś zalogowany!');
// }

if (czyZalogowany && czyAdmin) {
    console.log('Jesteś administratorem!');
}
