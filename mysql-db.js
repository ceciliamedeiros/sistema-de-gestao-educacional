const mysql = require('mysql');
const configuration = require('./config');

var config =
{
    host: configuration.db.host,
    user: configuration.db.user,
    password: configuration.db.password,
    database: configuration.db.name,
    port: configuration.db.port
};


const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("Error while establishing the connection.");
        throw err;
    }
    else
    {
       console.log("Connection established.");
    }
});