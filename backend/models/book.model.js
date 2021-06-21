module.exports = (sequelize, Sequelize) => {
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
