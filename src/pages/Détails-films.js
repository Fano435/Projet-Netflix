import Header from "../composant/header";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/détails-films.css";
import getGenres from "../composant/genres";

function Détails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}
    ?api_key=d39ae299256eab37e526904cb2b272b3`)
      .then((response) => response.json())
      .then(setMovie);
  }, [id]);

  const [similarMovies, setSimilarMovies] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d39ae299256eab37e526904cb2b272b3&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then(setSimilarMovies);
  }, [id]);

  const similarMoviesArray = similarMovies?.results;
  console.log(similarMoviesArray);
  const title = movie?.title;
  return (
    <div>
      <Header />
      <div className="content">
        <div className="wrapper">
          <h1>{title}</h1>
          <section className="slider">
            <h2>Films du même genre :</h2>
            <div className="slider-container">
              {similarMoviesArray
                ?.filter((movie) => movie.poster_path !== null)
                .map((movie) => (
                  <Link to={"/" + movie.id}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w200" + movie.poster_path
                      }
                    ></img>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Détails;
