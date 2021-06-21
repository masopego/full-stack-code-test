const validationResult = require("express-validator").validationResult;
const db = require("../models");
const Authors = db.models.authors;

const AuthorsController = {
  getAuthors: async (req, res, next) => {
    try {
      const authors = await Authors.findAll();
      res.send(authors);
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while getting books.",
      });
    }
  },

  getAuthor: (req, res, next) => {
    res.status(200).send("OK");
  },

  createAuthor: async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const Author = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };

    try {
      const author = await Authors.create(Author);
      res.send(author);
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book.",
      });
    }
  },

  updateAuthor: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    res.status(200).send("OK");
  },
};

module.exports = AuthorsController;
