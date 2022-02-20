const mysqlCon = require('../db/mysqlCon')
const { StatusCodes } = require('http-status-codes')

const createUser = (req, res) => {
    let sql = `insert into user(
        first_name, 
        last_name,
        username, 
        email, 
        phone, 
        is_active,
        is_verified,
        is_superuser,
        is_staff,
        date_joined,
        last_login,
        password
    ) values (?)`
    req.body.dateJoined = new Date(req.body.dateJoined)
    req.body.lastLogin = new Date(req.body.lastLogin)
    mysqlCon.query(sql, [Object.values(req.body)], (err, data, fields) => {
        if (err) throw err
        res
            .status(StatusCodes.CREATED)
            .json({ data })
    })
}

const getAllUsers = (req, res) => {
    let sql = `select * from user`
    mysqlCon.query(sql, (err, data, fields) => {
        if (err) throw err
        res
            .status(StatusCodes.OK)
            .json([ ...data ])
    })
}

module.exports = { 
    createUser,
    getAllUsers
}