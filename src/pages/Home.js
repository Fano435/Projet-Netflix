import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import Header from "../composant/header";

import LandingPage from "./landing-page";
import { BarreDeRecherche } from "../composant/searchbar";
import { useState } from "react";
import { SearchResult } from "semantic-ui-react";
import { SearchResultsList } from "../composant/SearchResultsList";




import React, { useState, useEffect } from "react";

function Home() {


  const [movie, setMovie] = useState([])



  const numbers = [];
  for (let i = 0; i < 50; i++) {
    numbers.push((Math.random() * 600));
  }
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <div>
        <BarreDeRecherche/>
        </div>
        <h1>Suggestion</h1>
        <SearchResultsList/>
        <section>
          <h1>Je suis la page d'accueil</h1>
          {numbers.map((number) => (
            <Infos id={number}></Infos>
          ))}
        </section>
        <LandingPage/>
      </div>  

  const [count, setCount] = useState(1);
  return (
    <div>
      <Header />
      <div className="content">
        <div className="wrapper">
          <section className="catalogue">
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
          </section>
        </div>

      </div>

    </div>

  );
}


console.log(".bonjour")
export default Home;

