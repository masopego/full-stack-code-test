const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("books", undefined, undefined, {
  host: "localhost",
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./book.model.js")(sequelize, Sequelize);
db.authors = require("./author.model.js")(sequelize, Sequelize);

db.authors.hasMany(db.books, { as: "books" });
db.books.belongsTo(db.authors, {
  foreignKey: "authorId",
  as: "author",
});

module.exports = db;
