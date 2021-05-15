let mysql = require('mysql')

let connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"hjx2170000",
    database:"blog"
    
    
});
module.exports = connection;