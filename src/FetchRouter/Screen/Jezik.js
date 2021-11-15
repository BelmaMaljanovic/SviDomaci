import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPrevedeno } from "../Redux/Slices/SliceGlobal";

const Jezik = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.input);
  const prevedeno = useSelector((state) => state.global.prevedenaLista);
  const loading = useSelector((state) => state.global.loading);
  const [opcija, setOpcija] = useState("publishedAt");
  const [jezik, setJezik] = useState("en");

  useEffect(() => {
    dispatch(getPrevedeno({ input: input, opcija: opcija, jezik: jezik }));
  }, [jezik, opcija]);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <form>
        <select
          name="jezik"
          id="jezik"
          defaultValue={jezik}
          onChange={(e) => setJezik(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ar">Armenian</option>
          <option value="de">Deutch</option>
          <option value="es">Espanol</option>
          <option value="it">Italian</option>
          <option value="pt">Portugal</option>
        </select>

        <select
          name="opcija"
          id="opcija"
          defaultValue={opcija}
          onChange={(e) => setOpcija(e.target.value)}
        >
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevancy</option>
          <option value="publishedAt">PublishedAt</option>
        </select>
      </form>
      <div className="kartice">
        {prevedeno[0] &&
          prevedeno.map((el) => <div className="karticaa">{el.content}</div>)}
        no
      </div>
    </div>
  );
};

export default Jezik;
