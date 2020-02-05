import React from "react";
import HeaderTitle from "./MarvelTitle.jpg";
import "./Header.css";

// Marvel Header for Home and Hero Page

const Header = () => (
  <header>
    <h1 className="Header-Title">
      {" "}
      <img src={HeaderTitle} />
    </h1>
  </header>
);

export default Header;
