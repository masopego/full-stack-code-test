const db = require("../models");
const Books = db.models.books;

const validationResult = require("express-validator").validationResult;

const BooksController = {
  getBooks: async (req, res) => {
    try {
      const books = await Books.findAll({ include: "author" });
      res.send(books);
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while getting books.",
      });
    }
  },

  getBook: async (req, res) => {
    const id = req.params.id;
    try {
      const book = await Books.findByPk(id, { include: "author" });

      if (!book) {
        res.status(404).send({
          message: "book not found",
        });
        return;
      }
      res.send(book);
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book.",
      });
    }
  },

  createBook: async (req, res) => {
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

  updateBook: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const Book = {
      name: req.body.name,
      isbn: req.body.isbn,
      authorId: req.body.author,
    };

    try {
      let book = await Books.findByPk(id);

      if (!book) {
        res.status(404).send({
          message: "book not found",
        });
        return;
      }

      book = await Books.update(Book, { where: { id: id } });
      res.send({ id, ...Book });
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while updating the Book.",
      });
    }
  },
};

module.exports = BooksController;
