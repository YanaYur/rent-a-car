import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./styles.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <h2>{"RENT A CAR"}</h2>
      </div>
      <a href="#home">Home</a>
      <a href="#countries">Countries</a>
      <a href="#vehicles">Vehicles</a>
      <a href="#about_us">About us</a>
      <a href="#contact">Contact</a>
      <Button variant="outlined" className="button-signin">
        Sign In
      </Button>
      <div className="header-mobile-button">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
