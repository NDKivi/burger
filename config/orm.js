const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(error, data) {
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
    updateOne: function(id, cb) {
        console.log("id: " + id)
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";
        console.log("queryString: " + queryString);
        connection.query(queryString, id, function(error, data) {
            if (error)
                throw error;
            cb(data);
        });
    }
};

module.exports = orm;