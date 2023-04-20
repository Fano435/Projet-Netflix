import Infos from "../composant/infos-film";
import { Link } from "react-router-dom";
import Header from "../composant/header";
import LandingPage from "./landing-page";
import Popup from "../composant/pop-up";


function Home() {

  const numbers = [];
  for (let i = 0; i < 13; i++) {
    numbers.push((Math.random() * 600));
  }
  return (
    <div>
      <div className="wrapper">
        <Header />
        <section>
          <h1>Je suis la page d'acceuil</h1>
          {numbers.map((number) => (
            <Infos id={number}></Infos>
          ))}
        </section>
        <LandingPage />
      </div>
    </div>
  );
}
export default Home;