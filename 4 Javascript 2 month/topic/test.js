const pro1=(str)=>{
    let obj={}
    for(let char of str){
        if(obj[char])obj[char]++
        else(obj[char]=1)
    }

     let arr = Object.entries(obj)
     console.log(arr)
     let vowel=""
     let con = ''
     for(let char of arr){
        let lower = char[0].toLowerCase()
        if(lower=='a'|| lower=='e'|| lower=='i'|| lower=='o'|| lower=='u'){
            vowel+=char[0]+char[1]+' '
        }
        else{
            con+=char[0]+char[1]+' '
        }
     } 

     return `${vowel}\n${con}`
}
console.log(pro1('aabbchello'))

