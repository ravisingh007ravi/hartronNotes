const data = [
    { name: 'Ravi Singh', college: 'Axis College', salary: 2000 },
    { name: 'Aman Verma', college: 'IIT College', salary: 5000 },
    { name: 'Sneha Sharma', college: 'IG College', salary: 3000 },
    { name: 'Karan Mehta', college: 'Axis College', salary: 2500 },
    { name: 'Priya Yadav', college: 'IIT College', salary: 6000 },
    { name: 'Neha Gupta', college: 'IG College', salary: 3500 },
    { name: 'Rahul Kumar', college: 'Axis College', salary: 2800 },
    { name: 'Simran Kaur', college: 'IIT College', salary: 7000 },
    { name: 'Vikas Patel', college: 'IG College', salary: 3200 },
    { name: 'Anjali Roy', college: 'Axis College', salary: 2600 },
    { name: 'Rohit Sharma', college: 'IIT College', salary: 8000 },
    { name: 'Pooja Malhotra', college: 'IG College', salary: 4000 },
    { name: 'Deepak Singh', college: 'Axis College', salary: 2300 },
    { name: 'Nikita Arora', college: 'IIT College', salary: 7500 },
    { name: 'Arjun Nair', college: 'IG College', salary: 3600 },
    { name: 'Meena Joshi', college: 'Axis College', salary: 2700 },
    { name: 'Sahil Khan', college: 'IIT College', salary: 6500 },
    { name: 'Kavita Sharma', college: 'IG College', salary: 3900 },
    { name: 'Manish Tiwari', college: 'Axis College', salary: 2400 },
    { name: 'Divya Kapoor', college: 'IIT College', salary: 7200 }
];
// const obj ={}

// for(let std of data){
//     if(!obj[std.college]) {
//         obj[std.college]= 1
//     }
// }

// let arr = Object.keys(obj)

// console.log(arr)


let arr = [...new Set(data.map((v) => v.college))]

console.log(arr)




