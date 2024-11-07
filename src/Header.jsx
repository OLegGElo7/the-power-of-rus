import React, { useState } from "react";
import "./header.scss";
import logoImg from "./logo.png";
import btnOpen from "./free-icon-down-arrow-1057166.png";
import { Link } from "react-router-dom";

const Header = ({ openModal }) => {
  return (
    <header>
      <div className="header">
        <div className="header__wrapper">
          <div className="header__logo">
            <a href="#the-power-of-rus">
              <img src={logoImg} alt="logo" />
            </a>
          </div>
          <div className="header__menu">
            <button onClick={openModal}>
              <img src={btnOpen} alt="btn" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
