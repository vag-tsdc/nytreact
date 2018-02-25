const router = require("express").Router();
const articleRoutes = require("./article");

// Book routes
router.use("/articles", articleRoutes);
router.use("/savedArticles", articleRoutes)

module.exports = router;
