const db = require("../models");
const Books = db.models.books;

const validationResult = require("express-validator").validationResult;

const BooksController = {
  getBooks: async (req, res, next) => {
    try {
      const books = await Books.findAll({ include: "author" });
      res.send(books);
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while getting books.",
      });
    }
  },

  getBook: (req, res, next) => {
    res.status(200).send("OK");
  },

  createBook: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const Book = {
      name: req.body.name,
      isbn: req.body.isbn,
      authorId: req.body.author,
    };

    try {
      const book = await Books.create(Book);
      res.send(book);
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book.",
      });
    }
  },

  updateBook: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    res.status(200).send("OK");
  },
};

module.exports = BooksController;
