export const create_user = (req, res) => {
    try {
        const data = req.body

        res.status(400).send({status:true,msg:`welcome ${req.body.name}`})

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