import { user_model } from '../model/user_model.js'
import {errorhandling} from '../error/allerror.js'
export const create_user = async (req, res) => {
    try {

        const data = req.body

        const db = await user_model.create(data)

        res.send({ db })
    }
    catch (err) { errorhandling(err,res) }
}