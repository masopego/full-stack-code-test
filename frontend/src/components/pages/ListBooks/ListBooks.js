import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookService from "../../../services/book.service";
import "./_listBooks.scss";

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
      <Link to={`/bookmarks/${book.id}`}>
        <li key={index}>
          <p>{book.name}</p>
        </li>
      </Link>
    ));
  };

  return (
    <div className="list_book_page">
      <div className="wrapper">
        <ul>{renderBooks()}</ul>
      </div>
    </div>
  );
}

export default ListBooks;
