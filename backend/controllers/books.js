const db = require("../models");
const Books = db.books;
const Op = db.Sequelize.Op;

const validationResult = require("express-validator").validationResult;

const BooksController = {
  getBooks: (req, res, next) => {
    Books.findAll({ include: "author" }).then((data) => {
      res.send(data);
    });
  },

  getBook: (req, res, next) => {
    res.status(200).send("OK");
  },
  createBook: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const Book = {
      name: req.body.name,
      isbn: req.body.isbn,
      authorId: req.body.author,
    };

    Books.create(Book)
      .then((data) => {
        console.log("DATA", data);
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Book.",
        });
      });
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
