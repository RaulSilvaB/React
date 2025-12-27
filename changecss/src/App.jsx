import { useState } from "react";
import "./App.css";
import Car from "./components/Car";

function App() {
  const MyCars = [
    { name: "Fusca", km: 1000, color: "branca" },
    { name: "Polo", km: 3200, color: "Cinza" },
    { name: "Onix", km: 0, color: "Preto" },
  ];

  return (
    <div className="App">
      <h1>Show de carros</h1>
      <div className="car-container">
        {MyCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
