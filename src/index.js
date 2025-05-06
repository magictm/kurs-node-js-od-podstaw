// const firstName = 'Marcin';
// const lastName = 'Stawowczyk';

// // const fullName = firstName + ' ' + lastName;
// const fullName = `${firstName} ${lastName}`; // Template literal

// const channelInfo = 'Kanał YouTube: ' + fullName; // String concatenation

// console.log(fullName);
// console.log(channelInfo);

// let promoMessage = 'Specjalna oferta na ';
// // promoMessage = promoMessage + 'wszystkie produkty!'; // String concatenation
// promoMessage += 'banany';
// promoMessage += ' i jabłka!'; // String concatenation

// console.log(promoMessage);

// const shoppingList = ['banany', 'jabłka', 'gruszki', 'pomarańcze', 'truskawki'];

// let message = 'Na liście zakupów są: '; // Template literal

// for (let i = 0; i < 5; i++) {
//     message += shoppingList[i];
//     if (i !== 4) {
//         message += ', ';
//     } else {
//         message += '.';
//     }
// }

// console.log(message);

// Rozwiazanie

const shoppingList = ['banany', 'jabłka', 'gruszki', 'pomarańcze', 'truskawki'];

let message = 'Na liście zakupów są: '; // Template literal

for (let i = 0; i < 5; i++) {
    message += shoppingList[i];
    if (i !== 3 && i !== 4) {
        message += ', ';
    } else if (i === 3) {
        message += ' i ';
    } else {
        message += '.';
    }
}

console.log(message);
