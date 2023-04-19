import React, { useState, useEffect } from "react";

function filterBooleanProperties(obj) {
  const filteredObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value !== "boolean") {
      filteredObj[key] = value;
    }
  }
  return filteredObj;
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

  const cleanedData = filterBooleanProperties(userData);
  console.log(userData);
  console.log(cleanedData);

  const dataCountries = cleanedData.production_countries;
  const dataGenres = cleanedData.genres;
  const dataKeys = Object.keys(cleanedData);
  const backdropImg = cleanedData.backdrop_path;
  const posterImg = cleanedData.poster_path;

  return (
    <div className="infos">
      <span>Je suis le component infos</span>
      {dataKeys?.map((key) => (
        <h3>
          {key} : {cleanedData.key}
        </h3>
      ))}
      {dataCountries?.map((country) => (
        <h3>{country.name}</h3>
      ))}
      {dataGenres?.map((genre) => (
        <h3>{genre.name}</h3>
      ))}
      <img
        src={"https://image.tmdb.org/t/p/w200" + backdropImg}
        alt={cleanedData.title}
      ></img>
      <img
        src={"https://image.tmdb.org/t/p/w200" + posterImg}
        alt={cleanedData.title}
      ></img>
      ;
    </div>
  );
}
export default Infos;
