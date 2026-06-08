import { user_model } from '../model/user_model.js'
import { errorhandling } from '../error/allerror.js'
import CryptoJS from 'crypto-js'
export const create_user = async (req, res) => {
  try {
    const data = req.body
    const { fname, lname, email, gender, mobile, password } = data

    const otp = Math.floor(Math.abs(CryptoJS.lib.WordArray.random(2).words[0]) % 9000) + 1000;
    const otpExpiryTime = Date.now() + 1000 * 60 * 5
    const checkUser = await user_model.findOne({ email: email })
    const normalizedEmail = email.replace(/\./g, '').replace(/\+.*(?=@)/, '');
    if (checkUser) {
      if ((checkUser.verification.user.isVerify)) return res.status(200).send({ status: true, msg: "Account Already Create Pls LogIn" })
      await user_model.findOneAndUpdate({ email: normalizedEmail }, { $set: { 'verification.user': { otp, otpExpiryTime } } })
      return res.status(200).send({ status: true, msg: "Resend Otp Successfully" })
    }

    const uploadData = {
      fname, lname, email: normalizedEmail, gender, mobile, role: 'user', password,
      verification: { user: { otp, otpExpiryTime } }
    }

    const db = await user_model.create(uploadData)
    res.status(200).send({ status: true, msg: "Account Create Successfully", data: { fname, lname, email, gender, mobile }, id: db._id })
  }

  catch (err) { errorhandling(err, res) }
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