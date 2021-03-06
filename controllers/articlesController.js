// Dependencies + Veriables

// Require express 
const express = require("express");
// Parses our HTML
const cheerio = require("cheerio");
// HTTP request for HTML page
const request = require("request");
// Utilities for working with file + directory paths
const path = require("path");
// Middle-ware style router
const router = express.Router();
// Require the article model schema
const db = require("../models");

//  Methods for Controller
module.exports = {
    findAll: function(req, res) {
        db.Article
            .findById(req.params.id)
            .then(dbModel => res.JSON(dbModel))
            .catch(err => res.status(422).json(err))
    }
};

// Get/Post
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// Exports
module.exports = router;