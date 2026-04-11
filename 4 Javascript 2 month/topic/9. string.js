// // let and const are block and local scope variable
// // var is global scope variable



// const a = 10
// {
//     console.log(a)
// }

// let a = '. 1../.23'
// a[0] = 1
// console.log(a[0],a[2])
// console.log(a)

// let arr = ['fdsafdsafsd',2,3]
// arr[0] =1
// console.log(arr[0])

let arr = [1, 2, 3]
// add value last index
arr.push(555)//[1,2,3,555]
arr.push(1)//[1,2,3,555,1]
// add value first index
arr.unshift(0)//[0,1,2,3,555]
arr.unshift(1)//[1,0,1,2,3,555]
arr.unshift(2)//[2,1,0,1,2,3,555]
console.log(arr)

//delete last index value 
arr.pop()//[2,1,0,1,2,3]
arr.pop()//[2,1,0,1,2]
console.log(arr)
//delete first index value 
arr.shift()//[1,0,1,2,3]
arr.shift()//[0,1,2]
console.log(arr)

` `