import Header from "../composant/header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Détails() {
  const { handle } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${handle}
    ?api_key=d39ae299256eab37e526904cb2b272b3`)
      .then((response) => response.json())
      .then(setUser);
  }, [handle]);

  const Title = user ? user.title : "";
  return (
    <div>
      <Header />
      <div className="content">
        <div className="wrapper">
          <h1>{Title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Détails;
