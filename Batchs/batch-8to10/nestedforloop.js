let n = 5
let result = ''
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        result += (i * j) + ' '
    }
    result += '\n'
}

console.log(result);