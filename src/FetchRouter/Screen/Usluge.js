import React, { useContext, useState, useEffect } from "react";
import "./Usluge.css";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getStranice } from "../Redux/Slices/SliceGlobal";
const Usluge = () => {
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.global.lista);
  const input = useSelector((state) => state.input.input);
  const [page, setPage] = useState(2);
  useEffect(() => {
    dispatch(getPosts(input));
  }, [input]);
  const noveStranice = () => {
    dispatch(getStranice({ input, page }));
    setPage((page) => page + 1);
  };
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
      <button onClick={noveStranice}> loading more</button>
    </>
  );
};
export default Usluge;
