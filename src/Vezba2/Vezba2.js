import React from "react";
import { AppContext } from "..";
import "./Vezba2.css";
import { useState } from "react";
const Vezba2 = () => {
  // const [dark, setDark] = useState(false);
  const promeniMood = () => {};
  const { theme } = React.useContext(AppContext);
  return (
    <div className={`${theme === "dark"}? "darkBox" : "okvir"}`}>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul>
          <li>Kontakt</li>
          <li>Pocetna</li>
          <li>O nama</li>
          <li>Usluge</li>
          <li>Program</li>
          <button className="buttn" onClick={promeniMood}>
            Dark
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Vezba2;
