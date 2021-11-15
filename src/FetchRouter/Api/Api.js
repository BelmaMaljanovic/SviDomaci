import axios from "axios";

var url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2020-11-07&" +
  "sortBy=popularity&" +
  "apiKey=42db0f4ba8144ae0b2e9af8b2c443c33";

// export const API = axios.create({
//   baseURL: "https://newsapi.org/v2/everything?",
// });

export const API = axios.create({
  baseURL:
    "https://newsapi.org/v2/everything?q=tesla&from=2021-10-08&sortBy=publishedAt&apiKey=42db0f4ba8144ae0b2e9af8b2c443c33",
});

//dev vton extenzxn za menjanjevstejta
//redaks tulked i stara sintaksa
