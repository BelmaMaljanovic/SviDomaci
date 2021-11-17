import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";

const NavBar = ({ logo, link1 }) => {
  const [varijabla, setVarijabla] = useState("hello");
  const [input, setInput] = useState("unesi tekst");
  const [div, setDiv] = useState(true);

  useEffect(() => {
    if (div) {
      setDiv("navv");
    }
  }, [div]);

  const promeni = () => {
    setVarijabla(input);
  };
  console.log(input);
  return (
    <div className={div}>
      <nav>
        <p>{varijabla}</p>
        <ul>
          <li>{link1}</li>
          <li>Home1</li>
          <li>Home2</li>
          <li>Home3</li>
        </ul>
        <button onClick={promeni}>promeni</button>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="unesi"
          value={input}
        ></input>
      </nav>
    </div>
  );
};

export default NavBar;
