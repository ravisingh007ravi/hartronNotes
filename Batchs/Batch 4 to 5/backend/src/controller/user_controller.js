import { user_model } from '../model/user_model.js'

export const create_user = async(req, res) => {
  try {
    const data = req.body
    console.log(data);

   const db = await user_model.create(data)
    res.status(200).send({ status: true, msg: "ok...." ,db})
  }

  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}
