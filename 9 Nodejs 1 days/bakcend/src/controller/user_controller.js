export const create_user = (req, res) => {
    try {
     res.send({ status: true, msg: 'User created successfully' })
    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}

export const verify_user = (req, res) => {
    try {

    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}

export const login_user = (req, res) => {
    try {

    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}

export const updated_profile_img = (req, res) => {
    try {

    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}

export const user_updated_info = (req, res) => {
    try {

    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}
