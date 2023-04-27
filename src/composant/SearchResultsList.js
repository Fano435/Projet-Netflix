import React,{ useState } from "react";
import "../style/SearchResultsList.css";
import { Link } from "react-router-dom";




export const SearchResultsList = ( { film, listeAPii } ) => {
  const [suggestion, setSuggestion] = useState([])
  const [isShown, setIsShown] = useState(false);



  const free = () => {
    for (let i in film) {
      film.forEach(element => {
      });
    }
  }
  return (
    <div className="results-list"
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        console.log()
      )}
      {film?.map((title, index) => 
      <Link to={"/" + title.id}> <p>{title.title}</p></Link>)}
    </div>
  )
}
