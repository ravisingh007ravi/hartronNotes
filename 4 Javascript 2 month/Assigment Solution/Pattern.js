// 1.Write a Java program to print the following pattern using nested
// loops:
// *****
// *****
// *****
// *****
// *****



const p1 = (n, v) => {

    let result = ''

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += v
        }
        result += '\n'
    }
    return result
}

// console.log(p1(5, '*'))
// console.log(p1(5, '7'))





// 2.Create a program to print a right-angle triangle pattern:
// *
// **
// ***
// ****
// *****


const p2 = (n, v) => {

    let result = ''

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            result += v
        }
        result += '\n'
    }
    return result
}


// console.log(p2(5,'*'))



// 3.Write a program to print an inverted right-angle triangle:
// *****
// ****
// ***
// **
// *
const p3 = (n, v) => {

    let result = ''

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            result += v
        }
        result += '\n'
    }
    return result
}

// console.log(p3(5,'*'))




// 4.Generate a pattern of numbers:
// 1
// 12
// 123
// 1234
// 12345

const p4 = (n) => {

    let result = ''

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += j
        }
        result += '\n'
    }
    return result
}

// console.log(p4(5))

// 5.Write a program to print a pyramid pattern of stars:
//    *
//   ***
//  *****


const p5 = (n) => {

    let result = ''

    for (let i = 1; i <= n; i++) {

        for (let j = i; j < n; j++) {
            result += ' '
        }

        for (let j = 0; j < 2 * i - 1; j++) {
            result += '*'
        }

        result += '\n'

    }
    return result
}

// console.log(p5(6))



// 6.Write a Java program to print the following pattern:
// 1
// 22
// 333
// 4444
// 55555


const p6 = (n) => {

    let result = ''
    let c = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += c
        }
        c++
        result += '\n'
    }
    return result
}

// console.log(p6(5))


// 7.Create a program to print a diamond shape pattern:
// *
// ***
// *****
// *******
// *****
// ***
// *

const p7 = (n) => {

    let result = ''

    for (let i = 1; i <= n; i++) {

        for (let j = i; j < n; j++) {
            result += ' '
        }

        for (let j = 0; j < 2 * i - 1; j++) {
            result += '*'
        }

        result += '\n'

    }

    for (let i = n; i >= 0; i--) {

        for (let j = i; j < n; j++) {
            result += ' '
        }

        for (let j = 0; j < 2 * i - 1; j++) {
            result += '*'
        }

        result += '\n'

    }
    return result
}

// console.log(p7(5))

// 8. Generate the following pattern using nested loops:
// 54321
// 4321
// 321
// 21
// 1

const p8 = (n) => {

    let result = ''
    let count = n
    for (let i = 0; i < n; i++) {
        let c = count
        for (let j = i; j < n; j++) {
            result += c
            c--
        }
        count--
        result += '\n'
    }
    return result
}
// console.log(p8(5))


// 9.Write a program to print a hollow square pattern with stars:
// *****
// *   *
// *   *
// *   *
// *****

const p9 = (n) => {

    let result = ''

    for (let i = 1; i <= n; i++) {
        result += '*'
    }
    result += '\n'


    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n; j++) {
            if (j == 0 || j == n - 1) {
                result += '*'
                
            }
            else {
                result += ' '
            }
        }
        result += '\n'
    }

    for (let i = 1; i <= n; i++) {
        result += '*'
    }
   

    return result
}

// console.log(p9(10))  

// 10.Create a program to print a mirrored right-angle triangle:
// *
// **
// ***
// ****
// *****





//

const p11 = (n) => {
    let result =''
    let c = 1
    let a = 1
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(c%2==1){
                result+='.'
            }
            else{
                result+=a
                a++
            }
            c++
        }
        result+='\n'
    }

    return result
}

console.log(p11(3))


 