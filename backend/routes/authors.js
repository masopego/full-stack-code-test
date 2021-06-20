const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authors");

router.get("/authors", authorsController.getAuthors);

router.get("/author/:id", authorsController.getAuthor);

router.post("/author", authorsController.createAuthor);

router.put("/author/:id", authorsController.updateAuthor);

module.exports = router;
