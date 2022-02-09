const express = require('express')
const router = express.Router()

const { login } = require('../controllers/authController')
const verifyToken = require('../utils/verifyToken')

//LOG USER
router.post('/login', verifyToken, login)

module.exports = router