const p1 = function (s) {
    const romanToInt = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && romanToInt[s[i]] < romanToInt[s[i + 1]]) {
            result -= romanToInt[s[i]];
        }
        else {
            result += romanToInt[s[i]];
        }
    }
    return result;
};


// console.log(p1("III"))//3
// console.log(p1("LVIII"))//58
// console.log(p1("MCMXCIV"))//1994
// console.log(p1("XXXIII"))//33


const p2 =  (prices) => {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } 
        else if (prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }
    return profit;
}

console.log(p2([2,10,5,3,60,4]))

