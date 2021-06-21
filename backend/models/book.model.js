const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Book = sequelize.define("book", {
    id: {
      field: "id",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: Sequelize.STRING },
    isbn: { type: Sequelize.STRING },
  });

  return Book;
};
