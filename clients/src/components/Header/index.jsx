import React from "react";
import Navbar from "../Navbar";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div className="logo__image"></div>
        </div>
        <div className="header__nav">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
