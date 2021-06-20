const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authors");
const expressValidator = require("express-validator");

const authorsValidator = [
  expressValidator.check("first_name").isAlpha(),
  expressValidator.check("last_name").isAlpha(),
];

router.get("/authors", authorsController.getAuthors);

router.get("/author/:id", authorsController.getAuthor);

router.post("/author", authorsValidator, authorsController.createAuthor);

router.put("/author/:id", authorsValidator, authorsController.updateAuthor);

module.exports = router;
