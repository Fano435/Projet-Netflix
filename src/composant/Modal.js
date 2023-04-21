import React from "react";

const Modal = ({ sometext, somenote , someresume, somegenre}) => {

  return (

    <div className="infos-modal">
      
      <img src={sometext}></img>
      <ul>
        <li>Genres : {somegenre} </li>
        <li>Note : {somenote} / 100</li>
        <li><p>Synopsis : {someresume}</p> </li>
      </ul>
    </div>
  );
};

export default Modal;