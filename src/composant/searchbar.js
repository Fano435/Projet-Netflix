import { type } from "@testing-library/user-event/dist/type";
import React,{useState} from "react";
import { SearchResultsList, SuggestedMovie } from "./SearchResultsList";
import { Tab } from "semantic-ui-react";



 export const BarreDeRecherche = ({setResults}) => {
    const [suggestedmovie, setSuggestedMovie] = useState([]);
    const [input , setInput] = useState('')
    const [titre, setTitre] = useState([])
        


    const handleChange = (value) => {
        const titre = []
        setInput(value)
        const apiCall = fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e1cbd9932ebd9dd61ff0a6d60211440&language=en-US&query=${value}&page=1&include_adult=false`).then((response) => response.json()).then((apiCall)=>{
            for (const obj in apiCall) {
                const resultapi = apiCall[obj]
                for ( const i in resultapi) {
                    const resulttitre = (resultapi[i].title)
                    titre.push(resulttitre) 
                }
            }
            titre.sort();
            setSuggestedMovie(titre)
        })
    }

    const tableauFilm = Object.entries(suggestedmovie);
    console.log(titre)

    








    return (
        <div className="searchbar">
            <input type="text" placeholder="Rechercher un film"
                value={input} onChange={( e ) => 
                handleChange(e.target.value)}>
            </input>
            <SearchResultsList film={suggestedmovie}/>
            
        </div>

    )
}