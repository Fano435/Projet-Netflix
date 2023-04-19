import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import React, {useState,useEffect} from "react";
import { Header } from "./header";
import { LandingPage } from "./landing-page";
import { ImageDeFilm } from "./choixdesfilm";

=======
import React, { useEffect, useState } from "react";
import Header from "../composant/header";
import LandingPage from "./landing-page";
>>>>>>> fe174158e6c3d795b6aba09326e792a5bb1b3e88

function Home() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 600));
  }
  return (
    <div>
<<<<<<< HEAD
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
=======
      <div className="wrapper">
        <Header />
        <section>
          <h1>Je suis la page d'acceuil</h1>
          {numbers.map((number) => (
            <Link to={"/page"}>
              <Infos id={number}></Infos>
            </Link>
          ))}
        </section>
        <LandingPage />
      </div>
>>>>>>> fe174158e6c3d795b6aba09326e792a5bb1b3e88
    </div>
  );
}
export default Home;
