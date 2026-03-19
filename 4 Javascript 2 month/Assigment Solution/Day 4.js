// 1. Find the Largest Number in an Array:
// Write a function that takes an array of numbers and returns the largest number.

// 2. Array Sum:
// Write a function to calculate the sum of all elements in an array.

// 3. Reverse an Array:
// Write a function to reverse the elements of an array without using the built-in reverse() method.

// 4. Remove Duplicates from an Array:
// Write a function to remove duplicate elements from an array.

// 5. Find the Intersection of Two Arrays:
// Write a function that takes two arrays and returns a new array containing elements common to both arrays.

// 6. Array Chunking:
// Write a function that splits an array into chunks of a specified size.

// 7. Rotate an Array:
// Write a function to rotate an array by n positions.

// 8. Find the Missing Number:
// Write a function that takes an array containing numbers from 1 to n with one number missing, and returns the missing number.

// 9. Find the Pair with the Given Sum:
// Write a function that takes an array of numbers and a target sum, and returns the indices of the two numbers that add up to the target sum.

// 10. Reverse a String:
// Write a function to reverse a given string.

// 11. Check for Palindrome:
// Write a function to check if a given string is a palindrome.

// 12. Count Vowels in a String:
// Write a function to count the number of vowels in a given string.

// 13. Find the Longest Word in a Sentence:
// Write a function to find the longest word in a given sentence.

// 14. Title Case a Sentence:
// Write a function to convert a given sentence to title case (the first letter of each word is capitalized).

const pro14 = (str) => {
    // without inbuild function
    const arr = []
    let word = ''
    for(let char of str){
        if(char!=' '){
            word+=char
        }
        else{
            arr.push(word)
            word = ''
        }
    }
    if(word.length!=0) arr.push(word)
  

    // inbuild function
    // const arr = str.split(' ')
    let result = ''

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j == 0) result += arr[i][j].toUpperCase()
            else result += arr[i][j]
        }
        result += ' '
    }

    return result
}


// console.log(pro14('hello kaise ho ')) // Hello Kaise Ho
// console.log(pro14('byee ab nhi Milege')) // Byee Ab Nhi Milege



// 15. Check for Anagram:
// Write a function to check if two given strings are anagrams of each other.


const pro15 = (s1, s2) => {

    const arr1 = s1.split('').sort().join('')
    const arr2 = s2.split('').sort().join('')

    if (arr1 == arr2) return true
    else return false

}

// console.log(pro15('abc','bca'))
// console.log(pro15('abc','bdca'))



// 16. Character Frequency in a String:
// Write a function to find the frequency of each character in a given string.


const pro16 = (str) => {
    const fre = {}

    for (let char of str) {
        if (fre[char]) fre[char]++
        else fre[char] = 1
    }
    return fre
}
// console.log(pro16('hellohello'))





// 17. Remove Duplicate Characters from a String:
// Write a function to remove duplicate characters from a given string.


const pro17 = (str) => {
    const fre = {}

    for (let char of str) {
        if (fre[char]) fre[char]++
        else fre[char] = 1
    }

    let arr = Object.keys(fre)

    let result = ''

    for (let char of arr) {
        result += char
    }

    return result

}

// console.log(pro17('hello')) // helo
// console.log(pro17('byee')) // bye
// console.log(pro17('aaabbc')) // abc



// 18. Find the First Non-Repeating Character:
// Write a function to find the first non-repeating character in a given string.


const pro18 = (str) => {
    const fre = {}

    for (let char of str) {
        if (fre[char]) fre[char]++
        else fre[char] = 1
    }

    let arr = Object.entries(fre)

    let result = ''

    for (let c of arr) {
        if (c[1] == 1) result += c[0]
    }

    return result

}

// console.log(pro18('hello')) // heo
// console.log(pro18('byee')) // by
// console.log(pro18('aaabbc')) // c




// 19. String Compression:
// Write a function to compress a string using the counts of repeated characters (e.g., 'aaabbc' -> 'a3b2c1').

// solution without inbuild function

const Pro19 = (str) => {
    const fre = {}

    for (let char of str) {
        if (fre[char]) fre[char]++
        else fre[char] = 1
    }

    let arr = Object.entries(fre)

    let result = ''

    for (let c of arr) {
        result += c[0] + c[1]
    }

    return result
}

// console.log(Pro19('aaabbc')) // a3b2c1
// console.log(Pro19('hellohello')) //h2e2l4o2
// console.log(Pro19('hello hello byee')) // h2e4l4o2 2b1y1