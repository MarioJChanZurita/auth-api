const mysql = require('mysql')

const LOCAL_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "AppsManager"
}

const SERVER_CONFIG = {

}

const mysqlCon = mysql.createConnection(LOCAL_CONFIG || SERVER_CONFIG)

module.exports = mysqlCon