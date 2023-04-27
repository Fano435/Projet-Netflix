import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import Header from "../composant/header";
import React, { useState, useEffect } from "react";
import { BarreDeRecherche } from "../composant/searchbar";

function Home() {
  const [count, setCount] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <div className="homepage">
      <Header />
      <div className="content">
        <div className="wrapper">
          <BarreDeRecherche />
          <nav className="pagination">
            <button
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              Previous
            </button>
            {count}
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Next
            </button>
          </nav>
          <Infos page={count}></Infos>
        </div>
      </div>
    </div>
  );
}
export default Home;
