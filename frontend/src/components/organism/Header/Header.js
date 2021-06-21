import React from "react";
import "./_header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="logo_container">
          <li>BOOKMARKS.</li>
        </ul>
        <ul className="menu">
          <li>
            <Link to="/">Create new book.</Link>
          </li>
          <li>
            <Link to="/list-products">Your Bookmarks.</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
