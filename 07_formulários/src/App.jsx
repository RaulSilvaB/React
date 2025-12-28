import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm
        user={{
          name: "josias",
          email: "josias@gmail.com",
          bio: "sou um dev",
          role: "adimin",
        }}
      />
    </div>
  );
}

export default App;
