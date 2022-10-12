import React from "react";
import './Header.css';
import {} from "@mui/material";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
function Header() {
  return (
    <header>
      <img className="logo" src={require("../assets/images/logo.jpg")} alt="Food Logo" />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img src={require("../assets/images/ProfilePic.jpg")} alt="" className="profilePic"/>
        </div>
        <h2 className="userName">Prashun</h2>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
