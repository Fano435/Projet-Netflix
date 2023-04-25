import React from "react";
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
