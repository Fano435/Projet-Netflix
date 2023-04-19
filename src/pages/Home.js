import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
