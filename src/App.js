import JumboTron from "./components/Jumbotron";
import HumidityForm from "./components/HumidityForm";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto">
        <div className="w-3/4 mx-auto">
          <JumboTron />
          <HumidityForm />
        </div>
      </div>
    </div>
  );
}

export default App;
