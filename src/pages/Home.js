import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Home() {
  const [id, setId] = useState(500);
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {numbers.map((number) => (
        <Infos id={number} />
      ))}
      Je suis la page d'acceuil {id}
      <Infos id={id} />
      <Link to={"/page"}>Lien vers la page détail</Link>
    </div>
  );
}
export default Home;
