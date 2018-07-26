const express = require("express");
const bodyParser = require("body-parser");
const router = require("./controllers/burger_controller.js");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(router);



app.listen(PORT, function(error) {
    if (error) throw error;
    console.log("listening...");
});