import { useState } from "react";
import React from "react";
import "./VezbaInput.css";

const VezbaInput = (props) => {
  const [error, setError] = useState([]);
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [radio, setRadio] = useState("");

  const proveraRadia = (event) => {
    setRadio(event.target.value);
  };
  const promenaImena = (event) => {
    setIme(event.target.value);
  };
  const promenaEmaila = (event) => {
    setEmail(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    let error1 = [];
    if (ime.length == 0 || ime.length < 10) {
      error1.push("Neispravno ime. Molim vas unesite ponvoo");
    }
    if (!email.includes("@") && email.length < 4) {
      error1.push("Neispravan email.. Molim vas unesite ponvoo");
    }
    if (radio.length == 0) {
      error1.push("Molim Vas izaberite jedno polje");
    }
    setError(error1);
    console.log(error);
  };

  return (
    <div className="okvir">
      {error.length > 0 &&
        error.map((value, index) => <p key={index}>{value}</p>)}
      <form>
        <div className="input1">
          <label>Ime</label>
          <input
            type="text"
            id="name"
            value={ime}
            onChange={promenaImena}
          ></input>{" "}
          <br />
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={promenaEmaila}
          ></input>{" "}
          <br />
        </div>
        <div className="input2">
          <p>Choose your favorite candy:</p>
          <div
            className="radio-btn"
            onClick={() => {
              setRadio("jafa");
            }}
          >
            <input
              type="radio"
              value={radio}
              name="tripType"
              checked={radio == "jafa"}
            />
            Jafa
          </div>
          <div
            className="radio-btn"
            onClick={() => {
              setRadio("Rafaelo");
            }}
          >
            <input
              type="radio"
              value={radio}
              name="tripType"
              checked={radio == "Rafaelo"}
            />
            Rafaelo
          </div>
          <div
            className="radio-btn"
            onClick={() => {
              setRadio("Bela Plazma");
            }}
          >
            <input
              type="radio"
              value={radio}
              name="tripType"
              checked={radio == "Bela Plazma"}
            />
            Bela Plazma
          </div>
          <div
            className="radio-btn"
            onClick={() => {
              setRadio("Strudle");
            }}
          >
            <input
              type="radio"
              value={radio}
              name="tripType"
              checked={radio == "Strudle"}
            />
            Strudle
          </div>
        </div>
        <button onClick={submit}>submit</button>
      </form>
    </div>
  );
};

export default VezbaInput;
