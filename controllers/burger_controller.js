const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/api/burgers", function (req, res) {
    burger.selectAllBurgers(function (results) {
        res.json(results);
    });
});

router.post("/api/burgers", function (req, res) {
    let newBurgerName = req.body.burger_name;
    burger.insertOneBurger(newBurgerName, function (results) {
        res.json(results);
    });
});

router.put("/api/burgers", function (req, res) {
    let burgerID = req.body.id;
    console.log("burgerID: " + burgerID);
    burger.updateOneBurger(burgerID, function (results) {
        res.json(results);
    });
});

router.get("/", function (req, res) {
    burger.selectAllBurgers(function (results) {
        res.render("index", { "burgers": results });
    });

});

module.exports = router;