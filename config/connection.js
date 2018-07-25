const mysql = require("mysql");

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    port: 8889,
    host: "localhost",
    database: "burgers_db"
});

connection.connect(function(error) {
    if (error) {
        console.log("Error connecting to SQL: " + error.stack);
        return;
    } else {
        console.log("Connected as " + connection.threadId);
    }
});

module.exports = connection;