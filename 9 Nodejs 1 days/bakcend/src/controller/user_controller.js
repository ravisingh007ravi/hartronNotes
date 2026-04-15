export const create_user = (req, res) => {
    try {
     res.send({ status: true, msg: 'User created successfully' })
    }
    catch (e) { res.status(500).send({ status: false, msg: e.message }) }
}