import userModel from '../model/user_model.js'

export const create_user = async (req, res) => {
    try {
        const data = req.body

        const nameRegex = /^[A-Za-z]{0,50}$/
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

        if (!data.name) return res.status(400).send({ status: false, msg: 'Name Required' })
        if (!nameRegex.test(data.name)) return res.status(400).send({ status: false, msg: 'Name InValid' })

        if (!data.email) return res.status(400).send({ status: false, msg: 'Email Required' })
        if (!emailRegex.test(data.email)) return res.status(400).send({ status: false, msg: 'Email InValid' })

        if (!data.password) return res.status(400).send({ status: false, msg: 'Password Required' })
        if (!passwordRegex.test(data.password)) return res.status(400).send({ status: false, msg: 'Password InValid' })

        const DB = await userModel.create(data)

        res.status(400).send({ status: true, msg: `User is Created`, DB })

    }
    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }
}

// status code
// 200 => ok response
// 201 => created new resource
// 400 => bad request user side mistake
// 404 => not found
// 500 => internal server error