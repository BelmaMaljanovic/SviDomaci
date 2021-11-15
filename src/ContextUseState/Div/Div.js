import React, { useContext } from "react";
import { ContextContext } from "../Contextt/Contextt";

const Div = () => {
  const { stanje, useStanje } = useContext(ContextContext);
  useStanje("aaaa");
  return <div>{stanje}</div>;
};

export default Div;
