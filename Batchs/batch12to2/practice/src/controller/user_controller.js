import { error_handling } from '../error/allError.js'
import { user_model } from '../model/user_model.js'
export const create_user = async (req, res) => {
    try {

        const data = req.body;

        const DB = await user_model.create(data)
        res.send({ status: true, data: DB })
    }
    catch (err) { error_handling(err, res) }
}