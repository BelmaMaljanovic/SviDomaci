import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="navigacija">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/usluge">Opsirnije</Link>
        <Link to="/jezik"> Prevedi</Link>
      </nav>
    </div>
  );
};

export default Navigation;
