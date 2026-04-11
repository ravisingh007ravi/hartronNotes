
//  greedy algorithm

const p1 = function (s) {
    const romanToInt = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
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
}


console.log(p1('III')) // 3
console.log(p1('LVIII')) // 58
console.log(p1('MCMXCIV')) // 1994
console.log(p1('XXXIII')) // 33








// Hashing / Hash Map Algorithm (One-pass)
const p2 = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (map[diff] !== undefined) {
            return [map[diff], i];
        }

        map[nums[i]] = i;
    }

    return [-1, -1];
};

// console.log(p2([2,7,11,15],9))

// Bit Manipulation Algorithm
const p3 = function (a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1;
        a = (a ^ b);
        b = carry;
    }
    return a;
};


// console.log(p3(4,3))


// Backtracking Algorithm
const p4 = function (candidates, target) {
    const result = [];

    function findCombinations(index, target, current) {
        if (target === 0) {
            result.push([...current]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                current.push(candidates[i]);
                findCombinations(i, target - candidates[i], current);
                current.pop();
            }
        }
    }

    findCombinations(0, target, []);
    return result;
};

// console.log(p4([1,2,1,2,3],4))