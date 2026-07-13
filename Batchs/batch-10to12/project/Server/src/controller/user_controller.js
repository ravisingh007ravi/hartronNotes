export const user_signup = (req, res) => {
    try {

        const data = req.body

        
        
        res.status(200).send({ message: data })
    }
    catch (err) {
        res.status(500).send({ "message": err.message })
    }
}

// status code 
// 100 to 500
// 201 new data create 
// 200 ok 
// 400 user site error 
// 404 not found 
// 500 server 


export const getAllUser = (req, res) => {
    res.send("hii")
}