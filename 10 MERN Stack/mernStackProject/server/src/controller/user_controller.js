import user_model from '../model/user_model.js'
import { validName, validEmail, validPassword } from '../validation/all_validation.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

export const create_user = async (req, res) => {
    try {
        const data = req.body;

        const { name, email, password } = data

        if (!name) return res.status(400).send({ status: false, message: "name is required" })
        if (!email) return res.status(400).send({ status: false, message: "email is required" })
        if (!password) return res.status(400).send({ status: false, message: "password is required" })

        if (!validName(name)) return res.status(400).send({ status: false, message: "name is not valid" })
        if (!validEmail(email)) return res.status(400).send({ status: false, message: "email is not valid" })
        if (!validPassword(password)) return res.status(400).send({ status: false, message: "password is not valid" })
        const bcryptPassword = await bcrypt.hash(password, 10)

        const checkUser = await user_model.findOne({ email: email })

        if (checkUser) return res.status(400).send({ status: false, message: "email already exist" })

        const randomOtp = crypto.randomInt(1000, 10000)
        const expiryDate = Date.now() + 1000 * 60 * 5
        data.password = bcryptPassword
        data.varification = {
            user: {
                userOtp: randomOtp,
                userOtpExpire: expiryDate
            }
        }



        const DB = await user_model.create(data)
        res.send({ status: true, message: "user created successfully", data: DB })

    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
} 