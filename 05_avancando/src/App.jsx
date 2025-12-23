import "./App.css";
import img from "./assets/city.jpg";
import ConditionalRender from "./components/ContionalReader";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
function App() {
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
      <ConditionalRender/>
    </div>
  );
}

export default App;
