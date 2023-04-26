import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import ShowDate from "./date";
import { Link } from "react-router-dom";
import getGenres from "./genres";


function Infos({ page }) {
  const [userData, setUserdata] = useState("");
  const [hoveredMovie, setHoveredMovie] = useState({});

  function handleMouseOver(movieId) {
    setHoveredMovie((prevState) => ({ ...prevState, [movieId]: true }));
  }

  function handleMouseOut(movieId) {
    setHoveredMovie((prevState) => ({ ...prevState, [movieId]: false }));
  }


  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=d39ae299256eab37e526904cb2b272b3&language=en-US&page=" +
    page;

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


  const popularMoviesArray = userData.results;


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
  }, [page]);

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

    <div>
    {popularMoviesArray?.map((movie) => (
      <div
        className="movie"
        onMouseOver={() => handleMouseOver(movie.id)}
        onMouseOut={() => handleMouseOut(movie.id)}
      >
        {hoveredMovie[movie.id] && (
          <Modal
            sometext={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
            somenote={movie.vote_average}
            sometitle={movie.title}
            someresume={movie.overview}
            somegenre={getGenres(movie).join(" - ")}
          />
        )}
        <Link to={"/" + movie.id}>
          <img
            className="backdrop-img"
            src={"https://image.tmdb.org/t/p/w200" + movie.backdrop_path}
          ></img>
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <span className="movie-date">
              <ShowDate date={movie.release_date} />
            </span>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

}
export default Infos;
