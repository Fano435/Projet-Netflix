import React,{ useState } from "react";
import "../style/SearchResultsList.css";
import { BarreDeRecherche } from "./searchbar";

export const SearchResultsList = ( { film } ) => {
  const [suggestion, setSuggestion] = useState([])
  console.log(film)
  const free = () => {
    for (let i in film) {
      film.forEach(element => {
      });
    }
  }
  return (
    <div className="results-list">
      {film?.map((title) => <p>{title}</p>)}
    </div>
  )
}