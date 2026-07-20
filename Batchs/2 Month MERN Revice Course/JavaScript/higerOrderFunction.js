// clouser 

// const even = (n)=> n%2==0 ? "Even" : "Odd"


// console.log(even(5))
// console.log(even(9))
// console.log(even(50))


// const a = ()=>{
//     let c = 0 
//     c++
//     return c
// }

// console.log(a())
// console.log(a())
// console.log(a())

// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// let a = counter()
// console.log(a())
// console.log(a())
// console.log(a())
// console.log(a())

// map()
// filter()
// reduce()
// forEach()
// find()
// findIndex()
// some()
// every()
// sort()
// flatMap()




function printNumbers(num) {
    if (num == 10) return
    console.log(num)
    printNumbers(num + 1)
}

printNumbers(1)
