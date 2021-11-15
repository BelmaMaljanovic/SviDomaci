import React from "react";

const Row = (props) => {
  const { children, justifty, border } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: justifty ? justifty : "center",
        border: border ? "2px solid gray" : "",
      }}
    ></div>
  );
};

export default Row;
