module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define("author", {
    id: {
      field: "id",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
  });

  return Author;
};
