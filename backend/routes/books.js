const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books");

router.get("/books", booksController.getBooks);

router.get("/book/:id", booksController.getBook);

router.post("/book", booksController.createBook);

router.put("/book/:id", booksController.updateBook);

module.exports = router;
