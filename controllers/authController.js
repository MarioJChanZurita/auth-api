const jwt = require('jsonwebtoken')


const login = (req, res) => {
    jwt.sign(
        {user: 'Test'}, 
        'secretkey', 
        (err, token) => {
            res.json({ token })
        })
}


module.exports = { login }