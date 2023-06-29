import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer bg-dark text-light text-center fixed-bottom">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="mb-2 mt-2">
            <p>© 2023 Jihad Omer</p>
            <div className="footer-links">
              <a
                href="https://github.com/JihadOmer"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeBase
              </a>
              <br />
              <a
                href="https://github.com/JihadOmer/PERN-Restaurants-Rating-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
