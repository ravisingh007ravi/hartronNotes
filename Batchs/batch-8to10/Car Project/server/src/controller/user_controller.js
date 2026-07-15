import { user_model } from '../model/user_model.js'

export const create_user = async (req, res) => {
    try {

        const data = req.body

        const DB = await user_model.create(data)

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