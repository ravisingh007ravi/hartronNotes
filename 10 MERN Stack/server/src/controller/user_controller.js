import user_model from '../model/user_model.js'
import { validEmail, validName, validPassword } from '../validation/allValidation.js'
export const register = async (req, res) => {
    try {
        const data = req.body

        const { name, email, password, gender } = data

        if (!email) return res.status(400).send({ status: false, sucess: false, message: "Email is Required" })
        if (!validEmail(email)) return res.status(400).send({ status: false, sucess: false, message: "Invalid email" })
      
        const checkUser = await user_model.findOne({ email: email })
        if (checkUser) return res.status(400).send({ status: false, sucess: false, message: "User Already Present" })


        if (!name) return res.status(400).send({ status: false, sucess: false, message: "Name is Required" })
        if (!validName(name)) return res.status(400).send({ status: false, sucess: false, message: "Invalid Name" })

        if (!password) return res.status(400).send({ status: false, sucess: false, message: "Password is Required" })
        if (!validPassword(password)) return res.status(400).send({ status: false, sucess: false, message: "Invalid password" })

        const DB = await user_model.create(data)
        res.status(200).send({ status: true, sucess: true, message: "User Created Successfully", data: DB })
    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

export const verify_otp = async (req, res) => {
    try {

    }
    catch (err) { console.log(err.message); }
}

export const loh_in = async (req, res) => {
    try {

    }
    catch (err) { console.log(err.message); }
}
