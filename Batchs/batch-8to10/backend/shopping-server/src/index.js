import express from 'express'
import { userAllUSer, order } from './test.js'

const app = express()

const port = 5000





app.get('/api/user/getalluser',userAllUSer)
app.get('/api/user/order',order)


app.listen(port, () => console.log(`server is running port = ${port}`))