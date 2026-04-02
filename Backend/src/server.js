const express =  require('express')

const app = express()
const port = 8080

const apitest = (req,res)=>{
    res.send({name:'hello'})
}

app.get('/test',apitest)

app.listen(port,console.log(`server is runnig port = ${port}`))                                     