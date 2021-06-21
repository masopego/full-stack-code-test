const express = require("express");
const app = express();
const port = 3000;

const booksRouter = require("./routes/books");
const authorsRouter = require("./routes/authors");

const db = require("./models/index");
db.sequelize.sync();

app.use(express.json());

app.use(booksRouter);
app.use(authorsRouter);

app.listen(port, () => {
  console.log(`Book app listening at http://localhost:${port}`);
});
