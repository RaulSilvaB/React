import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {

  const[showCards,setShowCards] = useState(true)

  return (
    
    <div className="container">
      <button onClick={() => setShowCards((prevState) => !prevState)} className="ocultar">
        Exibir / ocultar
        </button>
      {showCards &&(
      <>
      
    <Card imageUrl="src/imgs/casal1.PNG" name="Casal Lindos"/>

    <Card imageUrl="src/imgs/casal2.JPG" name="Casal Maravilhosos"/> 
       

    </>
     )}
  </div>

  
  );
}

export default App;
