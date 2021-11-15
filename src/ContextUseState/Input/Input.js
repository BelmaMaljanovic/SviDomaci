import React, { useContext, useState } from "react";
import { ContextContext } from "../Contextt/Contextt";

const Input = () => {
  const { stanje, useStanje } = useContext(ContextContext);

  const [nesto, setNesto] = useState("belma");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nesto}
          onChange={(e) => setNesto(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Input;
