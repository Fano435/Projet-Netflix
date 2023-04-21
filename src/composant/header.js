import React from "react";
import { Icon } from "@iconify/react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <Link to={"/"}>
          <li>The greatest catalog</li>
        </Link>
      </div>
    </header>
  );
};
export default Header;
