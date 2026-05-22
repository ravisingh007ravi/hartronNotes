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


export const get_all_user = async (req, res) => {
  try {
    const DB = await user_model.find().select({email:1}).sort({createdAt:-1})

    if(DB.length==0) return res.status(404).send({status:false,msg:'User not found'})

    res.status(200).send({status:true,data:DB})
  }
  catch (err) { return res.status(500).send({ status: false, msg: err.message }) }
}