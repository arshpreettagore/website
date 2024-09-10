import React from "react";
import "./Header.css";
import RadioIcon from "../../assets/react.svg";
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Site Name</h1>
      </div>
      <div className="header-pages">
        <nav>
          <ul>
            <li>
              <a href="#">Meet Jesus</a>
            </li>
            <li>
              <a href="#">Good News</a>
            </li>
            <li>
              <a href="#">Worship</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#" className="radio-button">
                <img src={RadioIcon} alt="Radio Icon" />
                Radio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
