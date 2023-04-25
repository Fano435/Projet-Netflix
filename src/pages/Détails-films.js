import React from "react";
import Header from "../composant/header";
import "../style/détails-films.css"

function Détails() {

  return (
    <div className="block">
      
          <div className="wrapper">
            <Header></Header>
          </div>

        <div className="details">
          
          <div className="upper-block">
            <div className="wrapper-middle">
              <img className="img-film" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jAMVKvqxdNbUY2YQWhCclYI6coP.jpg"></img>

                <div className="title-ul">

                    <h2>Titre du film</h2>

                    <span className="facts">Genre / Note / Durée</span>
                    <br></br>
                    <span className="date">01/01/2000</span>

                    <div className="synopsis">

                      <span className="resume">Synopsis </span> 

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>

                    </div>                         
                </div>  
            </div>
      
          </div >

            <div className="wrapper">

              <ul>
                <li><span className="bold-style">Titre d'origine : </span>  </li>
                <li><span className="bold-style">Genre : </span>  </li>
                <li><span className="bold-style">Date de sortie : </span>  </li>
                <li><span className="bold-style">Durée du film : </span>  </li>
                <li><span className="bold-style">Budget : </span> </li>
              </ul>

            </div>
        </div>
    </div>
  );
}

export default Détails;
