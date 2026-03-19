// destructing use only array and object best we use only object

let arr = [1, 2, 3]
let obj = { a: 1, b: 2, cat: 3 }

// const [x,y] = arr
// const [,,y] = arr
// console.log(y)

const { cat } = obj
console.log(cat)