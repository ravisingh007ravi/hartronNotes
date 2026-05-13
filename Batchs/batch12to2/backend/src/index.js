import express from 'express'

const app = express()
const port = 8080

const abc =(req,res)=>{
    res.send("ok")
}

const bb =(req,res)=>{
    res.send({name:'sad',age:"34"})
}

app.get('/a',abc)
app.get('/b',bb)

app.listen(port, () => console.log(`server is running = ${port}`))


