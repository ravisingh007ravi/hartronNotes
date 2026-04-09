const showData = () => {
    let stdData = [
        { name: 'Amit', age: 22, college: 'DU' },
        { name: 'Neha', age: 24, college: 'IPU' },
        { name: 'Pooja', age: 23, college: 'MDU' },
        { name: 'Rahul', age: 25, college: 'Kurukshetra University' },
        { name: 'Simran', age: 21, college: 'Hartron' },
        { name: 'Ankit', age: 27, college: 'IIT Delhi' },
        { name: 'Priya', age: 22, college: 'DU' },
        { name: 'Vikas', age: 26, college: 'IPU' },
        { name: 'Sonia', age: 23, college: 'MDU' },
        { name: 'Deepak', age: 24, college: 'Kurukshetra University' },
        { name: 'Kiran', age: 22, college: 'Hartron' },
        { name: 'Mohit', age: 25, college: 'DU' },
        { name: 'Rohit', age: 26, college: 'IPU' },
        { name: 'Sneha', age: 23, college: 'MDU' },
        { name: 'Ajay', age: 28, college: 'Kurukshetra University' },
        { name: 'Komal', age: 21, college: 'Hartron' },
        { name: 'Nitin', age: 27, college: 'DU' },
        { name: 'Payal', age: 22, college: 'IPU' },
        { name: 'Arjun', age: 24, college: 'MDU' },
        { name: 'Meena', age: 23, college: 'Kurukshetra University' },
        { name: 'Sumit', age: 25, college: 'Hartron' },
        { name: 'Ritika', age: 22, college: 'DU' },
        { name: 'Manish', age: 26, college: 'IPU' },
        { name: 'Shivani', age: 21, college: 'MDU' },
        { name: 'Tarun', age: 24, college: 'Kurukshetra University' },
        { name: 'Pankaj', age: 27, college: 'Hartron' },
        { name: 'Nisha', age: 23, college: 'DU' },
        { name: 'Gaurav', age: 25, college: 'IPU' },
        { name: 'Anjali', age: 22, college: 'MDU' }
    ];

    let result = stdData.map((v)=>{
        return `
         <div class="bg-blue-400 rounded-md px-2 py-3 ">
            <h1><span class="text-black font-bold">Name</span> ${v.name}</h1>
            <h1><span class="text-black font-bold">Age</span> ${v.age}</h1>
            <h1><span class="text-black font-bold">College Name</span> ${v.college}</h1>
        </div>
        `
    })

    return result.join('')
}


console.log(showData())