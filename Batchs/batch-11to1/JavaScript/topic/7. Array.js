let n = 10000000019

let isPrime = true

for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
        isPrime = false
        break
    }
}

if (isPrime) console.log('Prime');
else console.log('Not Prime');