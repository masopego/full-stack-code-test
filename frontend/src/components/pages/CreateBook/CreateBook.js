import React, { useEffect, useState } from "react";
import BookService from "../../../services/book.service";
import AuthorService from "../../../services/author.service";

import "./_createBook.scss";

function CreateBook() {
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);

  useEffect(() => {
    new AuthorService().getAuthors().then((response) => {
      const authors = response.data;
      setAuthors(authors);
      if (authors.length) {
        setAuthor(authors[0].id);
      }
    });
  }, []);

  const resetForm = () => {
    setName("");
    setIsbn("");
  };
  const resetAuthorForm = () => {
    setFirst_name(null);
    setLast_name(null);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let data = { name, isbn, author };
    new BookService()
      .createBook(data)
      .then((res) => {
        alert("This book has been added successfully");
        resetForm();
      })
      .catch((err) => {
        alert("An error has occured. Please, check the book information");
      });
  };

  const handleSubmitAuthor = (ev) => {
    ev.preventDefault();

    let data = { first_name, last_name };
    new AuthorService()
      .createAuthor(data)
      .then((res) => {
        alert("This author has been added");

        setAuthors([...authors, res.data]);
        resetAuthorForm();
      })
      .catch((err) => {
        alert("An error has occured. Please, check the author information");
      });
  };

  return (
    <div className="create_book_page">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <label className="label">Choose your book name.</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="La charca"
            required
            onChange={(ev) => setName(ev.target.value)}
            autocomplete="off"
          />
          <label className="label">Choose books' isbn.</label>

          <input
            type="text"
            name="isbn"
            placeholder="978-3-16-148410-0"
            value={isbn}
            required
            autocomplete="off"
            onChange={(ev) => setIsbn(ev.target.value)}
          />

          <label className="label">Choose books' author.</label>
          <select value={author} onChange={(ev) => setAuthor(ev.target.value)}>
            {authors.map((author) => {
              return (
                <option value={author.id}>
                  {author.first_name} {author.last_name}
                </option>
              );
            })}
          </select>
          <input type="submit" value="Create Book" />
        </form>
        <form onSubmit={handleSubmitAuthor}>
          <div>
            <p>if your author is not in the list yet, add it</p>
            <label className="label">Write its name</label>
            <input
              type="text"
              name="firt_name"
              value={first_name}
              placeholder="Manuel"
              required
              onChange={(ev) => setFirst_name(ev.target.value)}
              autocomplete="off"
            />
            <label className="label">Write its lastname</label>
            <input
              type="text"
              name="last_name"
              value={last_name}
              placeholder="Zeno"
              required
              onChange={(ev) => setLast_name(ev.target.value)}
              autocomplete="off"
            />
            <input type="submit" value="Create Author" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
