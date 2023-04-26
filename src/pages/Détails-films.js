import Header from "../composant/header";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/détails-films.css";
import getGenres from "../composant/genres";
import ShowDate from "../composant/date";

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

  const title = movie?.title;
  const original_title = movie?.original_title
  const note = movie?.vote_average;
  const date = movie?.release_date;
  const resume = movie?.overview;
  const img = "https://image.tmdb.org/t/p/w200" + movie?.poster_path
  const language = movie?.original_language;
  const genre = movie?.genres
  const Genress = []
  for (const i in genre) {
    Genress.push(genre[i].name)
    Genress.join(" ")
    console.log()
  }
  

  

  // if (movie) {
  //   const genres = getGenres(movie);
  //   console.log(movie);
  //   console.log(genres);

  // }

  return (
    
    <div>
      <Header />
      

      <div className="details">
     
          <div className="upper-block">
            <div className="wrapper">
              <div className="middle">
              
                <img className="img-film" src= {img} ></img>

                    <div className="title-ul">

                        <h2> {title} </h2>
                        
                        <span className="facts"> {} / {note} / {} </span>
                        <br></br>
                        <span className="date">
                          <ShowDate date={date}></ShowDate>
                        </span>

                        <div className="synopsis">

                          <span className="resume">Synopsis </span> 

                          <p> {resume}
                          </p>
              </div>
            </div>                         
          </div>  
      </div>
      
          </div >

            <div className="wrapper">

              <ul>
                <li><span className="bold-style">Titre d'origine : </span>  {original_title} </li>
                <li><span className="bold-style">Genre : </span> {Genress.join(" - ")} </li>
                <li><span className="bold-style">Date de sortie : </span> <ShowDate date={date}></ShowDate> </li>
                <li><span className="bold-style">Langue d'origine : </span> {language} </li>
                <li><span className="bold-style">Durée du film : </span>  </li>
                <li><span className="bold-style">Budget : </span> </li>
              </ul>

            </div>
        </div>

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
