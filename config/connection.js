const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connectionParam = process.env.JAWSDB_URL;
} else {
    connectionParam = {
        user: "root",
        password: "root",
        port: 8889,
        host: "localhost",
        database: "burgers_db"
    };
}

const connection = mysql.createConnection(connectionParam);

connection.connect(function (error) {
    if (error) {
        console.log("Error connecting to SQL: " + error.stack);
        return;
    } else {
        console.log("Connected as " + connection.threadId);
    }
});

module.exports = connection;