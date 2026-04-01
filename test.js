// for loop , while loop , do while loop, for in loop, for of loop

// for loop 

let n = 5
for (let i = 1; i <= n; i++) {
    console.log(i)
}
 
// while loop 

{
    let i = 1
    while (i <= n) {
        console.log(i)
        i++
    }

}

// do while loop 

{
    let i = 1
    do {
        console.log(i)
        i++
    } while (i <= n)
}

// for of and for in loop work only array and string

// for in loop  

{
    let str =  'hello'
    for (let i in str) {
        console.log(i,str[i])
    }
}

// for of loop  

{
    let str =  'hello'
    for (let i of str) {
        console.log(i)
    }
}

