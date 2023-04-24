import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import Header from "../composant/header";
import LandingPage from "./landing-page";
import { BarreDeRecherche } from "../composant/searchbar";
import { useState } from "react";
import { SearchResult } from "semantic-ui-react";
import { SearchResultsList } from "../composant/SearchResultsList";




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
    </div>

  );
}

console.log(".bonjour")
export default Home;