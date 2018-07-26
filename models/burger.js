const orm = require("../config/orm.js");

const burger = {
    insertOneBurger: function(burgerName, callback) {
        orm.insertOne(burgerName, callback);
    },
    selectAllBurgers: function(callback) {
        orm.selectAll(callback);
    },
    updateOneBurger: function(burgerID, callback) {
        orm.updateOne(burgerID, callback)
    }
};

module.exports = burger;