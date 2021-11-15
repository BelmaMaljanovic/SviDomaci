import React from "react";

const Column = (props) => {
  const { children, justifty, border } = props;
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: justifty ? justifty : "center",
        flexDirection: "column",
        border: border ? "2px solid gray" : "",
      }}
    >
      {children}
      //hajerorder komponente //table componenta
    </div>
  );
};

export default Column;
