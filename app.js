const express = require('express')
const res = require('express/lib/response')
const jwt = require('jsonwebtoken')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.json({
        'message': 'Authentication API'
    })
    
})

app.all('*', (req, res) => {
    res.json({
        'message': 'page not found' 
    })
})

/**
Create new user 
Log user 
Administrate tokens 
 */



//LOG USER
/* app.post('/auth/login', verifyToken, (req, res) => {
    jwt.sign({user= 'Test', 'secretkey', (err, token) => {
        res.json({
            token
        })
    }})
}) */



function verifyToken(req, res, next){
    const bearerHeader = req.headers['Authorization']
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}

app.listen(port, () => console.log('Server started'))




//administrator for apps 


//generic adminstrator for each app 


