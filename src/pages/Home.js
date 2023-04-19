import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../composant/header";
import LandingPage from "./landing-page";

function Home() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 600));
  }
  return (
    <div>
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
    </div>
  );
}
export default Home;
