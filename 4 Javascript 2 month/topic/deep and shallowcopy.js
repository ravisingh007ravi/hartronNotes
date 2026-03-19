// type of datatype

// 1. primitive datatype
// 2. non primitive datatype

// 1. primitive datatype -> number, string, boolean, null, undefined, symbol
// 2. non primitive/reference datatype -> array, object

// let a = 10
// b = a
// b = 100
// console.log(a, b)


let arr = [1, 2, 3]
// let arr2 = arr
// arr2[0] = 100
// console.log(arr, arr2)


// without inbuild function
// let arr2 = []

// for(let n of arr){
//     arr2.push(n)
// }

// arr2[0] = 100
// console.log(arr,arr2)


// with inbuild function
// Array
// arr2 = [...arr] // shallow copy
// arr2[0] = 100
// console.log(arr,arr2)

// // object
// const a = { name: 'shubham', age: 22 } // shallow copy
// const b = { ...a}
// b.name = 'sumit'
// console.log(a, b)


const obj = {
    name: 'shubham',
    age: 22,
    address: {
        city: 'bhopal',
        state: 'mp'
    }
}
// deep copy
const obj2 = JSON.parse(JSON.stringify(obj))
obj2.address.city = 'indore'
console.log(obj)
console.log(obj2)  