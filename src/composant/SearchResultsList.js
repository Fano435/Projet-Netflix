import React,{ useState } from "react";
import "../style/SearchResultsList.css";

export const SearchResultsList = ( { film } ) => {
  const [suggestion, setSuggestion] = useState([])
  const free = () => {
    for (let i in film) {
      film.forEach(element => {
        const setSuggestion = (element)
        console.log()
      });
    }
  }
  return (
    <div className="results-list">
      {free()}
    </div>
  )
}
