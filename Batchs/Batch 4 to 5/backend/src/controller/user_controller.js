import { user_model } from '../model/user_model.js'
import { errorhandling } from '../error/allerror.js'
export const create_user = async (req, res) => {
  try {
    const data = req.body

    data.role = 'user'
    const db = await user_model.create(data)
    res.status(200).send({ status: true, msg: "ok....", db })
  }

  catch (err) { errorhandling(err,res) }
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