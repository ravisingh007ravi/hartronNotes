import { user_model } from '../model/user_model.js'
import { validName, validEmail, validPassword } from '../validation/allValidation.js'


export const user_signup = async (req, res) => {
    try {

        const data = req.body
        const { name, email, password } = data


        if (!name) return res.status(400).send({ status: false, message: "Name is Require" })
        if (!email) return res.status(400).send({ status: false, message: "Email is Require" })
        if (!password) return res.status(400).send({ status: false, message: "Password is Require" })


        if (!validName(name)) return res.status(400).send({ status: false, message: "Name Invalid" })
        if (!validEmail(email)) return res.status(400).send({ status: false, message: "Email Invalid" })
        if (!validPassword(password)) return res.status(400).send({ status: false, message: "Password Invalid" })

        const CheckEmail = await user_model.findOne({ email: email })

        if (CheckEmail) return res.status(400).send({ status: false, message: "Email Already Present" })

        data.role ="user"

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