import React from "react";
import "./navbar.css";
import { useState, useEffect } from "react";
import axios from "axios";

const NavBar = ({ logo, link1 }) => {
  const [varijabla, setVarijabla] = useState("hello");
  const [input, setInput] = useState("unesi tekst");
  const [div, setDiv] = useState("nav");
  const [res, setRes] = useState([]);

  const promeni = () => {
    setVarijabla(input);
  };

  let url2 = `https://newsapi.org/v2/everything?q=${input}&sortBy=publishedAt&apiKey=42db0f4ba8144ae0b2e9af8b2c443c33`;
  const fetchuj = async () => {
    axios.get(url2).then((result) => {
      setRes(result.data.articles);
    });
    return res;
  };
  console.log(res);

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
        <button onClick={fetchuj}>fetchuj</button>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="unesi"
          value={input}
        ></input>
      </nav>
      <div>
        {res.length &&
          res.map((el) => {
            return <p>{el.title}</p>;
          })}
      </div>
    </div>
  );
};

export default NavBar;
