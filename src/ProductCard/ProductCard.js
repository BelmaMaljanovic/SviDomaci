import React from "react";
import "./ProductCard.css";
import { useState } from "react";

export const ProductCard = (props) => {
  const { image, product, size } = props;
  const [korpa, setKorpa] = useState(1);
  const [korpaCena, setKorpaCena] = useState(5);

  const korpaUvecaj = () => {
    setKorpa(korpa + 1);
    setKorpaCena(korpaCena + 5);
  };
  const korpaUmanji = () => {
    setKorpa(korpa - 1);
    setKorpaCena(korpaCena - 5);
  };
  return (
    <div className="product">
      <div className="imageProduct">
        <img src={image}></img>
      </div>
      <div className="descriptionProduct">
        <p>
          <b>Product:</b> New Leather Men's Wallet
          <br />
        </p>
        <p>
          <b>Size:</b>
        </p>
      </div>
      <div className="shoppingCart">
        <p>
          <button className="buttnkorpa" onClick={korpaUvecaj}>
            +
          </button>
          {korpa}
          <button className="buttnkorpa" onClick={korpaUmanji}>
            -
          </button>
          <br />${korpaCena}
        </p>
      </div>
    </div>
  );
};
