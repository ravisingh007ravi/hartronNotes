// 1.Write a Java program to print the following pattern using nested loops:
// *****
// *****
// *****
// *****
// *****

// first way solve this problem
// let n = 5
// for (let i = 0; i < n; i++) {
//     let result = ''
//     for (let j = 0; j < n; j++) {
//         result+='* '
//     }
//     console.log(result)
// }


// 2 way solve this problem
// let n = 5
// let result = ''
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         result+='* '
//     }
//     console.log(result)
//     result = ''
// }

//  3 way and best way 

// let n = 5

// let result = ''
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         result+='* '
//     }    
//     result+='\n'
// }
// console.log(result) 



// 2.Create a program to print a right-angle triangle pattern:
// *
// **
// ***
// ****
// *****


// let n = 5

// let result = ''
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         result+='* '
//     }    
//     result+='\n'
// }
// console.log(result) 


// 3.Write a program to print an inverted right-angle triangle:
// *****
// ****
// ***
// **
// *


// let n = 5

// let result = ''
// for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//         result+='* '
//     }    
//     result+='\n'
// }
// console.log(result) 


// 4.Generate a pattern of numbers:
// 1
// 12
// 123
// 1234
// 12345

// let n = 5

// let result = ''
// for (let i = 0; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         result+=j
//     }    
//     result+='\n'
// }
// console.log(result) 

// 5.Generate a pattern of numbers:
// *
// ***
// *****
// *******
// *********

// let n = 5
// let result=''
// for (let i = 1; i <= n; i++) {

//     for (let j = i; j < n; j++) {
//         result += ' '
//     }
    
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         result += '*'
//     }
//     result +='\n'
// }
// console.log(result)





// 1.Generate a pattern of numbers: 3
// 1 2 3
// 4 5 6 
// 7 8 9

// let n = 3
// let bag = ''
// let c = 1
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         bag+=c + ' '
            // c++
//     }
//     bag+='\n'
// }

// console.log(bag)



// 2.Generate a pattern of numbers: 3
// A B C
// D E F 
// G H I

// let n = 3
// let bag = ''
// let c = 0
// let aplh = 'ABCDEGHHIJ'
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         bag+=aplh[c] + ' '
//         c++
//     }
//     bag+='\n'
// }

// console.log(bag)


// 3.Generate a pattern of numbers: 3
// 1 2 3
// 2 4 6
// 3 6 9 


let n = 3
let bag = ''

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        bag+=i*j + ' '
    }
    bag+='\n'
    
}

console.log(bag)

// 4.Generate a pattern of numbers: 3
// 1
// 2 4  
// 3 6 9

// 6.Generate a pattern of numbers: 3
// _ _ A
// _ A B
// A B C
