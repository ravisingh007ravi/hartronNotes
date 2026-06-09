function abc() {
  const Data = [
    { name: 'Ravi Singh', age: 28, cs: 'shadow-red-400' },
    { name: 'Amit Kumar', age: 24, cs: 'shadow-pink-400' },
    { name: 'Priya Sharma', age: 22, cs: 'shadow-blue-400' },
    { name: 'Neha Verma', age: 25, cs: 'shadow-green-400' },
    { name: 'Rahul Yadav', age: 27, cs: 'shadow-orange-400' },
    { name: 'Pooja Gupta', age: 23, cs: 'shadow-purple-400' },
    { name: 'Ankit Mishra', age: 26, cs: 'shadow-yellow-400' },
    { name: 'Sneha Singh', age: 21, cs: 'shadow-cyan-400' },
    { name: 'Vikas Patel', age: 29, cs: 'shadow-lime-400' },
    { name: 'Ritu Agarwal', age: 24, cs: 'shadow-teal-400' },
    { name: 'Deepak Chauhan', age: 30, cs: 'shadow-indigo-400' },
    { name: 'Kajal Sharma', age: 22, cs: 'shadow-violet-400' },
    { name: 'Saurabh Tiwari', age: 28, cs: 'shadow-rose-400' },
    { name: 'Nisha Jain', age: 25, cs: 'shadow-emerald-400' },
    { name: 'Arjun Verma', age: 27, cs: 'shadow-sky-400' },
    { name: 'Meera Kapoor', age: 23, cs: 'shadow-amber-400' },
    { name: 'Manish Gupta', age: 31, cs: 'shadow-stone-400' },
    { name: 'Aarti Yadav', age: 26, cs: 'shadow-red-300' },
    { name: 'Rohit Singh', age: 29, cs: 'shadow-slate-400' },
    { name: 'Shalini Mishra', age: 24, cs: 'shadow-fuchsia-400' },
    { name: 'Abhishek Kumar', age: 27, cs: 'shadow-olive-400' }, // invalid
    { name: 'Komal Sharma', age: 22, cs: 'shadow-red-500' },
    { name: 'Nitin Patel', age: 30, cs: 'shadow-zinc-400' },
    { name: 'Payal Verma', age: 25, cs: 'shadow-cyan-500' },
    { name: 'Ajay Chauhan', age: 28, cs: 'shadow-rose-500' },
    { name: 'Preeti Gupta', age: 23, cs: 'shadow-yellow-300' },
    { name: 'Mohit Tiwari', age: 26, cs: 'shadow-purple-500' },
    { name: 'Divya Singh', age: 21, cs: 'shadow-orange-300' },
    { name: 'Karan Malhotra', age: 29, cs: 'shadow-cyan-300' },
    { name: 'Anjali Jain', age: 24, cs: 'shadow-fuchsia-300' },
    { name: 'Sumit Kumar', age: 27, cs: 'shadow-amber-500' },
    { name: 'Sakshi Sharma', age: 22, cs: 'shadow-red-400' },
    { name: 'Harsh Verma', age: 28, cs: 'shadow-orange-500' },
    { name: 'Tanya Gupta', age: 23, cs: 'shadow-violet-300' },
    { name: 'Gaurav Singh', age: 30, cs: 'shadow-sky-500' },
    { name: 'Muskan Yadav', age: 25, cs: 'shadow-green-500' },
    { name: 'Yash Patel', age: 26, cs: 'shadow-orange-600' },
    { name: 'Isha Kapoor', age: 21, cs: 'shadow-pink-500' },
    { name: 'Rajesh Kumar', age: 32, cs: 'shadow-indigo-500' },
    { name: 'Simran Dogra', age: 27, cs: 'shadow-pink-400' },
    { name: 'Aditya Sharma', age: 24, cs: 'shadow-blue-500' },
    { name: 'Nandini Verma', age: 22, cs: 'shadow-green-600' },
    { name: 'Prashant Singh', age: 29, cs: 'shadow-red-600' },
    { name: 'Khushi Gupta', age: 20, cs: 'shadow-teal-500' },
    { name: 'Akash Mishra', age: 28, cs: 'shadow-fuchsia-500' },
    { name: 'Riya Jain', age: 23, cs: 'shadow-blue-600' },
    { name: 'Vivek Tiwari', age: 31, cs: 'shadow-stone-500' },
    { name: 'Pallavi Sharma', age: 26, cs: 'shadow-green-400' },
    { name: 'Shubham Kumar', age: 25, cs: 'shadow-amber-300' },
    { name: 'Tanvi Kapoor', age: 24, cs: 'shadow-yellow-200' }
];
    let result = ``

    for (let user of Data) {

        result += `
         <div class="bg-white p-5 rounded-xl shadow-md ${user.cs} hover:shadow-red-400">
            <h1 class="text-xl font-semibold "><span class="font-bold">Name -</span> <span class="fontStyle">${user.name}</span></h1>
            <h1 class="text-xl font-semibold"><span class="font-bold">Age</span> - ${user.age}</h1>
        </div>
        `
    }

    return result
}

document.getElementById('a').innerHTML = abc()