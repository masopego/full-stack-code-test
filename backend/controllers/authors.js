const validationResult = require("express-validator").validationResult;

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

    res.status(200).send("OK");
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
