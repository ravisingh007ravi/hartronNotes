// 1. Print Numbers from 1 to 10:Write a program to print numbers from 1 to 10 using a
// for loop


{
    console.log('Solution 1');
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    console.log();
}

// 2. Sum of First N Natural Numbers:Write a program to calculate the sum of the first
// N natural numbers, where N is provided by the user.
{
    console.log('Solution 2');
    let sum = 0
    let n = 5
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    console.log(sum);
    console.log();
}
// 3. Factorial of a Number:Write a program to find the factorial of a given number
// using a for loop.

{
    console.log('Solution 3');
    let fac = 1
    let n = 5
    for (let i = 1; i <= n; i++) {
        fac *= i
    }
    console.log(fac);
    console.log();
}



// 4. Print Even Numbers between 1 and 20:write a program to print all even numbers
// between 1 and 20.
{
    console.log('Solution 4');

    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    console.log();
}


// 5. Multiplication Table:Write a program to print the multiplication table of a number
// provided by the user.

{
    console.log('Solution 5');
    let n = 6
    for (let i = 1; i <= 10; i++) {
        console.log(n, '*', i, '=', n * i);
    }
    console.log();
}

// 6. Reverse a String:Write a program to reverse a string using a for loop.
{
    console.log('Solution 6');
    let str = 'hello'
    let n = ''
    for (let i = str.length - 1; i >= 0; i--) {
        n += str[i]
    }
    console.log(n);
    console.log();
}

// 7. Count Vowels in a String:Write a program to count the number of vowels in a
// given string.


{
    console.log('Solution 7');
    let str = 'hEllo'
    let n = 0
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i].toUpperCase()
        if (char == 'A' || char == 'E' || char == 'O' || char == 'U' || char == 'I') {
            n++
        }
    }
    console.log(n);
    console.log();
}

// 8. Check Prime Number:Write a program to check if a given number is prime.

{
    console.log('Solution 8');
    let fac = 0
    let n = 7

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            fac++
        }
    }

    if (fac == 2) {
        console.log('Prime');
    }
    else {
        console.log('Not Prime');
    }
    console.log();
}

// 9. Find the Largest Number in an Array:Write a program to find the largest number
// in a given array.

{
    console.log('Solution 9');

    let arr = [1, 2, 1, -21, 3, 4, 5, 6]
    let max = 0 // 21

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max=arr[i]
        }
    }
    console.log(max);

    console.log();
}


// 10. Sum of Elements in an Array:Write a program to calculate the sum of all elements
// in an array.

{
    console.log('Solution 10');
    let arr = [1, 6, 5]
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum);
    console.log();
}

// 11. Fibonacci Sequence:Write a program to generate the first N terms of the Fibonacci
// sequence.


{
    console.log('Solution 11');
    let n = 10
    let n1 = 0
    let n2 = 1
    let sum = 0
    console.log(n1);
    console.log(n2);
    for (let i = 1; i <= n - 2; i++) {
        sum = n1 + n2
        console.log(sum);
        n1 = n2
        n2 = sum
    }
    console.log();
}

// 12. Palindrome Check:Write a program to check if a given string is a palindrome.

{
    console.log('Solution 12');
    let str = 'maam'
    let n = ''
    for (let i = str.length - 1; i >= 0; i--) {
        n += str[i]
    }
    if (n == str) {
        console.log('P');
    }
    else {
        console.log('N P');
    }
    console.log();
}

// 13. Count Digits in a Number:Write a program to count the number of digits in a given
// number.

{
    console.log('Solution 13');
    let str = 'hel1n3h4'
    let c = 0
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            c++
        }
    }
    console.log(c);

}