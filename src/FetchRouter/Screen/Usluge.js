import React, { useContext, useState, useEffect } from "react";
import "./Usluge.css";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Redux/Slices/SliceGlobal";
const Usluge = () => {
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.global.lista);
  const input = useSelector((state) => state.input.input);
  useEffect(() => {
    dispatch(getPosts(input));
  }, [input]);

  console.log(lista);
  return (
    <>
      <div className="kartice">
        {lista.map((el) => (
          <div className="karticaa" key={el._id}>
            {el.content}
          </div>
        ))}
      </div>
    </>
  );
};
export default Usluge;
