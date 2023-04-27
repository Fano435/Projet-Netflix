


import React,{useState} from "react";
import { SearchResultsList, SuggestedMovie } from "./SearchResultsList";




 export const BarreDeRecherche = ({setResults}) => {
    const [suggestedmovie, setSuggestedMovie] = useState([]);
    const [input , setInput] = useState('')
    const [apiTitre, setApiTitre] = useState([])


        


    const handleChange = (value) => {
        let titre = []
        let listeapi = []
        setInput(value)
        const apiCall = fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e1cbd9932ebd9dd61ff0a6d60211440&language=en-US&query=${value}&page=1&include_adult=false`).then((response) => response.json()).then((apiCall)=>{
            for (const obj in apiCall) {
                console.log(apiCall)
                const resultapi = apiCall[obj]
                for ( const i in resultapi) {
                    const resulttitre = (resultapi[i])
                    titre.push(resulttitre)
                    console.log(resulttitre)
                }
                for (const obj in apiCall) {
                    for (const i in apiCall.results) {
                        listeapi.push(apiCall.results[i].id)
                    }
                }
            }
            titre.sort();
            setSuggestedMovie(titre)
            setApiTitre(listeapi)
        })
    }
    return (
        <div className="searchbar">
            <input type="text" placeholder="Rechercher un film"
                value={input} onChange={( e ) => 
                handleChange(e.target.value)}>
            </input>
            <SearchResultsList film={suggestedmovie}
                               listeAPii={apiTitre}/> 
        </div>

    )
};
