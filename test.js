let arr = 'hii hii'

let obj ={}

for(let char of arr){
    if(obj[char]) obj[char]++
    else obj[char] = 1
}

let arr2 = Object.keys(obj).join('')

console.log(arr2)