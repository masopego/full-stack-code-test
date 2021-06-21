import React, { useEffect, useState } from "react";
import BookService from "../../services/book.service";

function ListBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    new BookService().getBooks().then((response) => {
      const books = response.data;
      setBooks(books);
    });
  }, []);

  const renderBooks = () => {
    return books.map((book, index) => (
      <li key={index}>
        <p>{book.name}</p>
      </li>
    ));
  };

  return (
    <div>
      <div>
        <ul>{renderBooks()}</ul>
      </div>
    </div>
  );
}

export default ListBooks;
