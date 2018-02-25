// Dependencies + Variables

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema Schema Schema

// Article schema
const articleSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
    url: { type: String, required: true }
});


// Make a copy of the above article schema and assign it to a variable
const Article = mongoose.model("Article", articleSchema);


// Export

module.exports = Article;