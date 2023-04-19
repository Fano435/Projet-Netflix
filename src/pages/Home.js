import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import React, {useState,useEffect} from "react";
import { Header } from "./header";
import { LandingPage } from "./landing-page";
import { ImageDeFilm } from "./choixdesfilm";


function Home() {
  const [userData, setUserdata] = useState("");

  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=d39ae299256eab37e526904cb2b272b3";
  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setUserdata(jsonData);
  };

  useEffect(() => {
    getData(url);
  }, []);
  console.log(userData);

  const dataKeys = Object.keys(userData);
  return (
    <div>
      {userData.budget}
      {dataKeys.map((key) => (
        <h3>
          {key} : {userData.key}
        </h3>
      ))}
      Je suis la page d'acceuil
      <Header/>
      <LandingPage/>
      <ImageDeFilm/>
      <Infos />
      <Link to={"/page"}>Lien vers la page détail</Link>
    </div>
  );
}
export default Home;
