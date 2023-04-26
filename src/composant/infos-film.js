import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ShowDate from "./date";
import { Link } from "react-router-dom";
import getGenres from "./genres";

function Infos({ page, genres }) {
  const [userData, setUserdata] = useState("");
  const [hoveredMovie, setHoveredMovie] = useState({});

  function handleMouseOver(movieId) {
    setHoveredMovie((prevState) => ({ ...prevState, [movieId]: true }));
  }

  function handleMouseOut(movieId) {
    setHoveredMovie((prevState) => ({ ...prevState, [movieId]: false }));
  }

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=d39ae299256eab37e526904cb2b272b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}`;

  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setUserdata(jsonData);
  };

  const popularMoviesArray = userData.results;
  let popularMoviesCleaned = popularMoviesArray?.filter(
    (movie) => movie.backdrop_path != null
  );

  useEffect(() => {
    getData(url);
  }, [page, genres]);

  return (
    <div>
      {popularMoviesCleaned?.map((movie) => (
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
