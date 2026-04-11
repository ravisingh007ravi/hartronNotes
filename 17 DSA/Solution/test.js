// const obj ={ name: 'Ravi Singh', college: 'Axis College', salary: 2000 }

// console.log(obj[name])// time complexity O(1)

// for(let i=0;i<5/2;i++){
//     console.log(i)
// } // time complexity logn

// for(let i=0;i<5;i++){
//     console.log(i)
// } // time complexity O(n)


// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         console.log(i,j)
//     }
// } // time complexity O(n^2)

// for(let i=0;i<5;i++){
//     for(let j=0;j<5/2;j++){
//         console.log(i,j)
//     }
// } // time complexity nlogn 

// time complexity base on 3 case best, worst and average

// find prime no worst case 

// const worst = (n)=>{

//     let fac = 0 

//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             fac++
//         }
//     }
//     if(fac==2) return true 
//     else return false
  

// }

// console.log(worst(2))
// console.log(worst(21))
// console.log(worst(7))
// console.log(worst(4))

// const average = (n)=>{

//     let isprime = true 
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return false
//         }
       
//     }
//    return isprime
// }
// console.log(average(999999999989))

const best = (n) => {
    if (n <= 1) return false; // time complexity O(1)

    let limit = Math.sqrt(n);

    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(best(999999999989))
