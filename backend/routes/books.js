const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");
const expressValidator = require("express-validator");

const bookValidator = [
  expressValidator.check("name").isAlpha(),
  expressValidator.check("isbn").isISBN(),
  expressValidator.check("author").isInt(),
];

router.get("/books", booksController.getBooks);

router.get("/book/:id", booksController.getBook);

router.post("/book", bookValidator, booksController.createBook);

router.put("/book/:id", bookValidator, booksController.updateBook);

module.exports = router;
