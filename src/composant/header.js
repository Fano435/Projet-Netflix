import React from "react";
import { Icon } from "@iconify/react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <span>
        <li>
          <Icon icon="logos:netflix" />
        </li>
      </span>
      <Link to={"/"}>
        <li>Home</li>
      </Link>
      <li>Movie</li>
      <li>Tv Shows</li>
      <li>My list</li>
      <li><button>Bonjour</button></li>
    </header>
  );
};
export default Header;
