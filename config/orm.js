const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(error, data) {
            if (error) 
                throw error;
            cb(data);
        });
    },
    insertOne: function(burgerName, cb) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(queryString, burgerName, function(error, data) {
            if (error)
                throw error;
            cb(data);
        });
    },
    updateOne: function(burgerID, cb) {
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";
        connection.query(queryString, burgerID, function(error, data) {
            if (error)
                throw error;
            cb(data);
        });
    }
};

module.exports = orm;