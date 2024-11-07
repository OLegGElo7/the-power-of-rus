import React from "react";
import menuImg from "./free-icon-menu-169104.png";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <button>
        <img src={menuImg} alt="menu" />
      </button>
    </div>
  );
};

export default Menu;
