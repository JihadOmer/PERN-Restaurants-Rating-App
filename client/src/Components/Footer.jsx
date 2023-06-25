import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <p>© 2023 Jihad Omer</p>
            <div className="footer-links">
              <a
                href="https://github.com/JihadOmer"
                target="_blank"
                rel="noopener noreferrer"
              >
                 my GitHub 
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/jihad-omer-5a6290243/"
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
