import React from "react";
import { useState } from "react";

const Vezba1 = (props) => {
  const [inputs, setInputs] = useState("");
  const inputList = [
    { name: "text1", type: "text" },
    { name: "text2", type: "text" },
    { name: "text3", type: "text" },
    { name: "text4", type: "text" },
    { name: "text5", type: "text" },
  ];
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };
  return (
    <div>
      {inputList.map((podatak) => {
        <input
          type={podatak.type}
          value={podatak.name}
          onChange={handleChange}
        />;
      })}
      {/* <input type="text" value={text} onChange={onChange} />
      <input type="email" value={email} onChange={onEmailChange} />
      <button onClick={onClick}>Submit</button>
    </div> */}
      {/* <button onChange={handleChange}>submin</button> */}
    </div>
  );
};

export default Vezba1;
