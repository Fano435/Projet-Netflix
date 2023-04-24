import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";



function Infos({ id }) {

  const [userData, setUserdata] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [Ishere, setIsHere] = useState(true);
  


  const url =
  "https://api.themoviedb.org/3/movie/" +
  id +
  "?api_key=d39ae299256eab37e526904cb2b272b3";

  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setUserdata(jsonData);
  };
  



  const cleanedData = filterProperties(userData);

  const dataCountries = cleanedData.production_countries;
  const dataGenres = userData.genres;
  const dataKeys = Object.keys(cleanedData);
  const dataValues = Object.values(cleanedData);
  const backdropImg = cleanedData.backdrop_path;
  const posterImg = cleanedData.poster_path;
  const voteAverage = Math.floor(cleanedData.vote_average* 10) ;
  const overView = cleanedData.overview;

  let genredufilm = []

  for (let i in dataGenres) {
    const valeurobjet = dataGenres[i]
    const film = valeurobjet.name
    genredufilm.push(film)
  }



  for (let obj in dataGenres) {
    const gdf = dataGenres[obj].name
  }
  const vraigenredufilm = genredufilm.join(', ')
  


  function filterProperties(obj) {
    const filteredObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "string" || typeof value === "number") {
        if (key != "id" && key != "imdb_id") {
          filteredObj[key] = value;
          if (value.toString().indexOf("/") == 0) {
            filteredObj[key] = "https://image.tmdb.org/t/p/w200" + value;
          }
        }
      }
    }
    return filteredObj; 
  }

  useEffect(() => {
    getData(url);
  }, []);

 
  return (
    
    <div
      className="infos"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >


      {isHovering && <Modal sometext={posterImg}
                            somenote={voteAverage} 
                            someresume={overView}
                            somegenre={vraigenredufilm}/>}
      {}                   

      <img className="backdrop-img" src={backdropImg}></img>
    </div>
    
  );
}



export default Infos;