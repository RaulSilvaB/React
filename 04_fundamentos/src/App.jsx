import FirstComponents from "./Components/FirstComponents";
import "./App.css";
import TemplateExpressions from "./Components/TemplateExpressions";
import MyComponent from "./Components/MyComponent";
import Events from "./Components/Events";
import SomarNumeros from "./Components/SomarNumeros";

const teste = " do raul em";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos{teste} React</h1>
      <FirstComponents />
      <TemplateExpressions />
      <MyComponent/>
      <Events/>
      <SomarNumeros/>
    </div>
  );
}

export default App;
