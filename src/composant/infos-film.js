import React, { useState, useEffect } from "react";

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

function rechercherFilm(input) {
  const id = "";
  nbFilms.forEach((film) => {
    if (film.title == input) {
      id = film.id;
    }
  });
  return id;
}

function Infos() {
  const [userData, setUserdata] = useState("");

  const url =
    "https://api.themoviedb.org/3/movie/530?api_key=d39ae299256eab37e526904cb2b272b3";
  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setUserdata(jsonData);
  };

  useEffect(() => {
    getData(url);
  }, []);

  const cleanedData = filterProperties(userData);

  const dataCountries = cleanedData.production_countries;
  const dataGenres = userData.genres;
  const dataKeys = Object.keys(cleanedData);
  const dataValues = Object.values(cleanedData);
  const backdropImg = cleanedData.backdrop_path;
  const posterImg = cleanedData.poster_path;

  return (
    <div className="infos">
      <span>Je suis le component infos</span>
      {dataKeys?.map((key) => (
        <span>{key}</span>
      ))}
      {dataValues?.map((value) => (
        <span>{value}</span>
      ))}
      {dataCountries?.map((country) => (
        <h3>{country.name}</h3>
      ))}
      {dataGenres?.map((genre) => (
        <h3>{genre.name}</h3>
      ))}
    </div>
  );
}
export default Infos;
