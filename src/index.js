import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Kartica from "./kartica";
import OIP from "./OIP.jpg";
import dzungla from "./dzungla.jpg";
import strela from "./strela.jpg";
import Kartica2 from "./kartica2";
import Naslov from "./naslov";
import Button from "./button";

ReactDOM.render(
  <React.StrictMode>
    <div className="okvir">
      <Naslov />
      <div className="kartice">
        <div className="karticee">
          <Kartica2 naslov="Shooting Stars" ikonica="fab fa-500px" />
          <Kartica2 naslov="The Catalyzer" ikonica="far fa-flag" />
          <Kartica2 naslov="Neptune" ikonica="far fa-user" />
          <Kartica2 naslov="Melanchole" ikonica="far fa-heart" />
          <Kartica2 naslov="Bunker" ikonica="far fa-moon" />
          <Kartica2 naslov="Ramona Falls" ikonica="far fa-hand-scissors" />
        </div>
      </div>
      <Button />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
