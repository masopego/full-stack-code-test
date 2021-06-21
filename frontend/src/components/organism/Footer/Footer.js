import React from "react";
import "./_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__copy">
          <h5>
            <a
              href="https://github.com/masopego"
              target="_blank"
              rel="noopener noreferrer"
            >
              masopego
            </a>
            &copy; 2021
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
