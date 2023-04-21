import "../style/pop-up.css";

const Popup = ({ sometext }) => {
  return (
    <div className="Infos-popup">
      <img className="Poster-popup" src={sometext}></img>
      <ul>
        <li>Genres</li>
        <li>
          <h2>Notes :</h2>
        </li>
        <li>
          <h2>Synopsis :</h2>
        </li>
        <li>
          <h2>Réalisateur :</h2>
        </li>
      </ul>
    </div>
  );
};

export default Popup;
