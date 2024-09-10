import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left-header">
          <h1> A One Sales LLC </h1>
        </div>
        <div className="middle-header">
          <button>Shop</button>
          <button>About</button>
          <button>Contact</button>
        </div>
        <div className="right-header">
          <button>Login</button>
          <button>Cart</button>
        </div>
      </header>
    </>
  );
};
export default Header;
