import React from "react";
import { Icon } from "@iconify/react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import Détails from "../pages/Détails-films";

const Header = () => {
  return (
    <header>
      <span>
        <li>
          <Icon className="logo" icon="logos:netflix" />
        </li>
      </span>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <li><a>Movie</a></li>
      <li><a>Tv Shows</a></li>
      <li><a>My list</a></li>
    </header>
  );
};
export default Header;
