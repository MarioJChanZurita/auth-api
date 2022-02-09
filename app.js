//require('dotenv').config
//console.log(process.env)
const express = require('express')

const userRouter = require('./routes/userRoutes')
const authRouter = require('./routes/authRoutes')

const app = express()
const port = 8080

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

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

app.listen(port, () => console.log('Server started'))
