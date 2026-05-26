let n = 5 


if (n > 1) {
    let n1 = 0
    let n2 = 1
    let sum = 0

    console.log(n1)
    console.log(n2)
    for (let i = 1; i <= n - 2; i++) {
        sum = n1 + n2
        console.log(sum);
        n1 = n2
        n2 = sum
    }
}
else if (n == 1)  console.log(0);
else  console.log('Invalid Range');


