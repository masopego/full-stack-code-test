const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("books", undefined, undefined, {
  host: "localhost",
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const db = {
  models: {},
};

db.sequelize = sequelize;

db.models.books = require("./book.model.js")(sequelize);
db.models.authors = require("./author.model.js")(sequelize);

db.models.authors.hasMany(db.models.books, { as: "books" });
db.models.books.belongsTo(db.models.authors, {
  foreignKey: "authorId",
  as: "author",
});

module.exports = db;
