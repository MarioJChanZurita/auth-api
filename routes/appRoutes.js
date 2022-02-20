const express = require('express')
const router = express.Router()

const { 
    createApp, 
    getAllApps 
} = require('../controllers/appController')

router
    .route('/createApp')
    .post(createApp)

router
    .route('/getAllApps')
    .get(getAllApps)

module.exports = router