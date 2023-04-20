const Popup = ({ sometext, somenote , someresume, somegenre}) => {
  return (
    <div className="Infos-popup">
      <img src={sometext}></img>
      <ul>
        <li>Genres : {somegenre} </li>
        <li>Note : {somenote} / 100</li>
        <li><p>Synopsis : {someresume}</p> </li>
      </ul>
    </div>
  );
};

export default Popup;