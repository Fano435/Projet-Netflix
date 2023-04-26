import React from "react";
import { Link } from "react-router-dom";
import Détails from "../pages/Détails-films";

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
