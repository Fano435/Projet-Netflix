import React from "react";
import "../style/styles.css";
import "../style/modal.css";

const Modal = ({ sometext, somenote, someresume, somegenre }) => {
  return (
    <div className="Infos-popup">
      <img src={sometext}></img>
      <ul>
        <li>
          <span>{somegenre}</span>
        </li>
        <li>
          <h3>{somenote}</h3>
        </li>
        <li>
          <p> {someresume}</p>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
