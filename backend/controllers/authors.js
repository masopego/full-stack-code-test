const validationResult = require("express-validator").validationResult;
const db = require("../models");
const Authors = db.models.authors;

const AuthorsController = {
  getAuthors: async (req, res) => {
    try {
      const authors = await Authors.findAll();
      res.send(authors);
    } catch {
      res.status(500).send({
        message: err.message || "Some error occurred while getting Authors.",
      });
    }
  },

  getAuthor: async (req, res) => {
    const id = req.params.id;
    try {
      const author = await Authors.findByPk(id);

      if (!author) {
        res.status(404).send({
          message: "author not found",
        });
      }
      res.send(author);
    } catch {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Author.",
      });
    }
  },

  createAuthor: async (req, res) => {
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
        message:
          err.message || "Some error occurred while creating the Author.",
      });
    }
  },

  updateAuthor: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const id = req.params.id;
    const Author = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    };

    try {
      let author = await Authors.findByPk(id);

      if (!author) {
        res.status(404).send({
          message: "author not found",
        });
        return;
      }

      author = await Authors.update(Author, { where: { id: id } });
      res.send({ id, ...Author });
    } catch {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Author.",
      });
    }
  },
};

module.exports = AuthorsController;
