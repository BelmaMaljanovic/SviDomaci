import { useEffect, useState } from "react";
import { API } from "../Api";
import "./Qoute.css";

export default Quote;
function Quote(props) {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    API.get("/quotes?page=1")
      .then((result) => {
        setQuote(result.data.results);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="feth">
      {quote.map((element) => {
        return <p>{element.content} </p>;
      })}

      {/* {JSON.stringify(quote)} */}
    </div>
  );
}
