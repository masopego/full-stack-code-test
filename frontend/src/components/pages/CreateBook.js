import React, { useEffect, useState } from "react";
import BookService from "../../services/book.service";
import AuthorService from "../../services/author.service";

function CreateBook() {
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState(null);
  const [authors, setAuthors] = useState([]);

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

  return (
    <div>
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
        <select value={author} onChange={(ev) => setAuthor(ev.target.value)}>
          {authors.map((author) => {
            return (
              <option value={author.id}>
                {author.first_name} {author.last_name}
              </option>
            );
          })}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateBook;
