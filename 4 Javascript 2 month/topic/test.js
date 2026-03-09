// // block scope variable like let and const 
// // if else, nested if else ternary Operater 
// // loop - normal for, for of ,for in
// // function - normal function and arrow function 
// // string, array and object 

// // array.splice(start, deleteCount, newValue)

// // let arr = [1,2,3,4,5]

// // arr.splice(2,1)
// // console.log(arr)


// let a = '10'
// a = 20  // 20
// a = a + 10 + '1' //301
// a = a + 20 + '1' // 301201
// console.log(a)

const a = {
    name: 'A',
    age: 20
}

for(let v in a){
    console.log(v)
}