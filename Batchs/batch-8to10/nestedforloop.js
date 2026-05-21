let n = 5
let bag = ''
for (let i = 1; i <= n; i++) { 
    for (let j = 1; j <= i; j++) { 
        bag+='* '
    }
    bag+='\n'
}

console.log(bag);


// let n = 3
// let bag = ''
// for (let i = 1; i <= n; i++) { 
//     for (let j = 1; j <= n; j++) { 
//         bag+='* '
//     }
//     console.log(bag);
//     bag=''
// }