// Normal Function 

// console.log(a())
// function a(){
//     return 'hii'
// }

// // Arrow Function 

// const b = (n)=> n %2==0 ? 'Even' : 'Odd'

// console.log(b(9))
// console.log(b(50))
// console.log(b(59))


const p1 = (n) => {

    let result = ''

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += '* '
        }
        result += '\n'
    }

    return result

}

console.log(p1(5))
console.log(p1(2))
console.log(p1(8))

