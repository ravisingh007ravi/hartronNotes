import { user_model } from '../model/user_model.js'

export const create_user = async (req, res) => {
  try {
    const data = req.body
    const { name, email, password } = data

    const nameRegex = /^[a-zA-Z' ]{2,50}$/gm
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!name) return res.status(400).send({ status: false, msg: "Name is Require..." })
    if (!nameRegex.test(name)) return res.status(400).send({ status: false, msg: "Invliad Name..." })

    if (!email) return res.status(400).send({ status: false, msg: "EMail-Id is Require..." })
    if (!emailRegex.test(email)) return res.status(400).send({ status: false, msg: "Invalid EMail-Id..." })

    if (!password) return res.status(400).send({ status: false, msg: "Password is Require..." })
    if (!passwordRegex.test(password)) return res.status(400).send({ status: false, msg: "Invalid Password..." })

    const db = await user_model.create(data)
    res.status(200).send({ status: true, msg: "ok....", db })
  }

  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

export const verify_otp = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

export const resend_otp = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

export const forgot_password = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

export const login = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

export const login_google = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

export const update_profile_img = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}

export const update_info = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}


export const delete_account = async (req, res) => {
  try {

  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}