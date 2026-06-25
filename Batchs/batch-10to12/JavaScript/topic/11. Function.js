// let n = 2
// let n2 = 9 
// let n3 = 8

// if (n % 2 == 0) console.log('E')
// else console.log('O')

// if (n2 % 2 == 0) console.log('E')
// else console.log('O')

// if (n3 % 2 == 0) console.log('E')
// else console.log('O')


function EvenOrOdd(n) {
    if (n % 2 == 0) {
        return 'Even'
    }
    else {
        return "Odd"
    }
}

// console.log(EvenOrOdd(1))
// console.log(EvenOrOdd(12))


// function EvenOrOdd(n) {
//     return  n % 2 == 0 ? 'Even' : "Odd"
// }

// console.log(EvenOrOdd(1))






function CountVowel(str) {
    let count = 0

    for (let char of str) {
        if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
            count++
        }
    }

    return count
}

console.log(CountVowel('Hello'))
console.log(CountVowel('Byee'))
console.log(CountVowel('Ravi SIngh'))

