function abc() {
    const Data = [
        { name: 'Ravi Singh', age: 28 },
        { name: 'Amit Kumar', age: 24 },
        { name: 'Priya Sharma', age: 22 },
        { name: 'Neha Verma', age: 25 },
        { name: 'Rahul Yadav', age: 27 },
        { name: 'Pooja Gupta', age: 23 },
        { name: 'Ankit Mishra', age: 26 },
        { name: 'Sneha Singh', age: 21 },
        { name: 'Vikas Patel', age: 29 },
        { name: 'Ritu Agarwal', age: 24 },
        { name: 'Deepak Chauhan', age: 30 },
        { name: 'Kajal Sharma', age: 22 },
        { name: 'Saurabh Tiwari', age: 28 },
        { name: 'Nisha Jain', age: 25 },
        { name: 'Arjun Verma', age: 27 },
        { name: 'Meera Kapoor', age: 23 },
        { name: 'Manish Gupta', age: 31 },
        { name: 'Aarti Yadav', age: 26 },
        { name: 'Rohit Singh', age: 29 },
        { name: 'Shalini Mishra', age: 24 },
        { name: 'Abhishek Kumar', age: 27 },
        { name: 'Komal Sharma', age: 22 },
        { name: 'Nitin Patel', age: 30 },
        { name: 'Payal Verma', age: 25 },
        { name: 'Ajay Chauhan', age: 28 },
        { name: 'Preeti Gupta', age: 23 },
        { name: 'Mohit Tiwari', age: 26 },
        { name: 'Divya Singh', age: 21 },
        { name: 'Karan Malhotra', age: 29 },
        { name: 'Anjali Jain', age: 24 },
        { name: 'Sumit Kumar', age: 27 },
        { name: 'Sakshi Sharma', age: 22 },
        { name: 'Harsh Verma', age: 28 },
        { name: 'Tanya Gupta', age: 23 },
        { name: 'Gaurav Singh', age: 30 },
        { name: 'Muskan Yadav', age: 25 },
        { name: 'Yash Patel', age: 26 },
        { name: 'Isha Kapoor', age: 21 },
        { name: 'Rajesh Kumar', age: 32 },
        { name: 'Simran Dogra', age: 27 },
        { name: 'Aditya Sharma', age: 24 },
        { name: 'Nandini Verma', age: 22 },
        { name: 'Prashant Singh', age: 29 },
        { name: 'Khushi Gupta', age: 20 },
        { name: 'Akash Mishra', age: 28 },
        { name: 'Riya Jain', age: 23 },
        { name: 'Vivek Tiwari', age: 31 },
        { name: 'Pallavi Sharma', age: 26 },
        { name: 'Shubham Kumar', age: 25 },
        { name: 'Tanvi Kapoor', age: 24 }
    ];

    let result = ``

    for (let user of Data) {

        result += `
         <div class="bg-white p-5 rounded-lg shadow-md shadow-amber-400 hover:shadow-red-400">
            <h1 class="text-xl font-semibold "><span class="font-bold">Name -</span> <span class="fontStyle">${user.name}</span></h1>
            <h1 class="text-xl font-semibold"><span class="font-bold">Age</span> - ${user.age}</h1>
        </div>
        `
    }

   return result
}
      
document.getElementById('a').innerHTML = abc()