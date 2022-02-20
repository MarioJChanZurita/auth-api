const mysqlCon = require('../db/mysqlCon')
const { StatusCodes } = require('http-status-codes')

const createApp = (req, res) => {
    let sql = `insert into application(
        is_active,
        device,
        code,
        name,
        description,
        frontend_url,
        backend_url,
        logo
    ) values (?)`
    mysqlCon.query(sql, [Object.values(req.body)], (err, data, fields) => {
        if (err) throw err
        res
            .status(StatusCodes.CREATED)
            .json({ data })
    })
}

const getAllApps = (req, res) => {
    let sql = `select * from application`
    mysqlCon.query(sql, (err, data, fields) => {
        if (err) throw err
        res
            .status(StatusCodes.OK)
            .json([ ...data ])
    })
}

module.exports = {
    createApp,
    getAllApps
}