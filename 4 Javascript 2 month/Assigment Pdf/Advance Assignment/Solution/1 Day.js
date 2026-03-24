const p1 = (str)=>{
    const roman ={
        'I':1,
        'IV':4,
        'V':5,
        'IX':9,
        'X':10,
        'XL':40,
        'L':50,
        'XC':90,
        'C':100,
        'CD':400,
        'D':500,
        'CM':900,
        'M':1000
    }
}

console.log(p1("III"))//3
console.log(p1("LVIII"))//58
console.log(p1("MCMXCIV"))//1994
console.log(p1("XXXIII"))//33
