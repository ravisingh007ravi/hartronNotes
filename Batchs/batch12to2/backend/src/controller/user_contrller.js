export const create_user = (req, res) => {
    try {
        res.send("ok byee")
    }
    catch (err) { res.send({ mss: err.message }) }
}