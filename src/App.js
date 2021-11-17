// import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Komponenta from "./ContextUseReducer/Komponenta/Komponenta";
import GlobalInput from "./FetchRouter/GlobalState/Globalnput";
import GlobalState from "./FetchRouter/GlobalState/GlobalState";
import Navigation from "./FetchRouter/Navigation/Navigation";
import Home from "./FetchRouter/Screen/Home";
import Jezik from "./FetchRouter/Screen/Jezik";
import Usluge from "./FetchRouter/Screen/Usluge";
import { Igrica } from "./Igrica/Igrica";
import NavBar from "./ZoiVezbanje/NavBar";

// import { GlobalState } from "./ContextUseReducer/GlobalState/GlobalState";
// import Komponenta from "./ContextUseReducer/Komponenta/Komponenta";
// import Quote from "./Qoute/Quote";
// import { Contextt } from "./Context/Contextt/Contextt";

// import Div from "./Context/Div/Div";
// import Input from "./Context/Input/Input";
// import Quote from "./Qoute/Quote";
// import Tabela from "./Tabela/Tabela";
// import GlobalVarijables from "./GlobalVariables/GlobalVarijables";
// import Vezba2 from "./Vezba2/Vezba2";
// import { ProductCard } from "./ProductCard/ProductCard";

// import Forma from "./Forma/Forma";
// import Vezba2 from "./Vezba2/Vezba2";

// import dzungla from "./dzungla.jpg";
// import strela from "./strela.jpg";
// import Kartica2 from "./kartica2";
// import Naslov from "./naslov";
// import Button from "./button";
// import Vezba1 from "./Vezba1/Vezba1";
// import VezbaInput from "./VezbaInput/VezbaInput";
// import { KarticaCela } from "./KarticaCela";

// const colums = [
//   { title: "desert", id: 1, dataindex: "desert" },
//   { title: "calories", id: 2, dataindex: "calories" },
//   { title: "fat", id: 3, dataindex: "fat" },
//   { title: "Carbs", id: 3, dataindex: "Carbs" },
//   { title: "protein", id: 4, dataindex: "Protein" },
// ];
// const listaPodataka = [
//   {
//     desert: "jogurt",
//     calories: "100g",
//     fat: "300",
//     Carbs: "410",
//     Protein: "20",
//   },
//   {
//     desert: "smoki",
//     calories: "100g",
//     fat: "300",
//     Carbs: 410,
//     Protein: "20",
//   },
//   {
//     desert: "gricko",
//     calories: "100g",
//     fat: "300",
//     Carbs: "410",
//     Protein: "20",
//   },
//   {
//     desert: "kidy",
//     calories: "100g",
//     fat: "300",
//     Carbs: 410,
//     Protein: "20",
//   },
//   {
//     desert: "hamburger",
//     calories: "100g",
//     fat: "300",
//     Carbs: 410,
//     Protein: "20",
//   },
// ];

function App() {
  return (
    <div>
      <NavBar />
      {/* 
        <BrowserRouter>
          <Navigation />
          <GlobalState>
            <GlobalInput>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usluge" element={<Usluge />} />
                <Route path="/jezik" element={<Jezik />} />
              </Routes>
            </GlobalInput>
          </GlobalState>
        </BrowserRouter>
       */}
    </div>
  );
  // const podaci = [
  //   { id: 1, ikonica: "fab fa-500px", naslov: "Shooting Stars" },
  //   { id: 2, ikonica: "far fa-flag", naslov: "The Catalyzer" },
  //   { id: 3, ikonica: "far fa-user", naslov: "Neptune" },
  //   { id: 4, ikonica: "far fa-heart", naslov: "Melanchole" },
  //   { id: 5, ikonica: "far fa-moon", naslov: "Bunker" },
  //   { id: 6, ikonica: "far fa-hand-scissors", naslov: "Ramona Falls" },
  // ];
  // return (
  //   <div className="okvir">
  //     <Naslov />
  //     <div className="kartice">
  //       <div className="karticee">
  //         {podaci.map((podatak) => (
  //           <Kartica2 ikonica={podatak.ikonica} naslov={podatak.naslov} />
  //         ))}
  //       </div>
  //     </div>
  //     <Button />
  //   </div>
}

export default App;
