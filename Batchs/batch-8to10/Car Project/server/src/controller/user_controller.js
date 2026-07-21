import { user_model } from '../model/user_model.js'

export const create_user = async (req, res) => {
    try {

        const data = req.body

        const { name, email, password } = data

        const nameRegex = /^[A-Za-z ]{2,50}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!name) return res.status(400).send({ status: false, message: "Name is Required" })
        if (!email) return res.status(400).send({ status: false, message: "Email is Required" })
        if (!password) return res.status(400).send({ status: false, message: "Password is Required" })

        if (!nameRegex.test(name)) return res.status(400).send({ status: false, message: "Name Invaild" })
        if (!emailRegex.test(email)) return res.status(400).send({ status: false, message: "Email Invaild" })
        if (!passwordRegex.test(password)) return res.status(400).send({ status: false, message: "Password Invaild" })

        const checkEmail = await user_model.findOne({ email: email })
        if (checkEmail) return res.status(400).send({ status: false, message: "Email Already Present" })

        const otp = Math.floor(1000 + Math.random() * 9000)
        const otpExpiryTime = Date.now() + 1000 * 60 * 5

        const uploadData = {
            name, email, password, role: 'user',
            verification: { user: { otp, otpExpiryTime } }
        }


        const DB = await user_model.create(uploadData)
        res.status(200).send({ status: true, message: "Create data Successfully", data: DB })

    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}



export const getData = async (req, res) => {
    try {

        const DB = await user_model.find()

        res.status(200).send({ Status: true, message: 'Get All Data', Data: DB })
    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}



























export const otp_verification = (req, res) => {
    try {

    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }

}

export const resend_otp_user = (req, res) => {
    try {

    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }

}

export const logIn_user = (req, res) => {
    try {

    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }

}

// Status Code 
// 100 200 300 400 500
// 200 => ok
// 201 => new resourse create in DB
// 400 => user site error mean enter wrong data in field email == pass false email == email
// 404 => not found from DB
// 500 => server error it's mean your backend code problem