import Navbar from "./components/Navbar";
import JumboTron from "./components/Jumbotron";
import HumidityForm from "./components/HumidityForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto">
        <div className="w-3/4 mx-auto">
          <JumboTron />
          <HumidityForm />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
