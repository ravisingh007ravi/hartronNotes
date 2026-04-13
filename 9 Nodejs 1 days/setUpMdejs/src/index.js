import express from 'express'
import cors from 'cors'
const app = express()

const port = 8080
app.use(cors()) 
// Api work in 4 method CRUD
// C = create = post
// R = read = get
// U = update = put
// D = delete = delete 

const showData = (req,res)=>{

    const data = [
    { name: 'Jhon', age: 27 },
    { name: 'Ravi', age: 25 },
    { name: 'Amit', age: 23 },
    { name: 'Neha', age: 22 },
    { name: 'Simran', age: 24 },
    { name: 'Karan', age: 26 },
    { name: 'Pooja', age: 21 },
    { name: 'Rahul', age: 28 },
    { name: 'Anjali', age: 23 },
    { name: 'Vikas', age: 27 },
    { name: 'Suman', age: 22 },
    { name: 'Deepak', age: 29 },
    { name: 'Priya', age: 24 },
    { name: 'Arjun', age: 26 },
    { name: 'Kavita', age: 23 },
    { name: 'Manish', age: 30 },
    { name: 'Sneha', age: 21 },
    { name: 'Rohit', age: 25 },
    { name: 'Nisha', age: 22 },
    { name: 'Tarun', age: 28 },
    { name: 'Komal', age: 23 }
];

    res.send({status:true, sucess :'ok',msg:'get all data',data:data})
}


app.get('/test',showData)


app.listen(port,()=>console.log(`Server is running port - http://localhost:${port}/`))

