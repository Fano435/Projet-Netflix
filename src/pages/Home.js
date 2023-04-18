import React from "react";
import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Je suis la page d'acceuil
      <Infos />
      <Link to={"/page"}>Lien vers la page détail</Link>
    </div>
  );
}
export default Home;
