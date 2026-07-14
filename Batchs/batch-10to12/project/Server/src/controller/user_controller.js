import { user_model } from '../model/user_model.js'

export const user_signup = async(req, res) => {
    try {
 
        const data = req.body

        const db = await user_model.create(data)

        res.status(200).send({ message: db })
    }
    catch (err) {
        res.status(500).send({ "message": err.message })
    }
}

// status code 
// 100 to 500
// 201 new data create 
// 200 ok 
// 400 user site error 
// 404 not found 
// 500 server 


export const getAllUser = (req, res) => {
    res.send("hii")
}