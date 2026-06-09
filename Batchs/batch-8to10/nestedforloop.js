// let str = 'world'
// let count = 0
// let isVowel = '' // eo
// let vowelAndIndex = '' // 1 2 4 0 

// for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase()

//     if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
//         count++
//         isVowel += str[i]
//         vowelAndIndex += i + ' ' + str[i] + ' '
//     }
// }

// console.log(count)
// console.log(isVowel)
// console.log(vowelAndIndex)

// // let a = 'ravi'
// // console.log(['ravi','komal'].includes(a))



console.log(abc())

// normal loop
function abc() {
    return 'hello'
}

// arrow function
const xyz = (n) => n % 2 == 0 ? 'Even' : "Odd"


console.log(xyz(5))
console.log(xyz(8))
