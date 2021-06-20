const validationResult = require("express-validator").validationResult;

const BooksController = {
  getBooks: (req, res, next) => {
    res.status(200).send("OK");
  },
  getBook: (req, res, next) => {
    res.status(200).send("OK");
  },
  createBook: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    res.status(200).send("OK");
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
