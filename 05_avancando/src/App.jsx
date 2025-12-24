import { Fragment, useState } from "react";
import "./App.css";
import img from "./assets/city.jpg";
import ConditionalRender from "./components/ContionalReader";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUseName from "./components/ShowUseName";
import CarDetails from "./components/CarDetails";
import SemPai from "./components/SemPai";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

function App() {
  const name = "Raul";
  const nameUseState = useState("Raul com UseState");

  const cars = [
    { id: 1, marca: "ferrari", km: 454548, cor: "BLACK", novo: false },
    { id: 2, marca: "lamboghini", km: 9784, cor: "LARANJA", novo: false },
    { id: 3, marca: "posche", km: 0, cor: "VERDE", novo: true },
  ];

  function ShowMessage(){
    console.log("função executada")
  }

  return (
    <div className="app">
      <h1>Avançando em React.JS</h1>

      <div>
        <img src="/img1.jpg" alt="" />
      </div>

      <div>
        <img src={img} alt="" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      <ShowUseName name={name} />
      <ShowUseName name={nameUseState} />

      <CarDetails marca="BMW" km={28956} cor={"AZUL"} novo={false} />
      <CarDetails marca="FORD" km={0} cor={"VERMELHO"} novo={true} />
      <CarDetails marca="FIAT" km={48764} cor={"BRANCO"} novo={false} />

      {cars.map((car) => (
        <CarDetails
          key={car.id}
          marca={car.marca}
          km={car.km}
          cor={car.cor}
          novo={car.novo}
        />
      ))}
      <SemPai/>

      <Container valor={"10mil"} >
        <p>fiho</p>
        <p>sobrinho</p>
     </Container>

      <ExecuteFunction Myfunction={ShowMessage}/>

    </div>
  );
}

export default App;
