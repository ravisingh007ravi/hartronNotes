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



