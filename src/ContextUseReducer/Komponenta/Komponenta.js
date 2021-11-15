import { GlobalContext } from "../GlobalState/GlobalState";
import React, { useState, useContext } from "react";

const Komponenta = () => {
  const { stanje, dispatch } = useContext(GlobalContext);
  const [stanjeInputa, setStanjeInputa] = useState("");

  console.log(stanje, dispatch);
  const promeni = (e) => {
    e.preventDefault();
    dispatch({ type: "promeni", payload: stanjeInputa });
  };
  return (
    <div>
      <form onSubmit={promeni}>
        <input
          type="text"
          placeholder="name"
          value={stanjeInputa}
          onChange={(e) => setStanjeInputa(e.target.value)}
        ></input>
      </form>
      <div>{stanje}</div>
    </div>
  );
};

export default Komponenta;
