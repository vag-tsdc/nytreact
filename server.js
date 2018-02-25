// Dependencies + Variables

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

// Import Routes + allow server access
const routes = require("./routes");
const app = express();

// Content for the app pulled from PUBLIC in client/build
app.use(express.static("client/build"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Routes
app.use("/", routes);

app.listen(port, function () {
  console.log("listening on port", port);
});