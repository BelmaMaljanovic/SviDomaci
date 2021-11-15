import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../Redux/Slices/SliceGlobal";
import "./Home.css";
import { noviIput } from "../Redux/Slices/SliceInput";

const Home = () => {
  const loading = useSelector((state) => state.global.loading);
  const dispatch = useDispatch();
  const lista = useSelector((state) => state.global.lista);
  const [input2, setInput2] = useState("");
  const [kartica, setKartica] = useState(true);
  const [naslov, setNasloiv] = useState("naslov");

  let url2 = `https://newsapi.org/v2/everything?q=${input2}&sortBy=publishedAt&apiKey=42db0f4ba8144ae0b2e9af8b2c443c33`;
  useEffect(() => {
    if (kartica) {
      setKartica("kartica");
    }
  }, []);
  const submit = (e) => {
    e.preventDefault();

    dispatch(noviIput(input2));
    if (kartica) {
      setKartica("kartica");
      setNasloiv("naslovv");
    }
    dispatch(getPosts(input2));
    console.log(lista);
  };
  if (loading) return <p>Loading...</p>; // sto ne u useefect?
  return (
    <>
      <div className={naslov}>
        <h1>Dobrodosli na nasu mini-enciklopediju!</h1>
        <h2>Klikom na "pretrazi" unesite pojam o kojem zelite citati.</h2>
      </div>

      {lista[0] && (
        <div className={kartica}>
          <p>{lista[0].content}</p>
        </div>
      )}

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="pretrazi"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default Home;
