import { user_model } from '../model/user_model.js'

export const create_user = async (req, res) => {
    try {

        const data = req.body

        const db = await user_model.create(data)

        res.send({ db })
    }
    catch (err) { res.send({ mss: err.message }) }
}