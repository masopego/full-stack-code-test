const validationResult = require("express-validator").validationResult;
const db = require("../models");
const Authors = db.authors;

const AuthorsController = {
  getAuthors: (req, res, next) => {
    res.status(200).send("OK");
  },
  getAuthor: (req, res, next) => {
    res.status(200).send("OK");
  },
  createAuthor: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const Author = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };

    Authors.create(Author)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Book.",
        });
      });
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
