// Dependencies:=========================
const express = require("express");
const path = require("path");

// Express configuration:================
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener:==============================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});