import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookService from "../../../services/book.service";

import "./_bookDetails.scss";

function BookDetails() {
  const [book, setBook] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    new BookService().getBook(id).then((response) => setBook(response.data));
  }, [id]);

  if (!book) {
    return (
      <section className="book_details_page">
        <div className="wrapper">
          <p className="card_book">Loading</p>
        </div>
      </section>
    );
  }

  return (
    <section className="book_details_page">
      <div className="wrapper">
        <div className="card_book">
          <p>TÍTULO: {book.name}</p>
          <p>ISBN: {book.isbn}</p>
          <p>
            {" "}
            AUTOR:
            {book.author.first_name}
            <span>{book.author.last_name}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
