import React from "react";
import Button from "./button";
import Naslov from "./naslov";
import "./App.css";
import Kartica2 from "./kartica2";

export const KarticaCela = () => {
  const podaci = [
    { id: 1, ikonica: "fab fa-500px", naslov: "Shooting Stars" },
    { id: 2, ikonica: "far fa-flag", naslov: "The Catalyzer" },
    { id: 3, ikonica: "far fa-user", naslov: "Neptune" },
    { id: 4, ikonica: "far fa-heart", naslov: "Melanchole" },
    { id: 5, ikonica: "far fa-moon", naslov: "Bunker" },
    { id: 6, ikonica: "far fa-hand-scissors", naslov: "Ramona Falls" },
  ];
  return (
    <div>
      (
      <div className="okvir">
        <Naslov />
        <div className="kartice">
          <div className="karticee">
            {podaci.map((podatak) => (
              <Kartica2 ikonica={podatak.ikonica} naslov={podatak.naslov} />
            ))}
          </div>
        </div>
        <Button />
      </div>
      );
    </div>
  );
};
