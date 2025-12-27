import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponenys from "./components/MyComponenys";

function App() {
  const [count, setCount] = useState(0);
  const n = 15;

  const titulo = false;

  return (
    <div className="app">
      <h1>React Com Css</h1>
      <MyComponenys />
      <p>Parágrado do App.js</p>
      <p
        style={{
          fontSize: "20px",
          border: "10px solid green",
          padding: "20px",
          color: "gold",
        }}
      >
        Modifícado INLINE
      </p>
      <h2
        style={
          n >= 15
            ? { color: "red", background: "lightblue", padding: "20px" }
            : { color: "blue" }
        }
      >
        Css Dinâmico
      </h2>
      <h2
        style={
          n >= 25 ? { color: "red" } : { color: "blue", background: "black" }
        }
      >
        Css Dinâmico
      </h2>

      <h2 className={titulo ? "red-title" : "title"}>
        Titulo com Classe Dinâmica
      </h2>
    </div>
  );
}

export default App;
