import React from "react";
import "./App.css";

const Kartica2 = (props) => {
  const { ikonica, naslov } = props;
  return (
    <div className="kartica2">
      <div className="ikonica">
        <i className={ikonica}></i>
      </div>
      <h1>{naslov}</h1>
      <p>
        Fingerstache flexitarian street art 8-bit waist co, subway tile poke
        farm.
      </p>
    </div>
  );
};

export default Kartica2;
