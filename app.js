//require('dotenv').config
//console.log(process.env)
const express = require('express')
const cors = require('cors')

//Routes
const authRouter = require('./routes/authRoutes')
const appRouter = require('./routes/appRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
const port = 8080

app.use(express.json())
app.use(cors({cors: '*'}))

app.use('/api/auth', authRouter)
app.use('/api/app', appRouter)
app.use('/api/user', userRouter)

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
