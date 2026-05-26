import { user_model } from '../model/user_model.js'
import { ValidName, ValidEmail, ValidGender, ValidMobile, ValidPassword, ValidPincode } from '../validation/allValidation.js'
export const create_user = async (req, res) => {
    try {

        const data = req.body
        const { fname, lname, email, password, gender, mobile } = data

        if (!fname) return res.status(400).send({ status: false, msg: 'First Name is requred' })
        if (!ValidName(fname)) return res.status(400).send({ status: false, msg: 'First Name Validation Fail' })

        if (!lname) return res.status(400).send({ status: false, msg: 'Last Name is requred' })
        if (!ValidName(lname)) return res.status(400).send({ status: false, msg: 'Last Name Validation Fail' })

        if (!email) return res.status(400).send({ status: false, msg: 'Email id is requred' })
        if (!ValidEmail(email)) return res.status(400).send({ status: false, msg: 'Email Name Validation Fail' })

        if (!password) return res.status(400).send({ status: false, msg: 'Password is requred' })
        if (!ValidPassword(password)) return res.status(400).send({ status: false, msg: 'Password Name Validation Fail' })

        if (!gender) return res.status(400).send({ status: false, msg: 'Gender is requred' })
        if (!ValidGender(gender)) return res.status(400).send({ status: false, msg: 'Gender Name Validation Fail' })

        if (!mobile) return res.status(400).send({ status: false, msg: 'Mobile is requred' })
        if (!ValidMobile(mobile)) return res.status(400).send({ status: false, msg: 'Mobile Name Validation Fail' })


        const db = await user_model.create(data)

        res.send({ db })
    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }) }
}