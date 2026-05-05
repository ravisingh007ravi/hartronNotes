// // Nested if else 

// if (10 > 5) {
//     console.log('A')
//     if (10 > 5) {
//         console.log('B')
//         if (10 > 5) {
//             console.log('C')
//         }
//         else {
//             console.log('C False')
//         }
//     }
//     else {
//         console.log('B False')
//     }
// }
// else {
//     console.log('A false')
// }


// bank data 
let BankAtm = 7897
let accBal = 14500

// user input
let pin = 7897
let amount = 5000

if (BankAtm == pin) {
if (accBal >= amount) {
        console.log('Success')
    }
    else {
        console.log('Insufficient Balance')
    }
}
else {
    console.log('Wrong Pin')
}


