import React from "react";
import "./Igrica.css";

export const Igrica = () => {
  const karte = ["pokemon1", "pokemon2", "pokemon3", "pokemon4", "pokemon5"];
  return (
    <div className="body">
      <h1>Magic Match</h1>
      <div className="newgame"> new game</div>
      <div className="karte">
        {karte.map((el) => {
          <img src="{el}"></img>;
        })}
      </div>
    </div>
  );
};
