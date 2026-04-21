import user_model from '../model/user_model.js'
import {validEmail,validName,validPassword} from '../validation/allValidation.js'
export const register = async (req, res) => {
    try {
        const data = req.body

        const { name, email, password, gender } = data

        const nameRegex = /^[A-Za-z ]{0,50}$/
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

        if (!name) return res.status(400).send({ status: false, sucess: false, message: "Name is Required" })
        if (!validName(name)) return res.status(400).send({ status: false, sucess: false, message: "Invalid Name" })

        if (!email) return res.status(400).send({ status: false, sucess: false, message: "Email is Required" })
        if (!validEmail(email)) return res.status(400).send({ status: false, sucess: false, message: "Invalid email" })

        if (!password) return res.status(400).send({ status: false, sucess: false, message: "Password is Required" })
        if (!validPassword(password)) return res.status(400).send({ status: false, sucess: false, message: "Invalid password" })

        const checkUser = await user_model.findOne({email:email})

        if (checkUser) return res.status(400).send({ status: false, sucess: false, message: "User Already Present" })

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

// status code
// 201 create new data
// 200 ok
// 400 bad request by user side
// 404 not found
// 500 internal server error