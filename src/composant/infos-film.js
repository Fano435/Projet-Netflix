import React, { useState, useEffect } from "react";
import Modal from "./Modal";

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

  const popularMoviesArray = userData.results;
  console.log(popularMoviesArray);
  const movieGenres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  function getGenres(movie) {
    const genres = [];
    movie.genre_ids.map((genreId) => {
      movieGenres.map((genre) => {
        if (genreId == genre.id) {
          genres.push(genre.name);
        }
      });
    });
    return genres;
  }

  useEffect(() => {
    getData(url);
  }, [page]);

  return (
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
              somenote={movie.release_date}
              someresume={movie.overview}
              somegenre={getGenres(movie).join(" - ")}
            />
          )}
          <img
            className="backdrop-img"
            src={"https://image.tmdb.org/t/p/w200" + movie.backdrop_path}
          ></img>
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <span className="movie-date">{movie.vote_average}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Infos;
