// DSA base on 2 method time abd space compexity

// most important method is time complexity

// time complexity base on 3 case best, worst and average

// 1.  0(1)
const arr = [1, 2, 3, 4, 5]
console.log(arr[0]) // time complexity O(1)

// 2 .  logn
for (let i = 0; i < 10 / 2; i++) {
    console.log(i) // time complexity 0(logn)
}

// 3 .  o(n)
for (let i = 0; i < 10; i++) {
    console.log(i) // time complexity o(n)
}


// 4 . o(nlogn)
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10 / 2; j++) {
        console.log(i, j) // time complexity o(nlogn)
    }
}

// 5. o(2n)
{
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
}

// 6. o(4n)
{
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
}

// 7. O(√n)
let n = 100
for (let i = 0; i < Math.sqrt(n); i++) {
    console.log(i) // time complexity o(√n)
}

// 8. 2nlogn

{
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
    for (let i = 0; i < 10; i++) {
        console.log(i) // time complexity o(n)
    }
    for (let i = 0; i < 10 / 2; i++) {
        console.log(i) // time complexity o(logn)
    }
}

// 9. n+n2
for (let i = 0; i < 10; i++) {
    console.log(i) // time complexity o(n)
}
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i, j) // time complexity o(n2)
    }
}