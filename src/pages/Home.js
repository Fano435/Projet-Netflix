import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import Header from "../composant/header";
import React, { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <div>
      <Header />
      <div className="content">
        <div className="wrapper">
          <section className="catalogue">
            <div className="navigation">
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
              <select
                onChange={(event) => setSelectedGenre(event.target.value)}
              >
                <option value="all">All Genres</option>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="80">Crime</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="14">Fantasy</option>
                <option value="36">History</option>
                <option value="27">Horror</option>
                <option value="10402">Music</option>
                <option value="9648">Mystery</option>
                <option value="10749">Romance</option>
                <option value="878">Science Fiction</option>
                <option value="10770">TV Movie</option>
                <option value="53">Thriller</option>
                <option value="10752">War</option>
                <option value="37">Western</option>
              </select>
            </div>
            <Infos page={count} genres={selectedGenre}></Infos>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Home;
