let n = 3
let bag = ''
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        bag = bag + '* '
    }
    bag=bag+'\n'
}
console.log(bag)


