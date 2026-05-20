// array is mutable we can change by index 
// array store all data type value like number, string, null , undefined, array, object etc

// let str = ''//empty string 0 or false 
// let arr = [] // empty array 0 or false

// console.log(10 && 'Ravi' && null && 123 && undefined);
// console.log(null || 'Ravi' || null || 123 || undefined);

// only data type provided index string and array

// let array = [1234, 'hello', null, undefined, true, false, [1, 2, 3, 4]]
// console.log(array[0]);
// console.log(array[1][0]);

// console.log(array[6][0]);
// array[0]='Ravi'
// console.log(array);



let arr = [1, 2]

// add last index 
arr.push(3)
arr.push(4)
console.log('Add value last index inbuld function push', arr);
// starting index
arr.unshift(0)
arr.unshift(-19)
console.log('Add value starting index inbuld function unshift', arr);

// delete value last index
arr.pop()
console.log('delete value last index inbuld function pop', arr);

// delete value statring index
arr.shift()
console.log('delete value starting index inbuld function shift', arr);

