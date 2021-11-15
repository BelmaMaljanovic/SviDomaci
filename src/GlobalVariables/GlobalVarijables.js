import { AppContext } from "..";
import React from "react";

const GlobalVarijables = (props) => {
  const value = React.useContext(AppContext);
  return <div>{value}</div>;
};

export default GlobalVarijables;
